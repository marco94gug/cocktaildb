<template>
  <section>
    <div class="breadcrumbs">
      <ul>
        <li @click="$router.push('/')">Home</li>
        <span>></span>
        <li @click="">{{ categoryName }}</li>
      </ul>
    </div>
    <div class="category_main_content">
      <h2>{{ categoryName }}</h2>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { FilteredDrinkByCategory } from "~/ts-types/category";

declare module "vue/types/vue" {
  interface Vue {
    filteredByCategory: FilteredDrinkByCategory;
  }
}

export default Vue.extend({
  name: "categoryPage",

  middleware: "categoryPage-dispatch",

  computed: {
    ...mapGetters("category", ["filteredByCategory"]),
    categoryName(): string {
      return this.$route.params.categoryName
        .replace("&", "/")
        .replaceAll("_", " ");
    },
  },

  methods: {
    categoryLog() {
      console.log(this.filteredByCategory);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/utils";

section {
  margin-top: 54px;

  .breadcrumbs {
    padding: 20px;
    color: rgb(37, 37, 37);
    font-weight: bold;

    ul {
      display: flex;
      gap: 10px;
      text-transform: capitalize;

      li {
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }

        &:last-child {
          cursor: default;
          color: rgba(0, 0, 0, 0.522);

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }

  .category_main_content {
    padding: 20px;
    display: flex;
    justify-content: center;
    h2 {
      color: $mainFont;
      text-transform: capitalize;
      font-size: 1.4rem;
    }
  }
}
</style>
