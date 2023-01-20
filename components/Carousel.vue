<template>
  <div class="carousel">
    <img src="https://picsum.photos/300/200?random=1" alt="test-img" />
    <img src="https://picsum.photos/300/200?random=2" alt="test-img" />
    <img src="https://picsum.photos/300/200?random=3" alt="test-img" />
    <img src="https://picsum.photos/300/200?random=4" alt="test-img" />
    <img src="https://picsum.photos/300/200?random=5" alt="test-img" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },

  props: [],
});
</script>

<style lang="scss" scoped>
.carousel {
  display: flex;
  gap: 10px;
  width: calc(100% - 40px);
  overflow-x: scroll;
  box-sizing: border-box;
  margin: 20px;

  img {
    height: 100px;
    width: 300px;
  }
}

@media only screen and (min-width: 768px) {
  .carousel {
    img {
      height: 100%;
      widows: 100%;
    }
  }
}
</style>
