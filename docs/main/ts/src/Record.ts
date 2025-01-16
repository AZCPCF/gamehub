type UserRoles = Record<"admin" | "editor" | "viewer", string>;

const roles: UserRoles = {
  admin: "Full access",
  editor: "Edit content",
  viewer: "test",
};

console.log(roles);
