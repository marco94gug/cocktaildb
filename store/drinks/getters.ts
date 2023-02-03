import { GetterTree } from "vuex";
import { drinksState } from "../../ts-types/drinks";
import { RootState } from "../../ts-types/rootState";

const getters: GetterTree<RootState, drinksState> = {
  drink: (state) => state.drink,
  topDrinks: (state) => state.topDrinks,
  mostLatestDrinks: (state) => state.mostLatestDrinks,
};

export default getters;
