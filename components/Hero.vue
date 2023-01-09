<template>
  <section class="hero">
    <div>
      <img
        class="hero-img"
        src="https://picsum.photos/600/200?random=1"
        title="hero-slider"
      />
      <img
        class="hero-img"
        src="https://picsum.photos/600/200?random=2"
        title="hero-slider"
      />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Hero",

  data() {
    return {};
  },

  props: ["topDrinks"],
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  margin-top: 54px;
  height: 30vh;
  overflow: hidden;

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    width: max-content;
    height: 100%;

    .hero-img {
      position: relative;
      top: 0;
      left: 0;
      right: 100vw;
      width: 100vw;
      height: 100%;
      object-fit: cover;
      transition: all 0.8s;
    }
  }
}

@media only screen and (min-width: 768px) {
  .hero {
    margin-top: 0;
    height: 40vh;

    div {
      .hero-img {
        top: 0;
      }
    }
  }
}
</style>
