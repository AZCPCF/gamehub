// mappedTypes
type Fruit = "apple" | "banana" | "orange";

type NewType = {
  [F in Fruit]: {
    name: F | string;
  };
};


const fruit: NewType[] = [
    {
        apple: { name: "test" },
        banana: { name: "bana" },
        orange: { name: "ange" },
    },
];

// its like js for-of loop

for (const f of fruit) {
  console.log(f);
}

// keyof

interface Person {
  name: string;
  age: number;
}

type NullablePerson = {
  [P in keyof Person]: Person[P] | null;
};
const person: NullablePerson = { name: "test", age: null };
console.log(person);

// as

type Event =
  | {
      type: "click";
      x: "number";
      y: number;
    }
  | {
      type: "hover";
      x: "number2";
      element: HTMLElement;
    };
type EventMap = {
  [E in Event as E["x"]]?: (event: E) => void;
};

const event: EventMap = {
  number: () => {
    return 1;
  },
};
