import { MutationTree } from "vuex";
import { drinksState } from "~/ts-types/drinks";

export const SET_TOP_DRINKS = "SET_TOP_DRINKS";
export const SET_DRINK = "SET_DRINK";
export const SET_MOST_LATEST_DRINKS = "SET_MOST_LATEST_DRINKS";

const mutations: MutationTree<drinksState> = {
  [SET_TOP_DRINKS]: (state, payload): void => {
    state.topDrinks = payload;
  },
  [SET_DRINK]: (state, payload): void => {
    state.drink = payload;
  },
  [SET_MOST_LATEST_DRINKS]: (state, payload): void => {
    state.mostLatestDrinks = payload;
  },
};

export default mutations;
