type AllTypes = string | number | boolean;
type OnlyBoolean = Extract<AllTypes, string>;

const flag: OnlyBoolean = "test"; // Only string allowed
console.log(flag)