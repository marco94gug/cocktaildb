import { ActionTree } from "vuex";

import { SET_CATEGORY_LIST } from "./mutations";
import { CategoryListType } from "~/ts-types/category";
import { RootState } from "~/ts-types/rootState";

const actions: ActionTree<CategoryListType, RootState> = {
  async load({ commit }) {
    console.log("dentro all action");
    try {
      const categoryList = await this.$axios.$get("list.php", {
        params: {
          c: "list",
        },
      });
      console.log("cisono");

      console.log("dentro all action 2");

      commit(SET_CATEGORY_LIST, categoryList);
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
