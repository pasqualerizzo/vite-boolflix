<script>
export default {
  name: "MovieListComponent",
  props: {
    movies: Array,
  },
  methods: {
    getFlag(lang) {
      if (lang === "en") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/2560px-Flag_of_the_United_States_%281912-1959%29.svg.png";
      } else if (lang === "it") {
        return "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png";
      } else if (lang === "fr") {
        return "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png";
      } else if (lang === "es") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1200px-Bandera_de_Espa%C3%B1a.svg.png";
      } else if (lang === "pt") {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/255px-Flag_of_Portugal.svg.png";
      }
      return "URL_IMMAGINE_VUOTO";
    },
    getCoverImageUrl(posterPath) {
      const baseImageUrl = "https://image.tmdb.org/t/p/";
      const imageSize = "w342";
      return baseImageUrl + imageSize + posterPath;
    },
    getRoundedRating(rating) {
      return Math.round(rating / 2);
    },
  },
};
</script>

<template>
    <div class="container">
      <div class="row">
        <div v-for="movie in movies" :key="movie.id" class="col-md-3 mb-3">
          <div class="card h-100 d-flex flex-column p-3 text-white">
            <img :src="getCoverImageUrl(movie.poster_path)" alt="Cover" class="card-img-top" />
            <div class="card-body flex-grow-1">
              <h2>{{ movie.title }}</h2>
              <p>Titolo Originale: {{ movie.original_title }}</p>
              <img :src="getFlag(movie.original_language)" alt="Flag" width="30" height="20" />
              <div class="stars mt-2">
                <i
                  v-for="star in 5"
                  :key="star"
                  class="star-icon"
                  :class="{
                    'fa-solid fa-star': star <= getRoundedRating(movie.vote_average),
                    'fa-regular fa-star': star > getRoundedRating(movie.vote_average),
                  }"
                ></i>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
</template>
  
<style lang="scss" scoped>

main {
    background-color: #333;
}
.star-icon {
  font-size: 20px;
  color: #ffd700;
}
.card {
    display: flex;
    background-color: black;
}
</style>
  