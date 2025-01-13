import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string({ message: "username is required" })
    .min(5, "username must be as least 4 characters")
    .max(16, "username must be less than 16 characters"),
  password: z
    .string({ message: "password is required" })
    .min(8, "password must be as least 8 characters")
    .max(100, "password must be less than 100 characters")
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "password must includes uppercase &  lowercase characters and numbers"
    ),
});

export type LoginSchema = z.infer<typeof loginSchema>;
