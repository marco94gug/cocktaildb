<template>
  <div class="drink_card" @click="onClick(drinkInfo.idDrink)">
    <img :src="image" :alt="title" />
    <div class="drink_info">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    drinkInfo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onClick(id: string) {
      this.$emit("clicked", id);
    },
  },
});
</script>

<style lang="scss" scoped>
.drink_card {
  background-color: rgb(239, 239, 239);
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 auto;
  width: 200px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.232);
  cursor: pointer;

  img {
    height: 200px;
  }

  .drink_info {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    font-size: 0.95rem;
  }
}

@media only screen and (min-width: 768px) {
  .drink_card {
    width: 300px;

    &:hover  {
      border: 2px solid red;
    }

    img {
      height: 300px;
    }

    .drink_info {
      font-size: 1rem;
    }
  }
}
</style>
