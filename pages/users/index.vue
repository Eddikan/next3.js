<script lang="ts" setup>
import { useUserStore } from '~/stores/userStore';
import { onMounted } from 'vue';

const userStore = useUserStore();
onMounted(() => {
  userStore.fetchUsers();
});
</script>

<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Users List</h2>
    
    <!-- Back Arrow Link -->
    <NuxtLink to="/" class="btn btn-secondary mb-4">
      <i class="bi bi-arrow-left"></i> Back
    </NuxtLink>

    <div v-if="userStore.error" class="alert alert-danger text-center">
      {{ userStore.error }}
    </div>

    <!-- Loader -->
    <div v-if="userStore.loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>

    <!-- Users List -->
    <div v-if="!userStore.loading" class="row">
      <div v-for="user in userStore.users" :key="user.id" class="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div class="card h-100 shadow-sm border-light">
          <div class="card-body">
            <h5 class="card-title text-primary">{{ user.name }}</h5>
            <p class="card-text"><strong>Email:</strong> {{ user.email }}</p>
            <p class="card-text"><strong>Address:</strong> {{ user.address.street }}, {{ user.address.city }}</p>
            <NuxtLink :to="`/users/${user.id}`" class="btn btn-primary">View Details</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px; /* Limit the maximum width of the container */
}

.card {
  transition: transform 0.2s; /* Smooth hover effect */
}

.card:hover {
  transform: scale(1.05); /* Slightly scale card on hover */
}

.text-primary {
  color: #007bff !important; /* Bootstrap primary color */
}

.btn {
  font-weight: 600; /* Make button text bolder */
}

.alert {
  border-radius: 0.5rem; /* Rounded corners for alerts */
}
</style>