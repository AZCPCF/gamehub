import { z } from "zod";

// Basic types
const stringSchema = z.string();
const numberSchema = z.number();
const booleanSchema = z.boolean();
const dateSchema = z.date();
const bigIntSchema = z.bigint();
const undefinedSchema = z.undefined();
const nullSchema = z.null();

// Parse examples
console.log(stringSchema.parse("Hello World !")); // "Hello World !"
console.log(numberSchema.parse(42)); // 42
console.log(booleanSchema.parse(true)); // true



// primitive values
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.symbol();

// empty types
z.undefined();
z.null();
z.void(); // accepts undefined

// catch-all types
// allows any value
z.any();
z.unknown();

// never type
// allows no values
z.never();