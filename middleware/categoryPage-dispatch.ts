import { Middleware } from "@nuxt/types";

const middleware: Middleware = async function ({ store, params, query }) {
  console.log(query.text);
  if (query.category) {
    const categoryName = (query.category as string).replace("-", "/");
    await store.dispatch("category/loadCategoryFilter", categoryName);
  } else {
    const searchValue = query.text as string;
    await store.dispatch("category/loadSearchResultedForPage", searchValue);
  }
};

export default middleware;
