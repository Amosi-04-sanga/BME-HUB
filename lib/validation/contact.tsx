"use client"
import * as z from "zod"

export const contactValidation = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(3).max(200)
})
