<template>
  <main>
    <Navbar />
    <main class="main_section">
      <Nuxt />
    </main>
  </main>
</template>

<script>
export default {
  middleware: "category-dispatch",
};
</script>

<style lang="scss" scoped>
.main_section {
  margin-top: 54px;
}

@media only screen and (min-width: 768px) {
  .main_section {
    margin-top: 80px;
  }
}
</style>
