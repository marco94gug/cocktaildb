import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store, params }) {
  const categoryName = params.categoryName.replace("&", "/");
  await store.dispatch("category/loadCategoryFilter", categoryName);
};

export default middleware;
