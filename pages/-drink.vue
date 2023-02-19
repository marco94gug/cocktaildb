<template>
  <main>
    <Hero :drinkInfo="drink" />
    <Breadcrumbs
      :links="[drink.strCategory, drink.strDrink]"
      @OnClickLink="categoryClick"
    />
    <section class="drink_main-content"></section>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import Hero from "~/components/Hero.vue";
import { buildUrlPath } from "~/services/categories/url";

export default Vue.extend({
  middleware: "drink-dispatch",
  computed: {
    ...mapGetters("drinks", ["drink"]),
  },
  components: { Hero, Breadcrumbs },

  methods: {
    categoryClick(link: string) {
      this.$router.push(`/category/${buildUrlPath(link)}`);
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  .drink_main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    h2 {
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
}
</style>
