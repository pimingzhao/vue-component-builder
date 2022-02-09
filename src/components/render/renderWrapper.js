import renderComp from "./renderComp";
import renderOption from "./renderOption";

export default function(h, comp, i, Name) {
  const _this = this;
  return h("div", { class: "comp-wrapper" }, [
    renderOption(h, comp, i, Name, _this),
    h(
      "Dragable",
      {
        on: {
          "on-drag-start": e =>
            _this.$store.commit("component/SET_DRAG_SRC", comp),
          "on-drag-end": e => _this.handleDragEnd(e, Name, comp)
        }
      },
      [renderComp(h, comp)]
    )
  ]);
}
