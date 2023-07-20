<script>
import MovieListComponent from "./MovieListComponent.vue";

export default {
  name: "MainComponent",
  components: {
    MovieListComponent,
  },
  props: {
    movies: Array,
  },
};
</script>

<template>
    <main>
        <MovieListComponent :movies="movies" />
    </main>
  </template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;


</style>