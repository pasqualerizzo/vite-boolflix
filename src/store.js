import { reactive } from 'vue';

// Esporto la mia costante da questo file per renderla disponibile ad altri componenti
export const store = reactive({
    searchText:"",
    movies: [],
});