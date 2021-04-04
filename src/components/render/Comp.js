export default function(h, comp) {
  const { name, props, slot } = comp;
  return h(
    name,
    {
      props: props || null
    },
    slot || ""
  );
}
