import Vue from "vue";
import Vuex from "vuex";
import defaultBoard from "../default-board";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultBoard,
  },
  mutations: {},
  actions: {},
  modules: {},
});
