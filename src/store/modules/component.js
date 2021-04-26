/*
 * @Author: pimzh
 * @Date: 2021-04-01 11:01:04
 * @LastEditTime: 2021-04-26 15:10:52
 * @LastEditors: pimzh
 * @Description: 左侧demo面包定制好的组件
 */

/**
 * interface Comp {
 *  name: "Button",
 *  props: {},
 *  slot
 * }
 */
export default {
  namespaced: true,

  state: {
    dragSrc: null, // 左侧拖拽组件的组件参数
    compTree: [
      // Comp
    ]
  },

  mutations: {
    SET_DRAG_SRC(state, src) {
      state.dragSrc = JSON.parse(JSON.stringify(src));
    },
    ADD_COMP(state, parent) {
      const comp = state.dragSrc;
      if (!parent) {
        state.compTree.push(comp);
        state.dragSrc = null;
        return;
      }
      const loop = arr => {
        arr.forEach(item => {
          if (item === parent) {
            !item.children && (item.children = []);
            item.children.push(comp);
          } else if (item.children && item.children.length) {
            loop(item.children);
          }
        });
      };
      loop(state.compTree);
      state.dragSrc = null;
    },
    REMOVE_COMP(state, comp) {
      state.components.splice(state.components.indexOf(comp), 1);
    }
  },

  actions: {
    handleDrop({ state, commit }, parent) {
      // 无起始拖拽元素
      if (!state.dragSrc) return;
      commit("ADD_COMP", parent);
    }
  },

  getters: {}
};
