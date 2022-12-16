<template>
  <nav>
    <h1>The Cocktail DB</h1>
    <HamMen />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
});
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #333333;
  height: 80px;
  color: rgb(245, 245, 245);

  h1 {
    font-size: 1.8rem;
    text-transform: uppercase;
    font-family: "Big Shoulders Display", cursive;
  }
}
</style>
