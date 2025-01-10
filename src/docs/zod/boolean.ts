import { z } from "zod";

const isActive = z.boolean({
  required_error: "isActive is required",
  invalid_type_error: "isActive must be a boolean",
});

console.log(isActive.parse(0)); // error
console.log(isActive.parse(1)); // error
console.log(isActive.parse("test")); // error
console.log(isActive.parse(true)); // true
console.log(isActive.parse(false)); // true
