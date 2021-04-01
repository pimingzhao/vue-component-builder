export default function(h, comp) {
  const { name, props } = comp;
  return h(
    name,
    {
      props: props || null
    },
    comp.text || "完成"
  );
}
