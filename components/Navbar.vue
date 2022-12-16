<template>
  <nav>
    <h1>The Cocktail DB</h1>
    <HamMen :setActiveMenu="setActiveMenu" />
    <ul class="menu-list">
      <li>Home</li>
      <li>Cocktails</li>
      <li>Categories</li>
      <li>About us</li>
    </ul>
    <SearchBar />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",

  methods: {
    setActiveMenu(e: MouseEvent): void {
      const target = e.target as HTMLDivElement;
      const menuList = document.querySelector(".menu-list") as HTMLUListElement;

      menuList.classList.toggle("active");
      target.classList.toggle("active");
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
    justify-content: center;
    gap: 10px;
    height: 0px;
    overflow: hidden;
    transition: all 0.35s;

    &.active {
      height: 320px;
    }

    li {
      margin: 20px 0;
      font-size: 1.2rem;
      letter-spacing: 1.5px;
      cursor: pointer;
      transition: all 0.35s;
      border-bottom: 1px solid rgba(255, 255, 255, 0);
      width: max-content;

      &:hover {
        border-bottom: 1px solid rgba(245, 245, 245);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  nav {
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
    }
  }
}
</style>
