<script>
export default {
name: "MovieListComponent",
props: {
    movies: Array,
},
};
</script>

<template>
    <div>
      <div v-for="movie in movies" :key="movie.id" class="movie-item p-3">
        <h2>{{ movie.title }}</h2>
        <p>Titolo Originale: {{ movie.original_title }}</p>
        <p>Lingua: {{ movie.original_language }}</p>
        <p>Voto: {{ movie.vote_average }}</p>
        <hr>
      </div>
    </div>
  </template>
  
<style lang="scss" scoped>
</style>
  