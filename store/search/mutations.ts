import { MutationTree } from "vuex";
import { drinksListType, drinksRes } from "~/ts-types/drinks";

const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";

const mutations: MutationTree<drinksRes> = {
  [SET_SEARCH_RESULTS]: (state: drinksRes, payload: drinksListType): void => {
    state.drinksList = payload;
  },
};

export default mutations;
