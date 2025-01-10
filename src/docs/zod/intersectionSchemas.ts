import { z } from "zod";

// Base schemas
const schemaA = z.object({ a: z.string() });
const schemaB = z.object({ b: z.number() });

// Intersection
const combinedSchema = schemaA.and(schemaB);

console.log(combinedSchema.parse({ a: "BUN", b:0 })); // { a: "BUN", b: 0 }
