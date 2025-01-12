import { z } from "zod";

const nullableString = z.nullable(z.string()); // first way

console.log(nullableString.parse(124)); // error
console.log(nullableString.parse(undefined)); // error
console.log(nullableString.parse("asdf")); // asdf
console.log(nullableString.parse(null)); // null

const nullableUser = z.object({ username: z.string().nullable() }); // second way
type NullableUser = z.infer<typeof nullableUser>;

const user: NullableUser = { username: null };
const user1: NullableUser = { username: "test" };
const user2: NullableUser = { username: undefined };
console.log(user2); // error
console.log(user1); // { username : "test" }
console.log(user); // { username : null }

const strSchema = z.string();
const nullableStr = strSchema.nullable();

/* */
console.log(nullableStr.unwrap() == strSchema); // true, we can use unwrap see data when its required
/* */

console.log(nullableStr.unwrap().parse(null)); // error
console.log(nullableStr.parse(null)); // null
console.log(nullableStr.unwrap().parse("test")); // "test"
console.log(nullableStr.unwrap().parse("test")); // "test"
