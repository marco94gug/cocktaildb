<template>
  <div class="drink_card">
    <img :src="image" :alt="title" />
    <div class="drink_info">
      <h3>{{ title }}</h3>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
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
  width: 300px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.232);

  img {
    height: 300px;
  }

  .drink_info {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
  }
}
</style>
