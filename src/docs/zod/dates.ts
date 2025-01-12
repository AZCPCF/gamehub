import { z } from "zod";

const date = z.date({
	required_error: "Please select a date and time",
	invalid_type_error: "That's not a date!",
});
console.log(date.safeParse(new Date())); // 2025-01-10T16:17:59.454Z (now)
console.log(date.safeParse("2025-01-01")); // error

const minDate = z.date().min(new Date("2020-12-12"), { message: "too old" }); // newer or equal
console.log(minDate.parse(new Date("2020-12-11"))); // error
console.log(minDate.parse(new Date("2020-12-12"))); // 2020-12-12
console.log(minDate.parse(new Date("2025-01-01"))); // 2025-01-01T00:00:00.000Z

const maxDate = z.date().max(new Date("2025-01-01"), { message: "too young" }); // older or equal
console.log(maxDate.parse(new Date("2025-01-02"))); // error
console.log(maxDate.parse(new Date("2025-01-01"))); // 2025-01-01T00:00:00.000Z
console.log(maxDate.parse(new Date("2020-12-12"))); // 2020-12-12

const strDatetime = z.string().datetime();
strDatetime.parse("2020-01-01T00:00:00Z"); // pass
strDatetime.parse("2020-01-01T00:00:00.123Z"); // pass
strDatetime.parse("2020-01-01T00:00:00.123456Z"); // pass (arbitrary precision)
strDatetime.parse("2020-01-01T00:00:00+02:00"); // fail (no offsets allowed)

const strDate = z.string().date();
strDate.parse("2021-12-01"); // pass
strDate.parse("2025-1-12"); // fail
strDate.parse("2023-12-32"); // fail
