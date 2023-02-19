<template>
  <section>
    <Hero :drinkInfo="drink" />
    <!-- <div class="breadcrumbs">
      <ul>
        <li @click="$router.push('/')">Home</li>
        <span>></span>
        <li @click="categoryClick">{{ drink.strCategory }}</li>
        <span>></span>
        <li>
          {{ drink.strDrink }}
        </li>
      </ul>
    </div> -->
    <Breadcrumbs
      :links="[drink.strCategory, drink.strDrink]"
      @OnClickLink="categoryClick"
    />
    <h1>{{ drink.strDrink }}</h1>
  </section>
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
section {
  .breadcrumbs {
    padding: 20px;
    color: rgb(37, 37, 37);
    font-weight: bold;

    ul {
      display: flex;
      gap: 10px;

      li {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        &:last-child {
          cursor: default;
          color: rgba(0, 0, 0, 0.522);
        }
      }
    }
  }
}
</style>
