export default function(h, comp, i, Name, vm) {
  const options = vm.$store.state.template.compOption[comp.name] || [];
  return h(
    "ul",
    {
      class: "comp-option"
    },
    options.map(option => {
      let child;
      if (typeof option.default === "boolean") {
        child = h("i-switch", {
          props: {
            value: comp.props[option.name] || option.default
          },
          on: {
            input: val => {
              vm.$store.commit("template/SET_PROPS", {
                name: Name,
                i,
                key: option.name,
                val
              });
            }
          }
        });
      } else {
        child = h(
          "RadioGroup",
          {
            props: {
              value: comp.props[option.name] || option.default
            },
            on: {
              input: val => {
                vm.$store.commit("template/SET_PROPS", {
                  name: Name,
                  i,
                  key: option.name,
                  val
                });
              }
            }
          },
          option.data.map(item =>
            h(
              "Radio",
              {
                props: {
                  label: item
                }
              },
              [item]
            )
          )
        );
      }
      return h(
        "li",
        {
          class: "comp-option-item"
        },
        [
          h(
            "label",
            {
              class: "comp-option-label"
            },
            option.name + "："
          ),
          child
        ]
      );
    })
  );
}
