import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ $rapidCocktail }) {
  const drinksData = await $rapidCocktail({
    method: "GET",
    baseURL: "https://the-cocktail-db.p.rapidapi.com",
    url: "/popular.php",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "the-cocktail-db.p.rapidapi.com",
    },
  });

  console.log(drinksData.data);
};

export default middleware;
