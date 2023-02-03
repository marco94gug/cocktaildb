import { MutationTree } from "vuex";
import { drinksListType, drinksRes } from "../../ts-types/drinks";

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

const mutations: MutationTree<drinksRes> = {
  [SET_SEARCH_RESULTS]: (state, payload: drinksListType): void => {
    state.drinksList = payload;
  },
  [CLEAR_SEARCH_RESULTS]: (state): void => {
    state.drinksList = {} as drinksListType;
  },
};

export default mutations;
