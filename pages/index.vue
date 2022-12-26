<template>
  <div>
    <ul>
      <li v-for="drink in drinksList.drinks">{{ drink.strDrink }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",

  middleware: "category-dispatch",

  methods: {},

  computed: {
    ...mapGetters("search", ["drinksList"]),
  },
};
</script>

<style lang="scss" scoped></style>
