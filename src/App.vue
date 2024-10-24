<template>
  <div id="app w-full max-h-screen" >


    <!-- Main content area -->
    <main class="w-full  items-center justify-center ">
      <router-view />
       <!-- Footer -->
        <div class="w-fullitems-center justify-center "> 
          <footer class="bg-gray-800  w-full text-white text-center p-4">
            <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
          </footer>
        </div>
   
    </main>

   
  </div>
</template>

<script setup lang="ts">
// Aquí puedes agregar lógica adicional si es necesario
</script>

<style scoped>
/* Estilos adicionales si es necesario */
</style>
