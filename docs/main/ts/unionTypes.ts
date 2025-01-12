// unionTypes
type codeType = string | number;
function printStatusCode(code: codeType) {
  console.log(`My status code is ${code}.`);
}
printStatusCode(401);
printStatusCode("404");
