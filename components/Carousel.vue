<template>
  <div class="carousel">
    <DrinkCard
      v-for="drink in dataListLength(8)"
      :title="drink.strDrink"
      :image="drink.strDrinkThumb"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { VueConstructor } from "vue/types/umd";
import { drinkType } from "~/ts-types/drinks";
import DrinkCard from "./DrinkCard.vue";

export default (Vue as VueConstructor).extend({
  data() {
    return {};
  },
  props: {
    dataList: {
      type: [] as PropType<drinkType[]>,
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
.carousel {
  display: flex;
  gap: 10px;
  width: calc(100% - 40px);
  padding: 10px 0;
  overflow-x: scroll;
  box-sizing: border-box;
  margin: 20px;
}

@media only screen and (min-width: 768px) {
  .carousel {
  }
}
</style>
