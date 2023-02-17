<template>
  <main>
    <h1>{{ drink.strDrink }}</h1>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  middleware: "drink-dispatch",

  computed: {
    ...mapGetters("drinks", ["drink"]),
  },
});
</script>

<style lang="scss" scoped>
main {
  padding: 100px 30px;
}
</style>
