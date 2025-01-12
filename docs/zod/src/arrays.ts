import z from "zod";

const stringArray = z.string().array(); // we can use z.array(z.string()) too
console.log(stringArray.element.parse(12)); // error
console.log(stringArray.element.parse("test")); // "test"
console.log(stringArray.element) // stringSchema

// optional

const stringOptionalArray = z.string().optional().array(); // (string | undefined)[]
const stringArrayOptional = z.string().array().optional(); // string[] | undefined

// nonempty

const nonemptyArray = stringArray.nonempty("Arr cant be empty :/"); // [string,...string[]]
console.log(nonemptyArray.parse([])); // error
console.log(nonemptyArray.parse(["test"])); // [ "test" ]

// min

const minArray = stringArray.min(2);
console.log(minArray.parse(["test"])); // error
console.log(minArray.parse(["test1", "test2"])); // [ "test1" , "test2" ]
console.log(minArray.parse(["test1", "test2" , "test3"])); // [ "test1" , "test2" , "test3" ]

// max

const maxArray = stringArray.max(2);
console.log(maxArray.parse(["test1", "test2", "test3"])); // error
console.log(maxArray.parse(["test"])); // [ "test" ]
console.log(maxArray.parse(["test1", "test2"])); // [ "test1" , "test2" ]

// length

const lengthArray = stringArray.length(2); // must have two indexes
console.log(lengthArray.parse(["test"])); // error
console.log(lengthArray.parse(["test1", "test2", "test3"])); // error
console.log(lengthArray.parse(["test1", "test2"])); // [ "test1" , "test2" ]
