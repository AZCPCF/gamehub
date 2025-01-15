import { z } from "zod";

export const messagesSchema = z.object({
  message: z.string(),
  username: z.string(),
  id: z.string(),
});
export type MessagesSchema = z.infer<typeof messagesSchema>;
