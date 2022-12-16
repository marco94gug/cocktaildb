<template>
  <div>
    <button @click="handleClick">cliccami</button>
    <ul>
      <li v-for="category in categoryList.drinks">
        {{ category.strCategory }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",

  middleware: "category-dispatch",

  computed: {
    ...mapGetters("category", ["categoryList"]),
  },

  methods: {
    handleClick() {
      console.log(this.categoryList);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: calc(80px + 54px);
}
</style>
