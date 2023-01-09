<template>
  <main>
    <Navbar />
    <Nuxt />
  </main>
</template>

<script>
export default {
  middleware: "category-dispatch",
};
</script>
