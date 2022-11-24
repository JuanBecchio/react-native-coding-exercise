module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js", ".png"],
          root: ["./"],
          alias: {
            "@assets": "./assets",
            "@components": "./src/components",
            "@navigators": "./src/navigators",
            "@screens": "./src/screens",
            "@typedef": "./src/typedef",
            "@helpers": "./src/helpers",
          },
        },
      ],
    ],
  };
};
