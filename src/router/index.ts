
import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router'; // Type-only import
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import CharacterList from '../views/CharacterList.vue';
import CharacterDetail from '../views/CharacterDetail.vue';
import CharacterChapters from '../views/CharacterChapters.vue';
import OpenAIChat from '../views/OpenAIChat.vue';
import Dashboard from '../views/Dashboard.vue';

// Define routes
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Login },
  { path: '/register', component: Register },
  { path: '/dashboard', component: Dashboard },
  { path: '/characters', component: CharacterList },
  { path: '/characters/:id', component: CharacterDetail },
  { path: '/characters/:id/chapters', component: CharacterChapters },
  { path: '/openai', component: OpenAIChat },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
