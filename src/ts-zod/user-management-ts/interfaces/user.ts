export type Role = 'Admin' | 'User' | 'Guest';
export interface User {
    id: string;
    name: string;
    email: string;
    age: number;
    role: Role;
    password: string;
  }
  