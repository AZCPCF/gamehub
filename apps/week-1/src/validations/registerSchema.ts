import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(5).max(16),
  password: z
    .string()
    .min(8)
    .max(32)
    // .regex(
    //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
    //   "password not valid"
    // ),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
