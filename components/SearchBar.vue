<template>
  <div class="main-search">
    <div class="search-bar">
      <input
        type="text"
        placeholder="Search"
        v-model="inputValue"
        @input="() => handleOnSearchInput(inputValue)"
        @click="closeAllMenu"
      />
      <div class="delete" v-if="inputValue">
        <font-awesome-icon icon="fa fa-circle-xmark" @click="clearSearchBar" />
      </div>
    </div>

    <div :class="`${drinksList.drinks ? 'results active' : 'results'}`">
      <ul>
        <li
          v-for="drink in drinksList.drinks"
          :id="drink.idDrink"
          @click="(e) => handleDrinkClick(e)"
        >
          {{ drink.strDrink }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "SearchBar",

  setup() {
    return {
      inputValue: "",
    };
  },

  computed: {
    ...mapGetters("search", ["drinksList"]),
  },

  methods: {
    handleOnSearchInput(input: string): void {
      if (input.length > 1) {
        this.$store.dispatch("search/loadSearchResults", input);
      } else {
        this.$store.commit("search/CLEAR_SEARCH_RESULTS");
      }
    },
    closeAllMenu(): void {
      this.$store.commit("navbar/SET_HAMMENU_CLOSE");
      this.$store.commit("navbar/SET_CATEGORYLIST_CLOSE");
    },

    handleDrinkClick(e: Event): void {
      const idDrink = (e.target as HTMLLIElement).id;
      this.clearSearchBar();

      this.$router.push(`/drink/${idDrink}`);
    },

    clearSearchBar(): void {
      this.inputValue = "";
      this.$store.commit("search/CLEAR_SEARCH_RESULTS");
    },
  },
});
</script>

<style lang="scss" scoped>
.main-search {
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  padding: 10px 20px;
  background-color: rgb(93, 93, 93);

  .search-bar {
    font-family: "Source Sans Pro", sans-serif;
    position: relative;
    box-sizing: border-box;
    height: 100%;
    width: 100%;

    input {
      height: 34px;
      padding: 0 10px;
      position: relative;
      box-sizing: border-box;
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
  }

  .delete {
    position: absolute;
    background-color: none;
    top: 0;
    margin-right: 8px;
    height: 100%;
    display: flex;
    align-items: center;
    right: 0;
    color: black;
    cursor: pointer;
  }

  .results {
    position: absolute;
    top: 58px;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(255, 255, 255, 0.436);
    backdrop-filter: blur(5px);
    display: none;
    color: rgb(26, 26, 26);
    letter-spacing: 1px;
    font-weight: bold;

    &.active {
      display: block;
      height: max-content;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px 20px;
    }
  }
}
@media only screen and (min-width: 768px) {
  .main-search {
    background: none;
    position: relative;
    padding: 0;
    top: auto;
    flex: 0 0 auto;
    width: 30%;

    .results {
      top: 34px;

      ul {
        padding: 10px;
      }
    }
  }
}
</style>
