import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string().min(3),
  price: z.number().min(1),
});
