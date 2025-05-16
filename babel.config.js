module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
    };
  };

  //The babel.config.js file configures how your code is transformed before running, and in this case,
  //  it tells Babel to use the expo preset with nativewind for styling and enables support for nativewind's
  //  custom JSX syntax.