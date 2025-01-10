import { z } from "zod";

const numberSchema = z.number();
const result = numberSchema.safeParse("not a number");

if (!result.success) {
    console.error(result.error.errors); // Prints validation errors
    // console.error(result.error.errors[0].message);
}