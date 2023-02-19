<template>
  <div class="breadcrumbs">
    <ul>
      <li @click="$router.push('/')">Home</li>
      <div v-for="(link, index) in links">
        <span>></span>
        <li
          @click="linkClick(link)"
          :style="`${links.length - 1 === index ? styleLinkVisited : ''}`"
        >
          {{ link }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  data() {
    return {};
  },

  props: {
    links: [] as PropType<string[]>,
  },

  computed: {
    styleLinkVisited() {
      return "text-decoration: none; cursor: default; color: #00000065";
    },
  },

  methods: {
    linkClick(link: string) {
      this.$emit("OnClickLink", link);
    },
  },
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  padding: 20px;
  color: rgb(37, 37, 37);
  font-weight: bold;
  text-transform: capitalize;

  ul {
    display: flex;
    gap: 10px;

    div {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    li {
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
