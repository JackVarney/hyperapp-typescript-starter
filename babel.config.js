const presets = [
  [
    "@babel/env",
    {
      targets: {
        chrome: "58",
        ie: "11"
      }
    }
  ],
  [
    "@babel/preset-typescript",
    {
      isTSX: true,
      jsxPragma: "h",
      allExtensions: true
    }
  ]
];

module.exports = { presets };
