<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:10:06
 * @LastEditTime: 2021-03-30 23:13:12
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import { mapState, mapGetters } from "vuex";
import render from "./render";

export default {
  name: "Builder",
  computed: {
    ...mapState("setting", ["showGrid"]),
    ...mapGetters("setting", ["gridOption"])
  },
  render(h) {
    return h(
      "div",
      {
        class: "relative",
        ref: "builder"
      },
      [this.showGrid && render.renderGrid(h, this)]
    );
  },
  methods: {
    handleResize() {
      this.$store.commit("setting/SET_SHOW_GRID", false);
      this.$store.commit("setting/SET_SHOW_GRID", true);
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
