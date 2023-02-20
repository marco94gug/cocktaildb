<template>
  <section>
    <Breadcrumbs :links="[title]" />
    <div class="category_main_content">
      <h2>{{ title }}</h2>
      <div class="grid-drink">
        <DrinkCard
          v-for="drink in filteredByCategory.drinks"
          :drinkInfo="drink"
          @clicked="clickCard"
        >
          <template v-slot:see-more>
            <p>see more</p>
          </template>
        </DrinkCard>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import Breadcrumbs from "~/components/Breadcrumbs.vue";
import DrinkCard from "~/components/DrinkCard.vue";
import { FilteredDrinkByCategory } from "~/ts-types/category";

declare module "vue/types/vue" {
  interface Vue {
    filteredByCategory: FilteredDrinkByCategory;
    title: string;
  }
}

export default Vue.extend({
  name: "categoryPage",
  data() {
    return {
      title: "",
    };
  },
  middleware: "categoryPage-dispatch",
  computed: {
    ...mapGetters("category", ["filteredByCategory"]),
  },
  methods: {
    clickCard(id: string) {
      this.$router.push(`/drink/${id}/`);
    },
  },
  components: { Breadcrumbs, DrinkCard },
  mounted() {
    // Formatting the title from url path
    this.title = this.$route.params?.categoryName
      .replace("-", "/")
      .replaceAll("_", " ");
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/utils";

section {
  margin-top: 54px;

  .category_main_content {
    padding: 0 20px 20px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    h2 {
      color: $mainFont;
      text-transform: capitalize;
      font-size: 1.4rem;
    }

    .grid-drink {
      display: grid;
      width: max-content;
      align-content: center;
      gap: 20px;

      div {
        @include start-from("phone") {
          display: flex;
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
}

@include start-from("phone") {
  section {
    .category_main_content {
      .grid-drink {
        width: 100%;
      }
    }
  }
}

@include start-from("tablet") {
  section {
    .category_main_content {
      margin-top: 10px;
      gap: 30px;

      h2 {
        font-size: 1.5rem;
      }
      .grid-drink {
        grid-template-columns: repeat(2, 300px);
      }
    }
  }
}

@include start-from("desktop") {
  section {
    .category_main_content {
      margin-top: 15px;
      gap: 35px;

      h2 {
        font-size: 1.6rem;
      }

      .grid-drink {
        grid-template-columns: repeat(3, 300px);
      }
    }
  }
}

@include start-from("desktop-large") {
  section {
    .category_main_content {
      margin-top: 0;
      gap: 56px;

      h2 {
        font-size: 1.7rem;
      }

      .grid-drink {
        grid-template-columns: repeat(4, 300px);
      }
    }
  }
}

@include start-from("desktop-extralarge") {
  section {
    .category_main_content {
      margin-top: 0px;
      gap: 56px;

      h2 {
        font-size: 1.7rem;
      }

      .grid-drink {
        grid-template-columns: repeat(5, 300px);
      }
    }
  }
}
</style>
