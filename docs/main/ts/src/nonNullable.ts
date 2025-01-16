type OptionalString = string | null | undefined;
type StrictString = NonNullable<OptionalString>;

const value: StrictString = "Hello"; // null and undefined not allowed
console.log(value)