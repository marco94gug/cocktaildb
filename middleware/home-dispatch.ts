import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store }) {
  await store.dispatch("drinks/loadTopDrinks");
};
export default middleware;
