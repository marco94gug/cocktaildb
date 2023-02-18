import { GetterTree } from "vuex";

import { CategoryListType } from "../../ts-types/category";
import { RootState } from "../../ts-types/rootState";

const getters: GetterTree<CategoryListType, RootState> = {
  categoryList: (state) => state.categoryList,
  filteredByCategory: (state) => state.filteredByCategory,
};

export default getters;
