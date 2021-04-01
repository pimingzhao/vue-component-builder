export default {
  namespaced: true,

  state: {
    showGrid: false,
    gridSize: "m",
    currentView: "md-add",
    viewList: ["md-remove", "md-add", "ios-grid-outline"]
  },

  mutations: {
    SET_SHOW_GRID(state, val) {
      state.showGrid = val;
    },
    SET_GRID_SIZE(state, val) {
      state.gridSize = val;
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
