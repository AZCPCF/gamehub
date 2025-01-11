import { z } from "zod";

const date = z.string().date(); // YYYY-MM-DD

console.log(date.parse("2021-01-32")); // error
console.log(date.parse("2027-01-2")); // error
console.log(date.parse("2025-01-01")); // "2025-01-01"
