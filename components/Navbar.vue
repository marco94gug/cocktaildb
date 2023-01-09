<template>
  <nav @mouseleave="closeAllOpenedMenus">
    <h1 @click="handleHomeClick">The Cocktail DB</h1>
    <HamMen :setActiveMenu="setActiveMenu" />
    <ul :class="`menu-list ${hamMenuIsActive ? 'active' : ''}`">
      <li @click="handleHomeClick">Home</li>
      <li @click="(e) => handleMenuLIElementClick(e)">Cocktails</li>
      <li
        :class="`category ${categoryListIsActive ? 'active' : ''}`"
        @click="handleCategoriesClick"
      >
        Categories <span>▲</span>
      </li>
      <ol :class="`category-list ${categoryListIsActive ? 'active' : ''}`">
        <li
          v-for="category in categoryList.drinks"
          @click="handleCategoryClick(category)"
        >
          {{ category.strCategory }}
        </li>
      </ol>
      <li @click="(e) => handleMenuLIElementClick(e)">About us</li>
    </ul>
    <SearchBar />
  </nav>
</template>

<script lang="ts">
import Vue, { VueConstructor } from "vue";
import { mapGetters } from "vuex";
import { DrinksType } from "~/ts-types/category";

export default (
  Vue as VueConstructor<
    Vue & { hamMenuIsActive: boolean; categoryListIsActive: boolean }
  >
).extend({
  name: "Navbar",

  data() {
    return {
      active: {} as HTMLDivElement,
    };
  },

  computed: {
    // ...mapGetters("category", ["categoryList"]),
    ...mapGetters("navbar", ["hamMenuIsActive", "categoryListIsActive"]),
    categoryList() {
      return this.$store.getters["category/categoryList"];
    },
  },

  methods: {
    setActiveMenu(): void {
      this.$store.commit("navbar/SET_HAMMENU_OPEN_CLOSE");

      if (this.categoryList) {
        this.$store.commit("navbar/SET_CATEGORYLIST_CLOSE");
      }
    },

    handleCategoriesClick(): void {
      this.$store.commit("navbar/SET_CATEGORYLIST_OPEN_CLOSE");
    },

    handleHomeClick(): void {
      this.$router.push("/");
      // this.closeAllOpenedMenus();
    },

    handleCategoryClick(category: DrinksType): void {
      // this.closeAllOpenedMenus();
      const router = this.$router;
      router.push(
        `/category/${category.strCategory
          .toLocaleLowerCase()
          .replaceAll(" ", "-")
          .replaceAll("/", "")
          .replaceAll(/--/g, "-")}`
      );
    },

    handleMenuLIElementClick(e: MouseEvent): void {
      const menuListElement = e.target as HTMLLIElement;

      this.$router.push(
        `/${menuListElement.textContent?.toLowerCase().replaceAll(" ", "-")}`
      );
      // this.closeAllOpenedMenus();
    },

    closeAllOpenedMenus(): void {
      this.$store.commit("navbar/SET_HAMMENU_CLOSE");
      this.$store.commit("navbar/SET_CATEGORYLIST_CLOSE");
    },
  },
});
</script>

<style lang="scss" scoped>
nav {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background-color: #333333;
  height: 80px;
  color: rgb(245, 245, 245);
  font-family: "Big Shoulders Display", cursive;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  ul {
    position: absolute;
    top: calc(80px + 34px);
    background-color: #2b2b2b;
    right: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    height: 0px;
    overflow: hidden;
    transition: all 0.35s;

    &.active {
      height: calc(100vh - (80px + 54px - 20px));
      padding: 40px 0;
      overflow: auto;
    }

    li {
      margin: 20px 0;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.35s;
      width: max-content;
      display: flex;
      gap: 10px;
      align-items: center;

      span {
        font-size: 0.6rem;
        pointer-events: none;
        transition: all 0.35s;
      }

      &.active {
        span {
          transform: rotate(180deg);
        }
      }

      &:hover {
        border-bottom: 1px solid rgba(245, 245, 245);
      }
    }

    .category-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      background-color: rgb(28, 28, 28);
      width: 100%;
      align-items: center;
      padding: 0;
      height: 0px;
      overflow: hidden;
      color: rgba(255, 255, 255, 0.614);
      letter-spacing: 1.2px;
      transition: all 0.25s;

      &.active {
        display: flex;
        height: max-content;
        opacity: 1;
        overflow: unset;
        padding: 20px 0;
      }

      li {
        font-size: 0.95rem;
        margin: 8px 0;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  nav {
    position: relative;
    gap: 20px;

    h1 {
      flex: 0 0 auto;
      width: max-content;
    }

    ul {
      flex-direction: row;
      justify-content: flex-start;
      position: relative;
      top: auto;
      background: none;
      opacity: 1;
      gap: 20px;
      height: max-content;
      overflow: visible;

      li {
        span {
          display: none;
        }

        &.active {
          border-bottom: 1px solid rgba(245, 245, 245);
        }
      }

      .category-list {
        position: absolute;
        padding: 0;
        display: grid;
        grid-template-columns: auto auto auto;
        font-size: 1.05rem;
        top: 70px;
        left: 0;
        gap: 0;
        overflow: hidden;

        &.active {
          display: grid;
          padding: 0;
          height: max-content;
          width: max-content;
        }

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px 20px;
          margin: 0;
          width: 180px;

          &:hover {
            border: none;
            background-color: rgba(255, 255, 255, 0.82);
            color: rgba(0, 0, 0, 0.627);

            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
