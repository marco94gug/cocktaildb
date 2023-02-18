import { MutationTree } from "vuex";
import {
  CategoryResponse,
  CategoryListType,
  FilteredDrinkByCategory,
} from "../../ts-types/category";

export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

const mutations: MutationTree<CategoryListType> = {
  [SET_CATEGORY_LIST]: (state, payload: CategoryResponse) => {
    state.categoryList = payload;
  },
  [SET_CATEGORY_FILTER]: (state, payload: FilteredDrinkByCategory) => {
    state.filteredByCategory = payload;
  },
};

export default mutations;
