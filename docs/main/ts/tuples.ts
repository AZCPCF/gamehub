// Tuples

let person: [string, number] = ["Alisan", 17];
console.log(person[0]); // string -> "Alisan"
console.log(person[1]); // number -> 17

// ?

let personInfo1: [string, number?, boolean?] = ["Alisan", undefined,false];
let personInfo2: [string, number?, boolean?] = ["Alisan", 17];

// ...

let mixedTuple: [string, ...number[]] = ["Alisan", 17,15,17];

// destructure

let user: [string, number] = ["Alisan", 19];
let [name, age] = user;
console.log(name); // "Alisan"
console.log(age);  // 19
