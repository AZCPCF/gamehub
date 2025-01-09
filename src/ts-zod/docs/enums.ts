// enums

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
const { Accepted, BadRequest, ...codes } = StatusCodes;
console.log(codes.Success);
console.log(Accepted);
console.log(BadRequest);
