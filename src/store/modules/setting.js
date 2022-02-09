import { storage } from "@/utils";
export default {
  namespaced: true,

  state: {
    showGrid: storage.get("setting/showGrid") === 1,
    gridSize: storage.get("setting/gridSize") || "m"
  },

  mutations: {
    SET_SHOW_GRID(state, val) {
      state.showGrid = val;
      storage.set("setting/showGrid", val ? 1 : 0);
    },
    SET_GRID_SIZE(state, val) {
      state.gridSize = val;
      storage.set("setting/gridSize", val);
    }
  },

  actions: {},
  getters: {
    gridOption: state => {
      const sizes = {
        s: 8,
        m: 16,
        l: 32
      };
      return sizes[state.gridSize];
    }
  }
};
