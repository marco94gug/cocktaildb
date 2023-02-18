<template>
  <div>
    <h2 class="carousel-title">{{ title }}</h2>
    <div class="carousel-container">
      <div class="carousel" ref="cardScroller">
        <DrinkCard
          v-for="drink in dataListLength(8)"
          :title="drink.strDrink"
          :image="drink.strDrinkThumb"
          :key="drink.idDrink"
          :drinkInfo="drink"
          @clicked="clickCard"
        />
      </div>
      <div class="buttons">
        <button
          :class="`button-left ${isMinScrollValue ? 'inactive' : ''}`"
          @click="scrollTo('left')"
        >
          <font-awesome-icon class="right" icon="fa-solid fa-chevron-up" />
        </button>
        <button
          :class="`button-right ${isMaxScrollValue ? 'inactive' : ''}`"
          @click="scrollTo('right')"
        >
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
  data() {
    return {
      clientWidth: 1,
      scrollLeft: 0,
      scrollWidth: 0,
    };
  },
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

  mounted() {
    (this.$refs.cardScroller as HTMLDivElement).addEventListener(
      "scroll",
      (e: Event) => this.updateScrollValue(e)
    );
  },

  beforeRouteLeave() {
    (this.$refs.cardScroller as HTMLDivElement)?.removeEventListener(
      "scroll",
      (e: Event) => this.updateScrollValue(e)
    );
  },

  computed: {
    isMaxScrollValue(): boolean {
      const scrollDimension = this.scrollWidth - this.clientWidth;

      if (scrollDimension > this.scrollLeft) {
        return scrollDimension === Math.ceil(this.scrollLeft);
      } else if (scrollDimension < this.scrollLeft) {
        return scrollDimension === Math.floor(this.scrollLeft);
      } else {
        return false;
      }
    },

    isMinScrollValue(): boolean {
      return this.scrollLeft === 0;
    },
  },

  methods: {
    dataListLength(n: number): drinkType[] {
      return this.dataList.filter((_, i: number) => i < n);
    },

    scrollTo(direction: string) {
      const cardScrollerTarget = this.$refs.cardScroller as HTMLDivElement;
      const offset = direction === "right" ? Math.abs(600) : -Math.abs(600);

      console.log("scrollDimension", this.scrollWidth - this.clientWidth);
      console.log("scrollLeft", Math.floor(this.scrollLeft));

      cardScrollerTarget.scrollTo({
        top: 0,
        left: cardScrollerTarget.scrollLeft + offset,
        behavior: "smooth",
      });
    },

    updateScrollValue(e: Event) {
      const targetScrollPosition = e.target as HTMLDivElement;

      this.clientWidth = targetScrollPosition.clientWidth;
      this.scrollLeft = targetScrollPosition.scrollLeft;
      this.scrollWidth = targetScrollPosition.scrollWidth;
    },

    clickCard(id: string) {
      this.$router.push(`/drink/${id}/`);
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
  padding: 10px 0;
  .carousel {
    display: flex;
    gap: 10px;
    width: 100%;
    padding-block: 5px;
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
    pointer-events: none;
    display: none;

    button {
      flex: 0 0 auto;
      height: 40px;
      width: 40px;
      border: none;
      border-radius: 100%;
      background-color: rgb(247, 247, 247);
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.166);
      cursor: pointer;
      pointer-events: all;
      opacity: 1;
      transition: all 0.15s;

      &.inactive {
        opacity: 0;
      }
      .right {
        transform: rotate(-90deg);
        pointer-events: none;
      }

      .left {
        transform: rotate(90deg);
        pointer-events: none;
      }
    }
  }
}

@media only screen and (min-width: 768px) {
  .carousel-title {
    margin: 0;
  }

  .carousel-container {
    margin-block: 20px;
    .buttons {
      display: flex;
    }
    .carousel {
      gap: 10px;
      // width: calc(100% - 40px);
    }
  }
}
</style>
