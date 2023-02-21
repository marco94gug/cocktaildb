<template>
  <section>
    <Breadcrumbs :links="[$route.query.text ? 'search' : mainTitle]" />
    <div class="category_main_content">
      <h2>{{ mainTitle }}</h2>
      <div
        class="grid-drink"
        v-if="
          filteredByCategory.drinks?.length > 0 ||
          drinksResults.drinks?.length > 0
        "
      >
        <DrinkCard
          v-for="drink in filteredByCategory.drinks ?? drinksResults.drinks"
          :drinkInfo="drink"
          @clicked="clickCard"
        >
          <template v-slot:see-more>
            <p>see more</p>
          </template>
        </DrinkCard>
      </div>
      <div class="no-results" v-else>
        <h3>Something went wrong :(</h3>
        <img src="../../assets/img/404.png" />
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
import { drinksListType } from "~/ts-types/drinks";

declare module "vue/types/vue" {
  interface Vue {
    filteredByCategory: FilteredDrinkByCategory;
    title: string;
    drinksResults: drinksListType;
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
    ...mapGetters("category", ["filteredByCategory", "drinksResults"]),

    mainTitle() {
      console.log(this.drinksResults.drinks);
      if (this.$route.query.category) {
        return (this.$route.query.category as string)
          ?.replace("-", "/")
          .replaceAll("_", " ");
      } else {
        console.log(this.drinksResults.drinks);
        return `You searched for ${this.$route.query.text as string}`;
      }
    },

    gettedResults() {
      return (
        this.filteredByCategory.drinks !== null ||
        this.drinksResults.drinks !== null
      );
    },
  },
  methods: {
    clickCard(id: string) {
      this.$router.push(`/drink/${id}/`);
    },
  },
  components: { Breadcrumbs, DrinkCard },
  mounted() {
    // Formatting the title from url path for API call on refresh
    if (this.$route.query.category) {
      this.title = (this.$route.query.category as string)
        ?.replace("-", "/")
        .replaceAll("_", " ");
    } else {
      this.title = `You searched for ${this.$route.query.text as string}`;
      console.log(this.drinksResults.drinks);
    }
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

    .no-results {
      position: absolute;
      top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
      height: 100vh;
      pointer-events: none;
      opacity: 0.8;

      img {
        width: 50%;
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
