<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:10:06
 * @LastEditTime: 2021-04-05 20:18:19
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
    const _this=this;
    const { showGrid } = this;
    return h(
      "div",
      {
        class: "relative",
        ref: "builder"
      },
      [
        showGrid && render.renderGrid(h, this),
        h(
          "div",
          {
            class: showGrid ? "absolute builder-wrapper h-full" : "w-full h-full",
            on: {
              dragover: e => e.preventDefault(),
              drop: () => _this.handleDrop()
            }
          },
          _this.compTree.map(comp=>render.Comp(h,comp))
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
      this.$store.dispatch("dragable/handleDrop", params);
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