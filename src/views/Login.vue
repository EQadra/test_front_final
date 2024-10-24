<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <h1 class="text-2xl font-bold mb-4">Iniciar sesión</h1>
      <form @submit.prevent="login" class="flex flex-col">
        <input v-model="email" type="email" placeholder="Correo electrónico" class="input" required />
        <input v-model="password" type="password" placeholder="Contraseña" class="input" required />
        <button type="submit" class="btn">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  import { useRouter } from 'vue-router';
  
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
  </script>
  
  <style scoped>
  .input {
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }
  .btn {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  