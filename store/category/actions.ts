import { ActionTree } from "vuex";

import { SET_CATEGORY_LIST } from "./mutations";
import { CategoryListType } from "~/ts-types/category";
import { RootState } from "~/ts-types/rootState";

const actions: ActionTree<CategoryListType, RootState> = {
  async load({ commit }) {
    try {
      const categoryList = await this.$freeCocktail({
        method: "GET",
        baseURL: "https://www.thecocktaildb.com/api/json/v1/1/list.php",
        url: "list.php",
        params: {
          c: "list",
        },
      });

      commit(SET_CATEGORY_LIST, categoryList.data);
    } catch (e) {
      console.log(e);
    }
  },
};

export default actions;
