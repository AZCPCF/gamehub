import { z } from "zod";
// Union of literals
const statusSchema = z.union([z.literal("success"), z.literal("error")]);

// Union of different types
const resultSchema = z.union([z.string(), z.number().nonnegative()]);
console.log(statusSchema.parse("success")); // "success"
console.log(resultSchema.parse(0)); // 0
