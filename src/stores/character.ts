import { defineStore } from 'pinia';
import axios from 'axios';

// Define types for Character and Chapter
interface Character {
  id: number;
  name: string;
  species: string;
  gender: string;
  image: string;
  episode: string[]; // URLs of the episodes
  // Add other character fields as necessary
}

interface Chapter {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  // Add other chapter fields as necessary
}

export const useCharacterStore = defineStore('character', {
  state: () => ({
    characters: [] as Character[], // List of characters
    character: null as Character | null, // Detail of a character
    chapters: [] as Chapter[], // Chapters where the character appears
    loading: false, // Loading state
    error: null as string | null, // Error handling
  }),

  actions: {
    // Fetch the list of characters
    async fetchCharacters() {
      this.loading = true;
      this.error = null; // Clear previous errors
      try {
        const response = await axios.get<{ results: Character[] }>('https://rickandmortyapi.com/api/character');
        this.characters = response.data.results;
      } catch (error) {
        this.error = 'Error loading characters';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    // Fetch character details by ID
    async fetchCharacterById(id: number) {
      this.loading = true;
      this.error = null; // Clear previous errors
      try {
        const response = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
        this.character = response.data;
      } catch (error) {
        this.error = 'Error loading character details';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    // Fetch chapters in which a character appears
    async fetchCharacterChapters(id: number) {
      this.loading = true;
      this.error = null; // Clear previous errors
      this.chapters = []; // Clear previous chapters
      try {
        const response = await axios.get<Character>(`https://rickandmortyapi.com/api/character/${id}`);
        const episodes = response.data.episode; // Episode URLs

        // Make multiple requests to get details of each episode
        const chapterPromises = episodes.map(url => axios.get<Chapter>(url));
        const chapters = await Promise.all(chapterPromises);
        this.chapters = chapters.map(chapter => chapter.data);
      } catch (error) {
        this.error = 'Error loading character chapters';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },

    // Clear the state (reset)
    clearState() {
      this.characters = [];
      this.character = null;
      this.chapters = [];
      this.loading = false;
      this.error = null;
    },
  },
});
