import { GetterTree } from "vuex";
import { drinksRes } from "../../ts-types/drinks";
import { RootState } from "../../ts-types/rootState";

const getters: GetterTree<drinksRes, RootState> = {
  drinksList: (state) => state.drinksList,
};

export default getters;
