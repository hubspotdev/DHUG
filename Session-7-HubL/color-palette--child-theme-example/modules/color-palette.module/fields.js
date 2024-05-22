const { setField, showIfBooleanFieldTrue, booleanField, colorField } = require('./fields/fieldHelpers')();

module.exports = fieldOptions => {
  return [
    setField(booleanField, {
      name: "override_dark",
      label: "Override Dark Color",
      default: false
    }),
    setField(colorField, {
      name: "color_dark",
      label: "Dark Color",
      default: {
        color: "#660000"
      },
      visibility: showIfBooleanFieldTrue("override_dark")
    }),
    setField(booleanField, {
      name: "override_medium",
      label: "Override Medium Color",
      default: false
    }),
    setField(colorField, {
      name: "color_medium",
      label: "Medium Color",
      default: {
        color: "#E06666"
      },
      visibility: showIfBooleanFieldTrue("override_medium")
    }),
    setField(booleanField, {
      name: "override_light",
      label: "Override light Color",
      default: false
    }),
    setField(colorField, {
      name: "color_light",
      label: "Light Color",
      default: {
        color: "#F4CCCC"
      },
      visibility: showIfBooleanFieldTrue("override_light")
    })
  ];
};
