import { z } from "zod";

const test = z.literal("test"); // str,num,bigint,bool,symbol possible

console.log(test.parse("t")); // error
console.log(test.parse("test")); // "test"
console.log(test.value); // "test"
