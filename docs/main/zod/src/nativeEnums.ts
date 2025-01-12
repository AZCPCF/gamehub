import { z } from "zod";

enum Fishes {
	Sturgeon = "caviar",
	Salmon = "test",
} // stringEnums

const FishesEnum = z.nativeEnum(Fishes); // nativeEnum

type FishesEnum = z.infer<typeof FishesEnum>; // Fishes
const fish: FishesEnum = Fishes["Salmon"];
// console.log(FishesEnum.parse("a")); // error)
console.log(fish); // test
console.log(FishesEnum.parse(Fishes.Sturgeon)); // caviar
console.log(FishesEnum.parse("caviar")); // caviar
console.log(FishesEnum.parse(Fishes.Salmon)); // test
console.log(FishesEnum.parse("test")); // test

enum Animals {
	Dog = 0,
	Cat = 1,
	Rabbit = 2,
} // numberEnums

const AnimalsEnum = z.nativeEnum(Animals); // nativeEnum
type AnimalsEnum = z.infer<typeof AnimalsEnum>; // Animals
const animal: AnimalsEnum = Animals["Cat"];
console.log(animal); // 1
// console.log(AnimalsEnum.parse(3)) // error
console.log(AnimalsEnum.parse(Animals.Dog)); // 0
console.log(AnimalsEnum.parse(Animals.Rabbit)); // 2
console.log(Animals[AnimalsEnum.parse(2)]); // Rabbit

const Fruits = {
	Apple: "apple",
	Banana: "banana",
	Cantaloupe: 3,
} as const; // obj enum with as const

const FruitEnum = z.nativeEnum(Fruits);
type FruitEnum = z.infer<typeof FruitEnum>; // 'apple' | 'banana' | 3
const fruit: FruitEnum = 3;
console.log(FruitEnum.parse("Cantaloupe")); // error
console.log(fruit); // 3
console.log(FruitEnum.parse(Fruits["Banana"])); // banana
console.log(FruitEnum.parse(Fruits["Cantaloupe"])); // 3
console.log(FruitEnum.parse("apple")); // apple
console.log(FruitEnum.parse(3)); // 3
