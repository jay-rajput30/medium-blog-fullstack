import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import {
  createPostInput,
  updatePostInput,
} from "@jayrajput30/fullstack-medium-common";

export const postRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

postRouter.use("/*", async (c, next) => {
  try {
    const authHeader = c.req.header("authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET);
    if (user) {
      c.set("userId", user.id);
      await next();
    }
  } catch (e: any) {
    c.json(403);
    return c.json({ message: "you are not logged in" });
  }
});
postRouter.get("/bulk", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const blogs = await prisma.post.findMany({
      select: {
        id: true,
        content: true,
        title: true,
        pusblished: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ status: "success", data: blogs });
  } catch (e: any) {
    c.status(411);
    return c.json({
      mesage: "Invalid! cannot find posts",
      error: e.message,
    });
  }
});

postRouter.get("/", async (c) => {
  try {
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const post = await prisma.post.findFirst({
      where: {
        id: body.id,
      },
    });

    if (!post) {
      c.status(403);
      c.json({ message: "unable to create new post" });
    }
    return c.json({ message: "new post found", post });
  } catch (e: any) {
    c.status(411);
    return c.json({
      mesage: "Invalid! cannot create new post",
      error: e.message,
    });
  }
});
postRouter.post("/", async (c) => {
  try {
    const body = await c.req.json();
    const authorId = c.get("userId");

    const { success } = createPostInput.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct",
      });
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.create({
      data: {
        authorId: Number(authorId),
        content: body.content,
        title: body.title,
      },
    });

    if (!post) {
      c.status(403);
      c.json({ message: "unable to create new post" });
    }
    return c.json({ message: "new post created", id: post.id });
  } catch (e: any) {
    c.status(411);
    return c.json({
      mesage: "Invalid! cannot create new post",
      error: e.message,
    });
  }
});

postRouter.put("/", async (c) => {
  try {
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { success } = updatePostInput.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct",
      });
    }
    const updatedPost = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: { title: body.title, content: body.content },
    });

    if (!updatedPost) {
      c.status(403);
      c.json({ message: "unable to update post" });
    }
    return c.json({ message: "post update was successful", updatedPost });
  } catch (e: any) {
    c.status(411);
    return c.json({
      mesage: "Invalid! unable to update post",
      error: e.message,
    });
  }
});

postRouter.get("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    return c.json({ message: "post found", data: post });
  } catch (e: any) {
    c.status(411);
    return c.json({
      mesage: "Invalid! unable to find post",
      error: e.message,
    });
  }
});
