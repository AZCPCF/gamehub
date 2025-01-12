import { z } from "zod";

const ENUM = ["banana", "apple", "orange"] as const; // we can use as const to create enum with const key
const fruitEnum = z.enum(ENUM /* or ['banana','apple','orange'] */); // enum

type Fruit = z.infer<typeof fruitEnum>; // 'banana' | 'apple' | 'orange'
const fruit: Fruit = "apple";
console.log(fruit); // apple
console.log(fruitEnum.enum.banana); // 'banana'
console.log(fruitEnum.options); // ['banana','apple','orange']

const bananaAndApple = fruitEnum.exclude(["orange"]); // exclude
type BananaAndApple = z.infer<typeof bananaAndApple>; // 'apple' | 'banana'
const fruitWithoutOrange: BananaAndApple = "banana";
console.log(fruitWithoutOrange); // 'banana'
console.log(fruitEnum.Enum);

const justOrange = fruitEnum.extract(["orange"]); // extract
type JustOrange = z.infer<typeof justOrange>; // 'orange'
const fruitWithoutOrangea: JustOrange = "orange";
console.log(fruitWithoutOrangea); // 'orange'
