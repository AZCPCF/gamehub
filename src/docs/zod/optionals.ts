import { z } from "zod";

const stringSchema = z.optional(z.string()); // first way

console.log(stringSchema.parse(123)); // error
console.log(stringSchema.parse(null)); // error
console.log(stringSchema.parse(undefined)); // undefined
console.log(stringSchema.parse("test")); // "test"

const userAge = z.object({ age: z.number().optional() }); // second way
type UserAge = z.infer<typeof userAge>;

const user: UserAge = { age: 12 };
const user1: UserAge = { age: undefined };
const user2: UserAge = { age: "test" };
console.log(user2); // error
console.log(user1); // { age : undefined }
console.log(user); // { age : 12 }

const strSchema = z.string();
const optionalString = strSchema.optional();

/* */
console.log(optionalString.unwrap() == strSchema); // true, we can use unwrap see data when its required
/* */

console.log(optionalString.unwrap().parse(undefined)); // error
console.log(optionalString.parse(undefined)); // undefined
console.log(optionalString.unwrap().parse("test")); // "test"
console.log(optionalString.unwrap().parse("test")); // "test"
