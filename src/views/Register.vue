<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-2xl font-bold mb-4">Registrar</h1>
      <form @submit.prevent="register" class="flex flex-col">
        <input v-model="name" type="text" placeholder="Nombre" class="input" required />
        <input v-model="email" type="email" placeholder="Correo electrónico" class="input" required />
        <input v-model="password" type="password" placeholder="Contraseña" class="input" required />
        <button type="submit" class="btn">Registrar</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
  // Define types for registration credentials
  interface RegistrationCredentials {
    name: string;
    email: string;
    password: string;
  }
  
  const name = ref<string>('');
  const email = ref<string>('');
  const password = ref<string>('');
  const router = useRouter();
  const authStore = useAuthStore();
  
  // Method to handle registration
  const register = async () => {
    const credentials: RegistrationCredentials = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
  
    try {
      // Call the store and pass the credentials
      await authStore.register(credentials);
      // Redirect to login after registration
      router.push('/login');
    } catch (error) {
      console.error('Error durante el registro:', error);
      alert('Error al registrarse. Verifica los datos.');
    }
  };
  </script>
  
