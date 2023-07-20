<script>
import MovieListComponent from "./MovieListComponent.vue";
import TVShowListComponent from "./TVShowListComponent.vue";

export default {
  name: "MainComponent",
  components: {
    MovieListComponent,
    TVShowListComponent,
  },
  props: {
    movies: Array,
    tvShows: Array,
  },
};
</script>

<template>
    <main>
        <h1>Risultati dei film:</h1>
        <MovieListComponent :movies="movies" />
    
        <h1>Risultati delle serie TV:</h1>
        <TVShowListComponent :tvShows="tvShows" />
    </main>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

main {
    background-color: white;
    h1 {
        text-align: center;
        color: red;
        margin: 40px 20px 20px 40px;
        padding: 10px;
        border: 2px solid red;
        border-radius: 10px;
        background-color: black;
    }
}


</style>