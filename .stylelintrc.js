module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  syntax: 'less',
  plugins: [
    'stylelint-less',
    'stylelint-order',
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'plugin/declaration-block-no-ignored-properties': true,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'at-rule-no-unknown': null,
    'value-keyword-case': null,
  },
};
