/*
 * @Author: pimzh
 * @Date: 2021-04-01 11:01:04
 * @LastEditTime: 2021-04-03 20:04:00
 * @LastEditors: pimzh
 * @Description: 左侧菜单选中的模板
 */

/**
 * interface Template {
 *  name: "",
 *  components: [Comp,...]
 * }
 */
import Vue from "vue";
import { getOption } from "@/api/options";

export default {
  namespaced: true,

  state: {
    templates: [
      // Template
    ],
    // compOption
    compOption: {}
  },

  mutations: {
    ADD_TEMPLATE(state, template) {
      state.templates.push(template);
    },
    REMOVE_TEMPLATE(state, template) {
      state.templates.splice(state.templates.indexOf(template), 1);
    },
    SET_PROPS(state, { name, i, key, val }) {
      const find = state.templates.find(template => template.name === name);
      find && Vue.set(find.components[i].props, key, val);
    },
    SET_OPTION(state, { compName, option }) {
      state.compOption[compName] = option;
    }
  },

  actions: {
    async addTemplate({ commit, state }, template) {
      commit("ADD_TEMPLATE", template);
      const compName = template.components[0].name;
      if (!Object.prototype.hasOwnProperty.call(state.compOption, compName)) {
        const option = (await getOption(compName)).data;
        commit("SET_OPTION", {
          compName,
          option
        });
      }
    }
  },

  getters: {}
};
