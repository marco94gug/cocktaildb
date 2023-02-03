<template>
  <div>
    <h2 class="carousel-title">{{ title }}</h2>
    <div class="carousel">
      <DrinkCard
        v-for="drink in dataListLength(8)"
        :title="drink.strDrink"
        :image="drink.strDrinkThumb"
        :key="drink.idDrink"
      />
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
.carousel {
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 10px 0;
  overflow-x: scroll;
  box-sizing: border-box;
  margin: 20px 0;
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
