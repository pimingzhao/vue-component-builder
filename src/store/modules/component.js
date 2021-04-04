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
 *  type?: "primary"
 * }
 */
export default {
  namespaced: true,

  state: {
    components: [],
    tree: [
      {
        name: "Buton",
        props: {}
      }
    ]
  },

  mutations: {
    ADD_COMP(state, comp) {
      state.components.push(comp);
    },
    REMOVE_COMP(state, comp) {
      state.components.splice(state.components.indexOf(comp), 1);
    }
  },

  actions: {},

  getters: {}
};
