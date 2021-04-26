<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:10:06
 * @LastEditTime: 2021-04-26 15:31:51
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import { mapState } from "vuex";
import render from "../render";
import Dragable from "../DistDragable";

export default {
  name: "Builder",
  components: {
    Dragable
  },
  computed: {
    ...mapState("setting", ["showGrid"]),
    ...mapState("component", ["compTree"])
  },
  render(h) {
    const _this = this;
    return h(
      "div",
      {
        class: "relative",
        ref: "builder"
      },
      [
        _this.showGrid && render.renderGrid(h, _this),
        h(
          "div",
          {
            class: _this.showGrid
              ? "absolute builder-wrapper h-full"
              : "w-full h-full",
            on: {
              dragover: e => e.preventDefault(),
              drop: () => _this.handleDrop()
            }
          },
          _this.compTree.map(comp => render.Comp(h, comp))
        )
      ]
    );
  },
  methods: {
    handleResize() {
      this.$store.commit("setting/SET_SHOW_GRID", false);
      this.$store.commit("setting/SET_SHOW_GRID", true);
    },
    handleDrop(params) {
      this.$store.dispatch("component/handleDrop", params);
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style scoped>
.builder-wrapper {
  width: calc(100% - 15px);
}
</style>
