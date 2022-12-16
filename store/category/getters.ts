import { GetterTree } from "vuex";

import { CategoryListType, CategoryResponse } from "~/ts-types/category";
import { RootState } from "~/ts-types/rootState";

const getters: GetterTree<CategoryListType, RootState> = {
  categoryList: (state): CategoryResponse => state.categoryList,
};

export default { getters };
