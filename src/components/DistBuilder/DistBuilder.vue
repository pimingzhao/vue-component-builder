<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:10:06
 * @LastEditTime: 2022-02-09 14:04:05
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import { mapState } from "vuex";
import render from "../render";

export default {
  name: "Builder",
  computed: {
    ...mapState("setting", ["showGrid"]),
    ...mapState("component", ["compTree"])
  },
  render(h) {
    return (
      <div ref="builder" class="relative">
        {this.showGrid && render.renderGrid(h, this)}
        <div
          class={
            this.showGrid ? "absolute builder-wrapper h-full" : "w-full h-full"
          }
          ondragover={e => {
            e.preventDefault();
          }}
          ondrop={this.handleDrop}
        >
          {this.compTree.map(comp => render.renderComp(h, comp))}
        </div>
      </div>
    );
  },
  methods: {
    handleResize() {
      if (this.showGrid) {
        this.$store.commit("setting/SET_SHOW_GRID", false);
        this.$store.commit("setting/SET_SHOW_GRID", true);
      }
    },
    handleDrop() {
      this.$store.dispatch("component/handleDrop");
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
