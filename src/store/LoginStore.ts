import { create } from "zustand";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
});

interface LoginState {
  email: string;
  password: string;
  emailError: string | null;
  passwordError: string | null;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setEmailError: (error: string | null) => void;
  setPasswordError: (error: string | null) => void;
  validateForm: () => boolean;
}

export const useLoginStore = create<LoginState>((set, get) => ({
  email: "",
  password: "",
  emailError: null,
  passwordError: null,
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setEmailError: (error) => set({ emailError: error }),
  setPasswordError: (error) => set({ passwordError: error }),

  validateForm: () => {
    const validationResult = loginSchema.safeParse({
      email: get().email,
      password: get().password,
    });

    if (!validationResult.success) {
      // Define types for accumulator
      const errors = validationResult.error.errors.reduce<{
        emailError: string | null;
        passwordError: string | null;
      }>(
        (acc, curr) => {
          if (curr.path[0] === "email") {
            acc.emailError = curr.message;
          }
          if (curr.path[0] === "password") {
            acc.passwordError = curr.message;
          }
          return acc;
        },
        { emailError: null, passwordError: null }
      );

      set({ ...errors });
      return false;
    }

    set({ emailError: null, passwordError: null });
    return true;
  },
}));
