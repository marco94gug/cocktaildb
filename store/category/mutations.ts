import { MutationTree } from "vuex";
import { drinksListType } from "~/ts-types/drinks";
import {
  CategoryResponse,
  CategoryListType,
  FilteredDrinkByCategory,
} from "../../ts-types/category";

export const SET_CATEGORY_LIST = "SET_CATEGORY_LIST";
export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
export const CLEAR_CATEGORY_FILTERED = "CLEAR_CATEGORY_FILTERED";
export const SET_SEARCHED_RESULTS = "SET_SEARCH_RESULTS";
export const CLEAR_SEARCHED_RESULTS = "CLEAR_SEARCH_RESULTS";

const mutations: MutationTree<CategoryListType> = {
  [SET_CATEGORY_LIST]: (state, payload: CategoryResponse) => {
    state.categoryList = payload;
  },
  [SET_CATEGORY_FILTER]: (state, payload: FilteredDrinkByCategory) => {
    state.filteredByCategory = payload;
  },
  [CLEAR_CATEGORY_FILTERED]: (state) => {
    state.filteredByCategory = {} as FilteredDrinkByCategory;
  },
  [SET_SEARCHED_RESULTS]: (state, payload: drinksListType): void => {
    state.drinksResults = payload;
  },
  [CLEAR_SEARCHED_RESULTS]: (state): void => {
    state.drinksResults = {} as drinksListType;
  },
};

export default mutations;
