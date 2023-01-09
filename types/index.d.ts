import { NuxtAxiosInstance } from "@nuxtjs/axios";

declare module "vue/types/vue" {
  interface Vue {
    $axios: NuxtAxiosInstance;
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $axios: NuxtAxiosInstance;
  }

  interface Context {
    $axios: NuxtAxiosInstance;
    $rapidCocktail: NuxtAxiosInstance;
    $freeCocktail: NuxtAxiosInstance;
  }
}

declare module "vuex/types/index" {
  interface Store<S> {
    $axios: NuxtAxiosInstance;
    $rapidCocktail: NuxtAxiosInstance;
    $freeCocktail: NuxtAxiosInstance;
  }
}
