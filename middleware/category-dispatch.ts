import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store }) {
  await store.dispatch("category/load");
};

export default middleware;
