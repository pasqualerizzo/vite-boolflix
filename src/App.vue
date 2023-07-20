<script>
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
      movies: [],
    };
  },
  methods: {
    searchMovies(searchText) {
      axios
        .get("https://api.themoviedb.org/3/search/movie", {
          params: {
            api_key: "3ef11a6c079bce41a831b45c9d7dedcb",
            query: searchText,
          },
        })
        .then((response) => {
          this.movies = response.data.results;
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
      <HeaderComponent @search="searchMovies" />
  
      <MainComponent :movies="movies" />
  
      <FooterComponent />
    </div>
</template>

<style lang="scss">
/* Stili dello scss */
@use "assets/scss/main";
</style>
