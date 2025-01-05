import {create} from 'zustand';

interface AuthState {
  user: { id: string; name: string } | null;
  isAuthenticated: boolean;
  setUser: (user: { id: string; name: string }) => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useAuthStore;
