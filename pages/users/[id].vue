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
  <div class="container my-5" v-if="userStore.selectedUser">
    <h2>{{ userStore.selectedUser.name }}</h2>
    <p><strong>Email:</strong> {{ userStore.selectedUser.email }}</p>
    <p><strong>Phone:</strong> {{ userStore.selectedUser.phone }}</p>
    <p><strong>Website:</strong> {{ userStore.selectedUser.website }}</p>
    <p><strong>Address:</strong> {{ userStore.selectedUser.address.street }}, {{ userStore.selectedUser.address.city }}</p>
    <NuxtLink to="/users" class="btn btn-secondary">Back to Users List</NuxtLink>
  </div>
</template>