import { Context } from "@nuxt/types";
import { Plugin } from "@nuxt/types";

const plugin: Plugin = function ({ $axios }: Context, inject: any) {
  const rapidCocktail = $axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    headers: {
      "Content-Type": "application/json",
      // "X-RapidAPI-Key": process.env.API_KEY,
      // "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  });

  const freeCocktail = $axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  inject("rapidCocktail", rapidCocktail);
  inject("freeCocktail", freeCocktail);
};

export default plugin;
