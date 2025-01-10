import { z } from "zod";

const datetime = z.string().datetime();

datetime.parse("2020-01-01T00:00:00Z"); // pass
datetime.parse("2020-01-01T00:00:00.123Z"); // pass
datetime.parse("2020-01-01T00:00:00.123456Z"); // pass (arbitrary precision)
datetime.parse("2020-01-01T00:00:00+02:00"); // fail (no offsets allowed)


const date = z.string().date();

date.parse("2021-12-01"); // pass
date.parse("2025-1-12"); // fail
date.parse("2023-12-32"); // fail