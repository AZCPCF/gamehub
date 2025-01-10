import { z } from "zod";

// String transformation
const uppercaseSchema = z.number().transform((val) => val * val);

// Parsing and transforming
const result = uppercaseSchema.parse(20);
console.log(result); // 400
