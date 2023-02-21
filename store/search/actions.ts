import { ActionTree } from "vuex";
import { drinksRes } from "../../ts-types/drinks";
import { RootState } from "../../ts-types/rootState";

import { SET_SEARCH_RESULTS } from "./mutations";

const actions: ActionTree<drinksRes, RootState> = {
  async loadSearchResults({ commit }, searchParam) {
    console.log("dentro la action");
    try {
      const res = await this.$rapidCocktail.$get("/search.php", {
        params: {
          s: searchParam,
        },
      });

      commit(SET_SEARCH_RESULTS, res);
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
