/*
 * @Author: pimzh
 * @Date: 2021-04-01 11:01:04
 * @LastEditTime: 2021-04-01 11:01:57
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
    compTree: [
      // Comp
    ]
  },

  mutations: {
    ADD_COMP(state, comp, parent) {
      if (!parent) {
        state.compTree.push(comp);
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
    },
    REMOVE_COMP(state, comp) {
      state.components.splice(state.components.indexOf(comp), 1);
    }
  },

  actions: {},

  getters: {}
};
