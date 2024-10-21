import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: [] as Array<any>,
    selectedUser: null as any,
    error: null as string | null,
  }),
  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.users = response.data;
      } catch (error) {
        this.error = 'Failed to fetch users';
      }
    },
    async fetchUserDetails(userId: number) {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        this.selectedUser = response.data;
      } catch (error) {
        this.error = 'Failed to fetch user details';
      }
    },
  },
});