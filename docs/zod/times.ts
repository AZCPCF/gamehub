import { z } from "zod";

const time = z.string().time({
	/*precision:3*/
});

time.parse("00:00:00"); // pass
time.parse("09:52:31"); // pass
time.parse("23:59:59.9999999"); // pass (arbitrary precision)

time.parse("00:00:00.123Z"); // fail (no `Z` allowed)
time.parse("00:00:00.123+02:00"); // fail (no offsets allowed)
