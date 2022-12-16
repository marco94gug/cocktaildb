import { MutationTree } from "vuex";
import { CategoryResponse, CategoryListType } from "~/ts-types/category";

export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";

const mutations: MutationTree<CategoryListType> = {
  [SET_CATEGORY_LIST]: (
    state: CategoryListType,
    payload: CategoryResponse
  ): void => {
    console.log(payload);
    state.categoryList = payload;
  },
};

export default mutations;
