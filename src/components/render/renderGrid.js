export default function(h, vm) {
  const size = vm.$store.getters["setting/gridOption"];
  let width = 0;
  let height = 0;
  if (vm.$refs.builder) {
    // vm.$refs["builder"]
    width = vm.$refs.builder.clientWidth;
    height = vm.$refs.builder.clientHeight;
  }
  // 计算有多少条横线、竖线
  const colum = Math.ceil(height / size);
  const row = Math.ceil(width / size);

  const paintLine = (length, isRow = true) => {
    const arr = [];
    const cls = `${isRow ? "border-r h-full" : "border-b w-full"}`;
    for (let i = 0; i < length; i++) {
      arr.push(
        h("li", {
          class: cls,
          style: isRow ? `width: ${size}px;` : `height: ${size}px;`
        })
      );
    }
    return arr;
  };

  return h(
    "div",
    {
      class: "border absolute h-full overflow-hidden",
      style: "width: calc(100% - 15px)"
    },
    [
      // 横线
      h(
        "ul",
        {
          class: "absolute w-full h-full"
        },
        paintLine(colum, false)
      ),
      // 竖线
      h(
        "ul",
        {
          class: "absolute w-full h-full flex flex-wrap"
        },
        paintLine(row)
      )
    ]
  );
}
