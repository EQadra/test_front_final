import { defineStore } from 'pinia';
import axios from 'axios';

// Define types for User and Credentials
interface User {
  id: number; // Adjust the type as necessary
  name: string; // Adjust the type as necessary
  email: string; // Adjust the type as necessary
  // Add other user fields as necessary
}

interface Credentials {
  email: string; // Adjust the type as necessary
  password: string; // Adjust the type as necessary
  // Add other credential fields as necessary
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  actions: {
    async login(credentials: Credentials) {
      const response = await axios.post<{ token: string; user: User }>('http://localhots:8000/api/login', credentials);
      this.token = response.data.token;
      this.user = response.data.user;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`; // Set default header
    },
    async register(credentials: Credentials) {
      const response = await axios.post<{ token: string; user: User }>('http://localhots:8000/api/register', credentials);
      this.token = response.data.token;
      this.user = response.data.user;
      axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`; // Set default header
    },
  },
});
