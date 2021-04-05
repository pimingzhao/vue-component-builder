import Comp from "./Comp";
import renderOption from "./renderOption";

export default function (h, comp, i, Name) {
  const _this = this;
  return h("div", { class: "comp-wrapper" }, [
    renderOption(h, comp, i, Name, _this),
    h("Dragable", {
      on: {
        "on-drag-start": e => _this.$store.commit("dragable/SET_DRAG_SRC", comp),
        "on-drag-end": e => _this.handleDragEnd(e, Name, comp)
      }
    }, [Comp(h, comp)])
  ]);
}
