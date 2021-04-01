/*
 * @Author: pimzh
 * @Date: 2021-04-01 11:01:04
 * @LastEditTime: 2021-04-01 14:02:10
 * @LastEditors: pimzh
 * @Description: 左侧菜单选中的模板
 */

/**
 * interface Template {
 *  name: "",
 *  components: [Comp,...]
 * }
 */
export default {
  namespaced: true,

  state: {
    templates: [
      // Template
      {
        name: "按钮",
        components: [
          {
            name: "Button"
          }
        ]
      }
    ]
  },

  mutations: {
    ADD_TEMPLATE(state, template) {
      state.components.push(template);
    },
    REMOVE_TEMPLATE(state, template) {
      state.components.splice(state.components.indexOf(template), 1);
    }
  },

  actions: {},

  getters: {}
};
