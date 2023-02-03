import { MutationTree } from "vuex";
import { navBarStatusType } from "../../ts-types/navBarStatus";

export const SET_HAMMENU_CLOSE = "SET_HAMMENU_CLOSE";
export const SET_HAMMENU_OPEN_CLOSE = "SET_HAMMENU_OPEN_CLOSE";
export const SET_CATEGORYLIST_CLOSE = "SET_CATEGORYLIST_CLOSE";
export const SET_CATEGORYLIST_OPEN_CLOSE = "SET_CATEGORYLIST_OPEN_CLOSE";

const mutations: MutationTree<navBarStatusType> = {
  [SET_HAMMENU_CLOSE]: (state): void => {
    state.hamMenuIsActive = false;
  },
  [SET_HAMMENU_OPEN_CLOSE]: (state): void => {
    state.hamMenuIsActive = !state.hamMenuIsActive;
  },
  [SET_CATEGORYLIST_CLOSE]: (state): void => {
    state.categoryListIsActive = false;
  },
  [SET_CATEGORYLIST_OPEN_CLOSE]: (state): void => {
    state.categoryListIsActive = !state.categoryListIsActive;
  },
};

export default mutations;
