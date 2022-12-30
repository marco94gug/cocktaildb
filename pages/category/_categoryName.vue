<template>
  <section>
    <h2>Category Page</h2>
    <p>{{ categoryName }}</p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "categoryPage",

  computed: {
    categoryName(): string {
      return this.$route.params.categoryName;
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  margin-top: 54px;
}
</style>
