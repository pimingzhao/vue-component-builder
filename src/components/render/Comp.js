const render = (h, comp) => {
  const { name, props, slot } = comp;
  const hasChld = Array.isArray(comp.children);
  const children = hasChld
    ? comp.children.map(child => render(h, child))
    : slot || "";
  return h(
    name,
    {
      props: props || null
    },
    children
  );
};

export default render;
