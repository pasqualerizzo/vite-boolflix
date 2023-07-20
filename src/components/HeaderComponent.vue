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
        <div class="logo">
            <h1>BoolFlix</h1>
        </div>
        <div class="wrapper">
            <input v-model="searchText" type="text" placeholder="Cerca..." class="m-4">
            <button @click="cercaFilm">
            Cerca
            </button>
        </div>
  </header>
</template>

<style lang="scss" scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: #fff;
        .logo h1 {
            color: red;
        }
        .wrapper {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
}

img {
  height: 40px;
  width: auto;
}

.search-bar {
  display: flex;
  align-items: center;
}

input {
  padding: 5px 10px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  background-color: black;
  border: 2px solid white;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
</style>
