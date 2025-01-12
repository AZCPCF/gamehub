import { z } from "zod";

const User = z.object({
  name: z.string(),
  age: z.number(),
  lastName: z.string().optional(),
});
const User2 = z.object({
  username: z.string(),
  fullName: z.string(),
});
const DeepUser = User.merge(
  z.object({ namee: z.object({ test: z.string() }) })
);
type User = z.infer<typeof User>; // { name:string ; age:number }

const user: User = { age: 12, name: "test" };
const user1: User = { age: "12", name: "test" };
console.log(user1); // error
console.log(user); // { age: 12, name: "test" }

// shape

const shapedUser = User.shape.age;
console.log(shapedUser.parse("test")); // error
console.log(shapedUser.parse(12)); // 12

// keyof

const key = User.keyof(); // create ZodEnum
console.log(key); // ZodEnum<["name", "age"]>

// extend

const extendUser = User.extend({ username: z.string() }); // add field
console.log(extendUser.parse({ name: "test", username: "tes2", age: 12 })); // { name: "test", username: "tes2", age: 12 }

// merge

const mergedUser = User.merge(User2); // merge two ZodObject
console.log(
  mergedUser.parse({
    name: "test",
    username: "tes2",
    age: 12,
    fullName: "testtt",
  })
); // { name: "test", username: "tes2", age: 12 , fullName:'testtt' }

// pick

const pickedUser = User.pick({ name: true }); // pick any keys from ZodObject
console.log(pickedUser.parse({ age: 12, name: "test" })); // { name: "test" }
console.log(pickedUser.parse({ name: "helloW" })); // { name: "helloW" }

// omit

const omitedUser = User.omit({ name: true }); // omit any keys from ZodObject
console.log(omitedUser.parse({ name: "helloW", age: 16 })); // { age : 16 }
console.log(omitedUser.parse({ age: 12 })); // { age : 12 }

// partial

const partialedUser = User.partial(); // make all keys optional
// const partialedUsername = User.partial({name:true}); // name will be optional
console.log(partialedUser.parse({ name: 12 })); // error
console.log(partialedUser.parse({ name: "test" })); // { name: "test" }
console.log(partialedUser.parse({})); // {}

// deepPartial

const deepPartialedUser = DeepUser.deepPartial(); // make all keys optional in all depth
console.log(deepPartialedUser.parse({})); // {}

// required

const requiredUser = User.required({ lastName: true });
console.log(requiredUser.parse({ name: "test", lastName: "test2" })); // error
console.log(requiredUser.parse({ name: "test", lastName: "test2", age: 12 })); // { name: "test", lastName: "test2", age: 12 }

// passthrough

const passthroughUser = User.passthrough(); // pass any more unknown keys to us first ZodSchema
console.log(
  passthroughUser.parse({
    name: "alisan",
    age: 17,
    key: Math.floor(Math.random() * 101),
  })
); // { name: "alisan" , age: 17, key : Math.floor(Math.random() * 101 ) }

// strict

const strictedUser = User.strict("no key anymore"); // disallow pass any more unknown keys to us first ZodSchema ( return error)
console.log(
  strictedUser.parse({
    name: "alisan",
    age: 17,
    key: Math.floor(Math.random() * 101),
  })
); // error

// strip

const stripedUser = User.strip(); // remove any more unknown keys ( ZodObject default is strip )
console.log(stripedUser.parse({ name: "alisan", age: 17, age2: 18 })); // { name: "alisan", age: 17 }

// catchall

const catchallUser = User.catchall(z.number()); // set type to unknown keys
console.log(catchallUser.parse({ age: 17, name: "alisan", test: false })); // error
console.log(catchallUser.parse({ age: 17, name: "alisan", test: 12 })); // { age: 17, name: "alisan", test: 12 }
