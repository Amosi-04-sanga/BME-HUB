import * as z from 'zod'

export const threadValidation = z.object({
   thread: z.string().nonempty().min(3, {message: 'minimum 3 characters'}).max(1000, {message: 'maximum 1000 characters'}),
   accountId: z.string()
})

export const commentValidation = z.object({
    thread: z.string().nonempty().min(3, {message: 'minimum 3 characters'}).max(1000, {message: 'maximum 1000 characters'})
})

