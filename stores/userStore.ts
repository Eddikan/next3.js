import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [] as Array<any>,
    selectedUser: null as any,
    error: null as string | null,
    loading: false, // Add loading state
  }),
  actions: {
    async fetchUsers() {
      this.loading = true; // Set loading to true when fetching starts
      this.error = null; // Clear previous errors
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        this.error = 'Failed to fetch users';
      } finally {
        this.loading = false; // Set loading to false after fetching ends
      }
    },
    async fetchUserDetails(userId: number) {
      this.loading = true; // Set loading to true when fetching starts
      this.error = null;
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        this.selectedUser = response.data;
      } catch (error) {
        this.error = 'Failed to fetch user details';
      } finally {
        this.loading = false; // Set loading to false after fetching ends
      }
    },
  },
});