<template>
  <div>
    <Hero />
    <ul>
      <li v-for="drink in drinksList.drinks">{{ drink.strDrink }}</li>
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
  },
  components: { Hero },
});
</script>

<style lang="scss" scoped></style>
