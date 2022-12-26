<template>
  <main>
    <h2>Category Page</h2>
    <p>{{ categoryName }}</p>
  </main>
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
