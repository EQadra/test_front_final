<template>
  <div class="min-h-screen flex flex-col lg:flex-row bg-gray-100">
    <!-- Sidebar (Aside) -->
    <aside class="bg-blue-900 text-white w-full lg:w-64 py-8 px-4 lg:px-8">
      <div class="text-2xl font-bold mb-8">Dashboard</div>
      <nav class="space-y-4">
        <router-link
          to="/characters"
          class="block text-lg py-2 px-4 rounded hover:bg-blue-800"
          active-class="bg-blue-700"
        >
          Rick and Morty Characters
        </router-link>
        <router-link
          to="/chat"
          class="block text-lg py-2 px-4 rounded hover:bg-blue-800"
          active-class="bg-blue-700"
        >
          Chatbot
        </router-link>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 p-8 bg-white">
      <router-view></router-view>
    </main>
  </div>
</template>

  
  <script setup lang="ts">
  </script>
  
