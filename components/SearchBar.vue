<template>
  <div>
    <input
      class="search-bar"
      type="text"
      placeholder="Search"
      @input="(e) => handleOnSearchInput(e)"
      @click="closeAllMenu"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SearchBar",

  methods: {
    handleOnSearchInput(e: Event): void {
      const searchParam = (e.target as HTMLInputElement).value;
      if (searchParam) {
        this.$store.dispatch("search/loadSearchResults", searchParam);
      } else {
        this.$store.commit("search/CLEAR_SEARCH_RESULTS");
      }
    },
    closeAllMenu(): void {
      this.$store.commit("navbar/SET_HAMMENU_CLOSE");
      this.$store.commit("navbar/SET_CATEGORYLIST_CLOSE");
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: rgb(93, 93, 93);

  .search-bar {
    font-family: "Source Sans Pro", sans-serif;
    padding: 0 10px;
    box-sizing: border-box;
    height: 34px;
    width: 100%;
    border-radius: none;
    color: rgba(0, 0, 0, 0.571);
    font-weight: 300;
    font-size: 1.02rem;

    &:focus {
      outline: none;
    }

    &::placeholder {
      letter-spacing: 0.5px;
      opacity: 0.7;
    }
  }

  @media only screen and (min-width: 768px) {
    div {
      background: none;
      position: relative;
      padding: 0;
      top: auto;
      flex: 0 0 auto;
      width: 30%;
    }
  }
}
</style>
