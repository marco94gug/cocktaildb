import { ActionTree } from "vuex";
import { drinksState } from "~/ts-types/drinks";
import { RootState } from "~/ts-types/rootState";

import { SET_DRINK, SET_MOST_LATEST_DRINKS, SET_TOP_DRINKS } from "./mutations";

const actions: ActionTree<RootState, drinksState> = {
  async loadTopDrinks({ commit }) {
    const topDrinksRes = await this.$rapidCocktail.$get("/popular.php");

    commit(SET_TOP_DRINKS, topDrinksRes);
  },

  async loadDrink({ commit }, id) {
    const drinkRes = await this.$freeCocktail.$get("/lookup.php", {
      params: {
        i: id,
      },
    });

    const drink = await drinkRes.drinks[0];

    commit(SET_DRINK, drink);
  },

  async loadMostLatestDrinks({ commit }) {
    const mostLatestDrinksRes = await this.$rapidCocktail.$get("latest.php");

    commit(SET_MOST_LATEST_DRINKS, mostLatestDrinksRes);
  },
};

export default actions;
