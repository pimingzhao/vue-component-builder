<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:10:06
 * @LastEditTime: 2021-04-03 22:28:26
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import { mapState } from "vuex";
import render from "../render";
import Dragable from "../DistDragable";

export default {
  name: "Builder",
  components:{
    Dragable
  },
  computed: {
    ...mapState("setting", ["showGrid"])
  },
  render(h) {
    return h(
      "div",
      {
        class: "relative",
        ref: "builder"
      },
      [this.showGrid && render.renderGrid(h, this),
      h("Dragable", {
        class: "w-full h-full"
      }, [
        "hello y"
      ])
      ]
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
