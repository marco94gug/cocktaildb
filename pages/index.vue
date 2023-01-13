<template>
  <div>
    <Hero :topDrinks="topDrinks.drinks" />
    <button @click="checkDrinks">Check Top Drinks</button>
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
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Hero from "~/components/Hero.vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {};
  },
  middleware: "home-dispatch",
  computed: {
    ...mapGetters("search", ["drinksList"]),
    ...mapGetters("drinks", ["topDrinks"]),
  },
  components: { Hero },

  methods: {
    handleDrinkClick(e: Event): void {
      const idDrink = (e.target as HTMLLIElement).id;

      this.$router.push(`/drink/${idDrink}`);
    },

    checkDrinks(): void {
      console.log(this.topDrinks.drinks);
    },
  },
});
</script>

<style lang="scss" scoped></style>
