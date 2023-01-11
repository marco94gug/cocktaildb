import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store, route }) {
  const idDrink = route.params.id;

  await store.dispatch("drinks/loadDrink", idDrink);
};

export default middleware;
