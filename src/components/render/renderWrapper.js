import Comp from "./Comp";
import renderOption from "./renderOption";

export default function(h, comp, i, Name) {
  const _this = this;
  return h("div", { class: "comp-wrapper" }, [
    renderOption(h, comp, i, Name, _this),
    h("Dragable", [Comp(h, comp)])
  ]);
}
