import { z } from "zod";

const numSchema = z.coerce.number();
console.log(numSchema.parse("12")) // 12
console.log(numSchema.parse("")) // 0
console.log(numSchema.parse(12)) // 12
console.log(numSchema.parse("test")) // error

const strSchema = z.coerce.string();
console.log(strSchema.parse('test')) // "test"
console.log(strSchema.parse(function () {})) // "function () {}"
console.log(strSchema.parse([])) // "                "
console.log(strSchema.parse({})) // "[object Object]"

// const emailSchema = z.coerce.string().email().min(5);

z.coerce.string(); // String(input)
z.coerce.number(); // Number(input)
z.coerce.boolean(); // Boolean(input)
z.coerce.bigint(); // BigInt(input)
z.coerce.date(); // new Date(input)

const booleanSchema = z.coerce.boolean(); // Boolean(input)

booleanSchema.parse("tuna"); // => true
booleanSchema.parse("true"); // => true
booleanSchema.parse("false"); // => true
booleanSchema.parse(1); // => true
booleanSchema.parse([]); // => true
booleanSchema.parse(0); // => false
booleanSchema.parse(""); // => false
booleanSchema.parse(undefined); // => false
booleanSchema.parse(null); // => false