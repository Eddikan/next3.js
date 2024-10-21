<template>
    <main>
      <nav class="navbar navbar-expand navbar-light bg-light">
        <div class="container-fluid">
          <NuxtLink class="navbar-brand" to="/">MyApp</NuxtLink>
          <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> -->
          <div class=" navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <NuxtLink class="nav-link" to="/">Home</NuxtLink>
              <NuxtLink class="nav-link" to="/users">Users</NuxtLink>
              <!-- Uncomment the following line to add an About page -->
              <!-- <NuxtLink class="nav-link" to="/about">About</NuxtLink> -->
            </div>
          </div>
        </div>
      </nav>
      
      <!-- Welcome Section -->
      <div class="container text-center my-5">
        <h1>Welcome to the Nuxt.js User Application</h1>
        <p>
          This application showcases users fetched from an API and demonstrates
          the use of Nuxt.js features with TypeScript.
        </p>
      </div>
    </main>
  </template>
  
  <script>
  // No need for custom JavaScript as no collapsing functionality is required
  </script>
  
  <style scoped>
  .navbar-nav .nav-link {
    margin-right: 15px; /* Add spacing between links */
  }
  
  .navbar-brand {
    font-weight: bold; /* Make the brand text bold */
  }
  </style>