import { GetterTree } from "vuex";
import { RootState } from "~/ts-types/rootState";

import { navBarStatusType } from "~/ts-types/navBarStatus";

const getters: GetterTree<navBarStatusType, RootState> = {
  hamMenuIsActive: (state) => state.hamMenuIsActive,
  categoryListIsActive: (state) => state.categoryListIsActive,
};

export default getters;
