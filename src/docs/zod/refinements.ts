import { z } from "zod";

// Custom refinement
const positiveNumber = z
  .number()
  .refine((val) => val < 0, { message: "number must be nonpositive" });

console.log(positiveNumber.parse(10)); // Throws error
console.log(positiveNumber.parse(-5)); // -5
