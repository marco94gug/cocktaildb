import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store }) {
  store.dispatch("category/load");
  console.log("ci sono");
};

export default middleware;
