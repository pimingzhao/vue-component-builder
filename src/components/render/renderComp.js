const render = (h, comp) => {
  const { name, props, slot } = comp;

  const children = Array.isArray(comp.children)
    ? comp.children.map(child => render(h, child))
    : typeof comp.children === "string"
    ? comp.children
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
