"use client"
import * as z from "zod"

export const subscribersValidation = z.object({
  email: z.string().email()
})
