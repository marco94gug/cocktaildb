import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store }) {
  await store.dispatch("drinks/loadTopDrinks");
  await store.dispatch("drinks/loadMostLatestDrinks");
};
export default middleware;
