<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:13:27
 * @LastEditTime: 2021-04-01 17:44:57
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import { mapState } from "vuex";

import Dragable from "./DistDragable";
import render from "./render";
import renderWrapper from "./renderWrapper";

export default {
  name: "Demo",
  comments: {
    Dragable
  },
  computed: {
    ...mapState("template", ["templates"])
  },
  methods: {
    renderContent(h) {
      return this.templates.map(item => {
        return h(
          "div",
          {
            class: "demo-item"
          },
          [
            h(
              "p",
              {
                class: "demo-item-title"
              },
              item.name || "fdsaf"
            ),
            ...item.components.map(comp => render[comp.name](h, comp))
          ]
        );
      });
    },
    handleDragStart(e) {
      console.error(e);
    }
  },
  render(h) {
    const _this = this;
    return h(
      "div",
      {
        class: "demo"
      },
      [
        h("div", [
          h(
            "div",
            {
              class: "demo-header flex items-center flex-end"
            },
            []
          ),
          h(
            "div",
            {
              class: "demo-container overflow-y-auto"
            },
            _this.renderContent(h)
          )
        ])
      ]
    );
  }
};
</script>

<style scoped>
.demo .demo-header {
  height: 2rem;
  padding-right: 10px;
}
.demo .demo-container {
  height: calc(100% - 2rem);
  padding-right: 10px;
}
</style>
