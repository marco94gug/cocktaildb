<template>
  <div @click="(e) => setActiveMen(e)">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "hamburgerMenu",

  methods: {
    setActiveMen(e) {
      e.target.parentNode.classList.toggle("active");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  gap: 5px;

  span {
    background-color: rgb(255, 255, 255);
    height: 3px;
    width: 25px;
    transition: all 0.5s;
  }

  &.active {
    span:nth-child(1) {
      transform: rotate(45deg) translateY(5px) translateX(5px);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-6px) translateX(6px);
    }
  }
}
</style>
