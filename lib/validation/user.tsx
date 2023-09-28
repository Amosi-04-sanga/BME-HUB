import * as z from "zod";

export const userValidation = z.object({
  profile_image: z.string().url().nonempty(),
  name: z.string().min(3, {message: 'at least 3 characters required!'}).max(30, {message: 'too long name!'}),
  username: z.string().min(3, {message: 'at least 3 characters required!'}).max(30, {message: 'too long username!'}),
  bio: z.string().min(3, {message: 'as least 3 characters required!'}).max(1000, {message: 'too long bio!'}),
});
