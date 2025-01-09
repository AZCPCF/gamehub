///// Generics

function identity<Type>(arg: Type): Type {
  return arg;
}

// 2

function identity1<Type>(arg: Type): Type {
  return arg;
}
let myIdentity1: GenericIdentityFn<string> = identity;

// 3

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity2<Type>(arg: Type): Type {
  return arg;
}
let myIdentity2: GenericIdentityFn<number> = identity;
