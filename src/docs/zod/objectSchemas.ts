import { z } from "zod";

// Object schema
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  age: z.number().positive().optional(),
});

// Nested object schema
const postSchema = z.object({
  title: z.string(),
  content: z.string(),
  author: userSchema, // Nested schema
});

console.log(
  userSchema.parse({ id: "1", name: "Alisan", email: "dood@cpcf.com" })
);
// console.log(
//   postSchema.parse({
//     title: "test",
//     content: "test",
//     author: { id: "2", name: "testt", email: "sdsd@fs.com", age: 12 },
//   })
// );
