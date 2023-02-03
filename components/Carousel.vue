<template>
  <div>
    <h2 class="carousel-title">{{ title }}</h2>
    <div class="carousel-container">
      <div class="carousel">
        <DrinkCard
          v-for="drink in dataListLength(8)"
          :title="drink.strDrink"
          :image="drink.strDrinkThumb"
          :key="drink.idDrink"
        />
      </div>
      <div class="buttons">
        <button class="button-right">
          <font-awesome-icon class="right" icon="fa-solid fa-chevron-up" />
        </button>
        <button class="button-left">
          <font-awesome-icon class="left" icon="fa-solid fa-chevron-up" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { VueConstructor } from "vue/types/umd";
import { drinkType } from "~/ts-types/drinks";
import DrinkCard from "./DrinkCard.vue";

export default (Vue as VueConstructor).extend({
  props: {
    dataList: {
      type: [] as PropType<drinkType[]>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: { DrinkCard },

  methods: {
    dataListLength(n: number): drinkType[] {
      return this.dataList.filter((_, i: number) => i < n);
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: rgb(21, 21, 21);
  margin-left: 20px;
}

.carousel-container {
  position: relative;
  margin: 20px 0;
  padding: 10px 0;
  .carousel {
    display: flex;
    gap: 10px;
    width: 100%;
    overflow-x: scroll;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .buttons {
    position: absolute;
    top: 0;
    left: -20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: calc(100% + 40px);

    button {
      flex: 0 0 auto;
      height: 40px;
      width: 40px;
      border: none;
      border-radius: 100%;
      background-color: rgb(247, 247, 247);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.166);
      cursor: pointer;
      .right {
        transform: rotate(-90deg);
      }

      .left {
        transform: rotate(90deg);
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .carousel-title {
    margin: 0;
  }
  .carousel {
    gap: 10px;
    width: calc(100% - 40px);
  }
}
</style>
