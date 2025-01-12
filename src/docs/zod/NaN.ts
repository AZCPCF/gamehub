import { z } from "zod";

const isNaN = z.nan({
	required_error: "isNaN is required",
	invalid_type_error: "isNaN must be 'not a number'",
});
console.log(isNaN.parse(12)); // error
console.log(isNaN.parse(12 * "n")); // NaN
