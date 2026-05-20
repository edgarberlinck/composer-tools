import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().trim().min(2, "Name must have at least 2 characters."),
  email: z.email("Please provide a valid email address.").toLowerCase(),
  password: z.string().min(8, "Password must have at least 8 characters."),
});

export const signInSchema = z.object({
  email: z.email("Please provide a valid email address.").toLowerCase(),
  password: z.string().min(8, "Password must have at least 8 characters."),
});
