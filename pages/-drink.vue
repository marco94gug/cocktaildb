<template>
  <main>
    <h1>{{ drink.strDrink }}</h1>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  data() {
    return {};
  },

  middleware: "drink-dispatch",

  computed: {
    ...mapGetters("drinks", ["drink"]),
  },
});
</script>

<style lang="scss" scoped>
main {
  margin: 100px 0;
}
</style>
