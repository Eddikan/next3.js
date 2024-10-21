<template>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <NuxtLink to="/" class="navbar-brand">My App</NuxtLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/users" class="nav-link">Users</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <!-- Welcome Section -->
    <div class="container text-center my-5">
      <h1>Welcome to the Nuxt.js User Application</h1>
      <p>This application showcases users fetched from an API and demonstrates the use of Nuxt.js features with TypeScript.</p>
    </div>
  </template>
  
  <script setup>
  // No specific script required
  </script>
  
  <style scoped>
  /* Optional custom styles */
  .navbar {
    margin-bottom: 20px;
  }
  </style>