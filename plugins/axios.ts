import { Plugin } from "@nuxt/types";

const plugin: Plugin = function ({ app: { $axios } }) {
  $axios.defaults.baseURL = "https://the-cocktail-db.p.rapidapi.com/";
  $axios.onRequest((config) => {
    config.headers.common.Accept = "*/*";
    config.headers.common["Content-Type"] = "application/json";
    config.headers.common["X-RapidAPI-Key"] = process.env.API_KEY;
    config.headers.common["X-RapidAPI-Host"] = "the-cocktail-db.p.rapidapi.com";
  });
};

export default plugin;
