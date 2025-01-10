import { z } from "zod";

const gt = z.bigint().gt(5n); // greater
console.log(gt.parse(5n)); // error
console.log(gt.parse(6n)); // 6n

const gte = z.bigint().gte(5n); // greater or equal
console.log(gte.parse(4n)); // error
console.log(gte.parse(5n)); // 5n

const lt = z.bigint().lt(5n); // less than
console.log(lt.parse(5n)); // error
console.log(lt.parse(4n)); // 4n

const lte = z.bigint().lte(5n); // less than or equal
console.log(lte.parse(4n)); // error
console.log(lte.parse(5n)); // 5n

z.bigint().positive(); // > 0n
z.bigint().nonnegative(); // >= 0n
z.bigint().negative(); // < 0n
z.bigint().nonpositive(); // <= 0n

const multipleOf = z.bigint().multipleOf(5n); // step of 5n ( x % 5n == 0 )
console.log(multipleOf.parse(7)) // error
console.log(multipleOf.parse(10)) // 10n