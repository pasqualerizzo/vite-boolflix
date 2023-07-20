<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    cercaFilm() {
      this.$emit("search", this.searchText);
    },
  },
};
</script>

<template>
  <header>
    <input v-model="searchText" type="text" placeholder="Cerca..." class="m-4">
    <button @click="cercaFilm">
      Cerca
    </button>
  </header>
</template>

<style lang="scss" scoped>
</style>
