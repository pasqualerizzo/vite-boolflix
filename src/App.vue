<script>
import { reactive } from 'vue';
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data() {
    return {
      mediaResults: {
        movies: [],
        tvShows: [],
      },
    };
  },
  methods: {
    searchMoviesAndTVShows(searchText) {
      this.searchMovies(searchText);
      this.searchTVShows(searchText);
    },
    searchMovies(searchText) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "3ef11a6c079bce41a831b45c9d7dedcb",
            query: searchText,
          },
        })
        .then((response) => {
          this.mediaResults.movies = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    searchTVShows(searchText) {
      axios
        .get("https://api.themoviedb.org/3/search/tv", {
          params: {
            api_key: "3ef11a6c079bce41a831b45c9d7dedcb",
            query: searchText,
          },
        })
        .then((response) => {
          this.mediaResults.tvShows = response.data.results;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
    <div>
      <HeaderComponent @search="searchMoviesAndTVShows" />
  
      <MainComponent :movies="mediaResults.movies" :tvShows="mediaResults.tvShows" />
  
      <FooterComponent />
    </div>
</template>

<style lang="scss">
/* Stili dello scss */
@use "assets/scss/main";
</style>
