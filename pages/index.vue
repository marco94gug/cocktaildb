<template>
  <div class="main-section">
    <Hero :topDrinks="topDrinks.drinks" />
    <section class="home">
      <Carousel title="Top Drinks" :dataList="topDrinks.drinks" />
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Hero from "../components/Hero.vue";

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
.main-section {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media only screen and (min-width: 768px) {
  .main-section {
    .home {
      padding: 100px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
