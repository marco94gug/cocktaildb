import { ActionTree } from "vuex";

import { SET_CATEGORY_LIST, SET_CATEGORY_FILTER } from "./mutations";
import { CategoryListType } from "../../ts-types/category";
import { RootState } from "../../ts-types/rootState";

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
      console.error(e);
    }
  },

  async loadCategoryFilter({ commit }, category: string) {
    try {
      const drinkListFilteredByCategory = await this.$rapidCocktail(
        "/filter.php",
        {
          params: {
            c: category,
          },
        }
      );

      commit(SET_CATEGORY_FILTER, drinkListFilteredByCategory.data);
    } catch (error) {
      console.error(error);
    }
  },
};

export default actions;
