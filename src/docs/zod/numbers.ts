import { z } from "zod";

const age = z.number({
  required_error: "Age is required",
  invalid_type_error: "Age must be a number",
});
console.log(age.parse(''))

const gt = z.number().gt(5); // greater
console.log(gt.parse(5)) // error
console.log(gt.parse(6)) // 6

const gte = z.number().gte(5) // greater or equal
console.log(gte.parse(4)) // error
console.log(gte.parse(5)) // 5

const lt = z.number().lt(5); // less than
console.log(lt.parse(5)); // error
console.log(lt.parse(4)); // 4

const lte = z.number().lte(5); // less than or equal
console.log(lte.parse(4)); // error
console.log(lte.parse(5)); // 5

z.number().int(); // value must be an integer

z.number().positive(); //     > 0
z.number().nonnegative(); //  >= 0
z.number().negative(); //     < 0
z.number().nonpositive(); //  <= 0

const multipleOf = z.number().multipleOf(5); // step of 5 ( x % 5 == 0 )
console.log(multipleOf.parse(7)) // error
console.log(multipleOf.parse(10)) // 10

const finite = z.number().finite(); // not Infinity or -Infinity
console.log(finite.parse(Infinity)) // error
console.log(finite.parse(10)) // 10

const safe = z.number().safe(); // between Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER (-9007199254740991 and 9007199254740991)
console.log(safe.parse(Number.MIN_SAFE_INTEGER - 1)); // error
console.log(safe.parse(-Infinity)); // error
console.log(safe.parse(-100)); // -100
console.log(safe.parse(10546)); // 10546
