import z from "zod";

export const signUpInput = z.object({
  email: z.string().email(),
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().optional(),
});

export const signInInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export const createPostInput = z.object({
  content: z.string(),
  title: z.string(),
});

export const updatePostInput = z.object({
  content: z.string(),
  title: z.string(),
  id: z.number(),
});

export type SignupInputType = z.infer<typeof signUpInput>;
export type SignInInputType = z.infer<typeof signInInput>;
export type CreatePostInputType = z.infer<typeof createPostInput>;
export type UpdatePostInputType = z.infer<typeof updatePostInput>;
