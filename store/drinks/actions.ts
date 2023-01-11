import { ActionTree } from "vuex";
import { drinksState } from "~/ts-types/drinks";
import { RootState } from "~/ts-types/rootState";

import { SET_TOP_DRINKS } from "./mutations";

const actions: ActionTree<RootState, drinksState> = {
  async loadTopDrinks({ commit }) {
    const topDrinksRes = await this.$rapidCocktail.$get("/popular.php");

    commit(SET_TOP_DRINKS, topDrinksRes);
  },
};

export default actions;
