import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { sign, verify, decode } from "hono/jwt";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signInInput, signUpInput } from "@jayrajput30/fullstack-medium-common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  try {
    const body = await c.req.json();

    const { success } = signUpInput.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct",
      });
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const user = await prisma.user.create({
      data: {
        email: body.email,
        username: body.username,
        password: body.password,
        name: body.name,
      },
    });
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({ message: "new user created!", token: jwt });
  } catch (e: any) {
    c.status(411);
    return c.json({ mesage: "Invalid! User already exists", error: e.message });
  }
});

userRouter.post("/signin", async (c) => {
  try {
    const body = await c.req.json();

    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { success } = signInInput.safeParse(body);

    if (!success) {
      c.status(411);
      return c.json({
        message: "Inputs not correct",
      });
    }
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ message: "incorrect credentials!" });
    }
    const jwt = await sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({ message: "user details found!", token: jwt });
  } catch (e: any) {
    console.error(e);
    c.status(403);
    return c.json({
      mesage: "Invalid! User credentials incorect",
      error: e.message,
    });
  }
});
