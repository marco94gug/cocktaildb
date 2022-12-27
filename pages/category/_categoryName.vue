<template>
  <section>
    <h2>Category Page</h2>
    <p>{{ categoryName }}</p>
  </section>
</template>

<script lang="ts">
export default {
  name: "categoryPage",

  computed: {
    categoryName(): string {
      return this.$route.params.categoryName;
    },
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 54px;
}
</style>
