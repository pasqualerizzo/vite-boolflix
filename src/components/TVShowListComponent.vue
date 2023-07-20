<script>
    export default {
    name: "TVShowListComponent",
    props: {
    tvShows: Array,
    },
    methods: {
        getFlag(lang) {
            if (lang === "en") {
            return "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png";
            } else if (lang === "it") {
            return "URL_DELLA_BANDIERA_ITALIA";
            } else if (lang === "fr") {
            return "URL_DELLA_BANDIERA_FRANCIA";
            }
            return "URL_IMMAGINE_DEFAULT_O_VUOTO";
        },
        getCoverImageUrl(posterPath) {
        const baseImageUrl = "https://image.tmdb.org/t/p/";
        const imageSize = "w342";
        return baseImageUrl + imageSize + posterPath;
        },
    },
    };
</script>

<template>
    <div class="container">
      <div class="row">
        <div v-for="show in tvShows" :key="show.id" class="col-md-3 mb-3">
          <div class="card h-100 d-flex flex-column p-3 text-white">
                <img :src="getCoverImageUrl(show.poster_path)" alt="Cover" class="card-img-top" />
                <div class="card-body flex-grow-1">
                    <h2>{{ show.name }}</h2>
                    <p>Titolo Originale: {{ show.original_name }}</p>
                    <img :src="getFlag(show.original_language)" alt="Flag" width="30" height="20" />
                    <p>Voto: {{ show.vote_average }}</p>
                </div>
                <hr />
          </div>
        </div>
      </div>
    </div>
</template>
  
 
<style lang="scss" scoped>
    .main {
    background-color: black;
    }
    .star-icon {
    font-size: 20px;
    color: #ffd700;
    }
    .card {
    display: flex;
    background-color: #333;
    }
</style>
