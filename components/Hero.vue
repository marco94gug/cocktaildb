<template>
  <section class="hero">
    <div>
      <div class="button_container">
        <button @click="prevPic">
          <font-awesome-icon
            v-if="scrollValue > 0"
            class="left"
            icon="fa-solid fa-chevron-up"
          />
        </button>
        <button @click="nextPic">
          <font-awesome-icon
            v-if="scrollValue < maxValue"
            class="right"
            icon="fa-solid fa-chevron-up"
          />
        </button>
      </div>
      <img
        class="hero-img"
        :style="`right: ${scrollValue}vw`"
        src="https://picsum.photos/600/200?random=1"
        title="hero-slider"
      />
      <img
        class="hero-img"
        :style="`right: ${scrollValue}vw`"
        src="https://picsum.photos/600/200?random=2"
        title="hero-slider"
      />
      <img
        class="hero-img"
        :style="`right: ${scrollValue}vw`"
        src="https://picsum.photos/600/200?random=3"
        title="hero-slider"
      />
      <img
        class="hero-img"
        :style="`right: ${scrollValue}vw`"
        src="https://picsum.photos/600/200?random=4"
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
    return {
      scrollValue: 100,
    };
  },

  props: ["topDrinks"],

  computed: {
    maxValue(): number {
      return (this.topDrinks.length - 1) * 100;
    },
  },

  methods: {
    nextPic(): void {
      if (this.scrollValue < this.maxValue) {
        this.scrollValue += 100;
      }
    },

    prevPic(): void {
      if (this.scrollValue > 0) {
        this.scrollValue -= 100;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  margin-top: 54px;
  height: 30vh;
  overflow: hidden;

  div {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
    flex-wrap: nowrap;
    width: max-content;
    height: 100%;

    .button_container {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100vw;
      z-index: 1;

      button {
        background: none;
        border: none;
        color: white;
        height: 100%;
        font-size: 25px;
        width: max-content;
        margin: 0;
        padding: 0;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.201);
        }
        .right {
          transform: rotate(90deg);
          padding: 0 8px;
        }
      }

      .left {
        transform: rotate(-90deg);
        padding: 0 8px;
      }
    }

    .hero-img {
      position: relative;
      top: 0;
      left: auto;
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
