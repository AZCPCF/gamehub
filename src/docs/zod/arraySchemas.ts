import { z } from "zod";

// Arrays
const numbersArray = z.array(z.number().optional());
const stringArray = z.array(z.string());

// Minimum and maximum lengths
const limitedArray = z.array(z.string()).min(2).max(5);

console.log(numbersArray.parse([1, 2, 3])); // [1, 2, 3]
console.log(limitedArray.parse(["A", "B"])); // ["A", "B"]
