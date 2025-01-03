import { create } from 'zustand';
import { apiAddress } from '../config/apiAddresses';

interface ApiState {
  data: any[] | null;
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
}

const useApiStore = create<ApiState>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await fetch(apiAddress);
      const result = await response.json();
      set({ data: result, isLoading: false });
    } catch (err) {
      set({ error: 'Failed to fetch data', isLoading: false });
    }
  },
}));

export default useApiStore;
