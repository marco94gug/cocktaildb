import { MutationTree } from "vuex";
import { drinksState } from "~/ts-types/drinks";

export const SET_TOP_DRINKS = "SET_TOP_DRINKS";
export const SET_DRINK = "SET_DRINK";

const mutations: MutationTree<drinksState> = {
  [SET_TOP_DRINKS]: (state, payload): void => {
    state.topDrinks = payload;
  },
  [SET_DRINK]: (state, payload): void => {
    state.drink = payload;
  },
};

export default mutations;
