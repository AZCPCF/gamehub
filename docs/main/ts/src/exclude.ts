type AllTypes = string | number | boolean;
type StringOrNumber = Exclude<AllTypes, boolean>;

const value: StringOrNumber = 42; // Only string or number allowed
console.log(value)