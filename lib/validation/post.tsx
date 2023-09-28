import * as z from "zod";

export const postValidation = z.object({
  image: z.string().url().nonempty(),
  accountId: z.string(),
  post: z.string().min(3, {message: 'at least 3 characters required!'}).max(1000, {message: 'too long post!'}),
});

export const commentValidation = z.object({
  // image: z.string().url().nonempty(),
  post: z.string().min(3, {message: 'at least 3 characters required!'}).max(1000, {message: 'too long post'})
})
