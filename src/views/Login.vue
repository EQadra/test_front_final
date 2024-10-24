<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <!-- Main content area -->
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md z-10">
      <h1 class="text-3xl font-bold mb-6 text-gray-700 text-center">Iniciar sesión</h1>
      <form @submit.prevent="login" class="space-y-4">
        <!-- Email Input -->
        <input 
          v-model="email" 
          type="email" 
          placeholder="Correo electrónico" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          required 
        />
        <!-- Password Input -->
        <input 
          v-model="password" 
          type="password" 
          placeholder="Contraseña" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          required 
        />
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Iniciar sesión
        </button>
      </form>

      <!-- Divider -->
      <div class="my-6 border-t border-gray-300"></div>

      <!-- Register Button -->
      <button 
        @click="goToRegister" 
        class="w-full bg-gray-100 text-gray-700 py-2 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors">
        Crear una cuenta
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth';
import { useRouter } from 'vue-router';
import loginBackground from '@/assets/login.jpg';

// Define types for credentials
interface Credentials {
  email: string;
  password: string;
}

const email = ref<string>('');
const password = ref<string>('');
const router = useRouter();
const authStore = useAuthStore();

// Method to handle login
const login = async () => {
  const credentials: Credentials = {
    email: email.value,
    password: password.value,
  };

  try {
    // Call the store and pass the credentials
    await authStore.login(credentials);
    // Redirect to dashboard after login
    router.push('/dashboard');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    alert('Error al iniciar sesión. Verifica tus credenciales.');
  }
};

// Method to navigate to the Register page
const goToRegister = () => {
  router.push('/register');
};
</script>

<style scoped>
/* Asegúrate de que la imagen de fondo cubra todo el espacio */
.bg-cover {
  background-size: cover;
  background-position: center;
}
</style>
