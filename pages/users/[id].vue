<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { onMounted, computed } from 'vue';

const route = useRoute();
const userStore = useUserStore();

const userId = computed(() => Number(route.params.id));
onMounted(() => {
  userStore.fetchUserDetails(userId.value);
});
</script>

<template>
  <div class="container my-5">
    <!-- Loader -->
    <div v-if="userStore.loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- User Details -->
    <div v-if="!userStore.loading && userStore.selectedUser">
      <div class="card shadow-sm">
        <div class="card-body">
          <h2 class="card-title">{{ userStore.selectedUser.name }}</h2>
          <p class="card-text"><strong>Email:</strong> {{ userStore.selectedUser.email }}</p>
          <p class="card-text"><strong>Phone:</strong> {{ userStore.selectedUser.phone }}</p>
          <p class="card-text"><strong>Website:</strong> <a :href="`http://${userStore.selectedUser.website}`" target="_blank" rel="noopener noreferrer">{{ userStore.selectedUser.website }}</a></p>
          <p class="card-text">
            <strong>Address:</strong> {{ userStore.selectedUser.address.street }}, {{ userStore.selectedUser.address.city }}
          </p>
          <NuxtLink to="/users" class="btn btn-secondary">Back to Users List</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Error message -->
    <div v-if="userStore.error" class="alert alert-danger mt-3">
      {{ userStore.error }}
    </div>
  </div>
</template>

<style scoped>
.card {
  border: none; /* Remove default border */
  border-radius: 0.5rem; /* Rounded corners for the card */
  margin-top: 20px; /* Add spacing above the card */
}

.card-title {
  font-size: 1.75rem; /* Larger title font size */
  color: #343a40; /* Darker color for better readability */
}

.card-text {
  font-size: 1.1rem; /* Slightly larger text for better readability */
}

.btn-secondary {
  margin-top: 20px; /* Add spacing above the button */
}

.alert {
  border-radius: 0.5rem; /* Rounded corners for alerts */
}
</style>