const hsGroup = {
  type: 'group',
  children: [],
};

const setGroupParams = (name, params = {}) => {
  return { ...hsGroup, name: name, ...params };
};

const setField = (field, params = {}) => {
  return { ...field, ...params };
};

const showIfBooleanFieldTrue = fieldName => {
  let visibility = {
    controlling_field: fieldName,
    controlling_value_regex: true,
    operator: 'EQUAL',
  };

  return visibility;
};

module.exports = () => {
  return {
    hsGroup,
    setGroupParams,
    setField,
    showIfBooleanFieldTrue,
    booleanField: {
      name: 'boolean',
      label: 'Boolean',
      type: 'boolean',
      default: true,
    },
    productField: {
      name: 'product',
      label: 'Product',
      type: 'product',
    },
    borderField: {
      name: 'border',
      label: 'border',
      type: 'border',
    },
    fontField: {
      name: 'font',
      label: 'Font',
      type: 'font',
    },
    choiceField: {
      name: 'choice_field',
      label: 'Choice field',
      display: 'select',
      choices: [],
      type: 'choice',
      default: null,
    },
    crmObjectField: {
      name: 'crmobject_field',
      label: 'CRM object',
      required: false,
      locked: false,
      object_type: 'CONTACT',
      type: 'crmobject',
    },
    imageField: {
      name: 'image_field',
      label: 'Image',
      show_loading: true,
      type: 'image',
      default: { loading: 'lazy' },
    },
    menuField: {
      label: 'Menu',
      name: 'menu',
      type: 'menu',
    },
    numberField: {
      name: 'number',
      label: 'Number',
      display: 'text',
      type: 'number',
    },
    linkField: {
      name: 'link_field',
      label: 'Link Field',
      type: 'link',
      default: null,
    },
    textField: {
      name: 'text_field',
      label: 'Text field',
      type: 'text',
      default: null,
    },
    alignmentField: {
      name: 'alignment',
      label: 'Alignment',
      type: 'alignment',
    },
    spacingField: {
      name: 'spacing',
      label: 'Spacing',
      type: 'spacing',
    },
    colorField: {
      name: 'color_field',
      label: 'Color field',
      type: 'color',
    },
  };
};
