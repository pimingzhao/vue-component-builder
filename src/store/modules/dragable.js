import Vue from "vue";
import store from "../index";

export default {
  namespaced: true,

  state: {
    dragSrc: null // 左侧拖拽组件的组件参数
  },

  mutations: {
    SET_DRAG_SRC(state, src) {
      state.dragSrc = JSON.parse(JSON.stringify(src));
    }
  },

  actions: {
    handleDrop({ commit, state }, parent) {
      store.commit("component/ADD_COMP", state.dragSrc, parent);
      Vue.nextTick(() => {
        commit("SET_DRAG_SRC", null);
      });
    }
  },

  getters: {}
};
