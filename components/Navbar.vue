<template>
  <nav>
    <h1>The Cocktail DB</h1>
    <HamMen :setActiveMenu="setActiveMenu" />
    <ul class="menu-list">
      <li @click="handleHomeClick">Home</li>
      <li>Cocktails</li>
      <li @click="(e) => handleCategoriesClick(e)">
        Categories <span>▲</span>
      </li>
      <div class="category-list">
        <p
          v-for="category in categoryList.drinks"
          @click="handleCategoryClick(category)"
        >
          {{ category.strCategory }}
        </p>
      </div>
      <li>About us</li>
    </ul>
    <SearchBar />
  </nav>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import { DrinksType } from "~/ts-types/category";

export default {
  name: "Navbar",

  data() {
    return {
      active: {} as HTMLDivElement,
    };
  },

  computed: {
    ...mapGetters("category", ["categoryList"]),
  },

  methods: {
    setActiveMenu(e: MouseEvent): void {
      const target = e.target as HTMLDivElement;
      this.active = target;
      const menuList = document.querySelector(".menu-list") as HTMLUListElement;

      menuList.classList.toggle("active");
      target.classList.toggle("active");
    },
    handleCategoriesClick(e: MouseEvent): void {
      const categoryMenuLi = e.target as HTMLLIElement;
      const categoryList = document.querySelector(
        ".category-list"
      ) as HTMLDivElement;

      categoryMenuLi.classList.toggle("active");
      categoryList.classList.toggle("active");
    },
    handleHomeClick(): void {
      this.$router.push("/");
      this.active.classList.toggle("active");
      document.querySelector(".menu-list")?.classList.toggle("active");
    },

    handleCategoryClick(category: DrinksType): void {
      console.log(category);
    },
  },
};
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
      border-bottom: 1px solid rgba(255, 255, 255, 0);
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
      gap: 8px;
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

      .category-list {
        position: absolute;
        padding: 0;
        display: grid;
        grid-template-columns: 180px 180px 180px;
        font-size: 1.05rem;
        top: 70px;
        overflow: hidden;

        &.active {
          display: grid;
          padding: 0;
          height: max-content;
          grid-template-columns: 180px 180px 180px;
          justify-content: center;
          width: max-content;
        }

        p {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;

          &:hover {
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
