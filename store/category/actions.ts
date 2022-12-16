import { ActionTree } from "vuex";

import { SET_CATEGORY_LIST } from "./mutations";
import { CategoryListType } from "~/ts-types/category";
import { RootState } from "~/ts-types/rootState";

const actions: ActionTree<CategoryListType, RootState> = {
  async load({ commit }) {
    try {
      const categoryList = await this.$axios.$get("list.php", {
        params: {
          c: "list",
        },
      });

      commit(SET_CATEGORY_LIST, categoryList);
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
