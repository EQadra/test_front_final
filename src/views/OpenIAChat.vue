<template>
    <div class="chat">
      <textarea v-model="message"></textarea>
      <button @click="sendMessage">Enviar</button>
      <div v-if="response">
        <p>{{ response }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  
  // Define types for response
  interface ChatResponse {
    message: string; // Assuming the API returns a message string
  }
  
  const message = ref<string>('');
  const response = ref<string | null>(null); // Use string or null for initial state
  
  const sendMessage = async () => {
    try {
      const res = await axios.post<ChatResponse>('/api/chat', { message: message.value });
      response.value = res.data.message; // Assuming the response structure
    } catch (error) {
      console.error('Error sending message:', error);
      response.value = 'Error al enviar el mensaje.'; // Optionally handle errors
    }
  };
  </script>
  
  