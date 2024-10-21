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
    <h2>Users List</h2>
    <div v-if="userStore.error" class="alert alert-danger">
      {{ userStore.error }}
    </div>
    <div class="row">
      <div v-for="user in userStore.users" :key="user.id" class="col-lg-4 col-md-6 col-sm-12">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <p class="card-text">{{ user.email }}</p>
            <p class="card-text">{{ user.address.street }}, {{ user.address.city }}</p>
            <NuxtLink :to="`/users/${user.id}`" class="btn btn-primary">View Details</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>