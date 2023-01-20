<template>
  <div>
    <Hero :topDrinks="topDrinks.drinks" />
    <section class="home">
      <Carousel />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Hero from "~/components/Hero.vue";

export default Vue.extend({
  name: "IndexPage",
  data() {
    return {};
  },
  middleware: "home-dispatch",
  computed: {
    ...mapGetters("drinks", ["topDrinks"]),
  },
  components: { Hero },
});
</script>

<style lang="scss" scoped>
@media only screen and (min-width: 768px) {
  .home {
    padding: 100px;
  }
}
</style>
