import { User } from "../interfaces/user";
export function createUser<T extends Omit<User, "id">>(user: T): User {
  return { ...user, id: Date.now().toString() };
}

export function updateUser<T extends Partial<User>>(
  user: User,
  updates: T
): User {
  return { ...user, ...updates };
}
