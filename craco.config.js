const {
  addAfterLoader,
  removeLoaders,
  loaderByName,
  getLoaders,
  throwUnexpectedConfigError,
} = require("@craco/craco");

// const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// const smp = new SpeedMeasurePlugin({ outputFormat: 'humanVerbose' });

const throwError = (message) =>
  throwUnexpectedConfigError({
    packageName: "craco",
    githubRepo: "gsoft-inc/craco",
    message,
    githubIssueQuery: "webpack",
  });

const api = {
  auth: ["/api/auth/code", "/api/auth/register"],
  sms: "/message/send.json",
};
module.exports = {
  devServer: {
    proxy: [
      {
        context: api.sms,
        target: "https://api.turbosms.ua",
        changeOrigin: false,
      },
      {
        context: api.auth,
        target: "http://server.yourpricebooking.com:5000",
      },
    ],
  },

  style: {
    postcss: {
      plugins: [require("autoprefixer")],
    },
  },
  webpack: {
    configure: (webpackConfig, { paths }) => {
      // https://github.com/facebook/create-react-app/issues/10154#issuecomment-886418936
      // tsconfig.json already has rule to check strict imports
      // remove CaseSensitivePathsPlugin (replace with tsconfig setting or eslint setting)
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== "CaseSensitivePathsPlugin"
      );

      // remove IgnorePlugin
      webpackConfig.plugins = webpackConfig.plugins.filter(
          (plugin) => plugin.constructor.name !== "IgnorePlugin"
      );

      // webpackConfig = smp.wrap(webpackConfig);

      const { hasFoundAny, matches } = getLoaders(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (!hasFoundAny) throwError("failed to find babel-loader");

      console.log("removing babel-loader");
      const { hasRemovedAny, removedCount } = removeLoaders(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (!hasRemovedAny) throwError("no babel-loader to remove");
      if (removedCount !== 2)
        throwError("had expected to remove 2 babel loader instances");

      console.log("adding ts-loader");

      const tsLoader = {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: paths.appSrc,
        loader: require.resolve("ts-loader"),
        options: { transpileOnly: true },
      };

      const { isAdded: tsLoaderIsAdded } = addAfterLoader(
        webpackConfig,
        loaderByName("url-loader"),
        tsLoader
      );
      if (!tsLoaderIsAdded) throwError("failed to add ts-loader");
      console.log("added ts-loader");

      console.log("adding non-application JS babel-loader back");
      const { isAdded: babelLoaderIsAdded } = addAfterLoader(
        webpackConfig,
        loaderByName("ts-loader"),
        matches[1].loader // babel-loader
      );
      if (!babelLoaderIsAdded)
        throwError("failed to add back babel-loader for non-application JS");
      console.log("added non-application JS babel-loader back");

      // webpackConfig.plugins = [
      //   new BundleAnalyzerPlugin({
      //     analyzerMode: 'server',
      //     analyzerHost: '127.0.0.1',
      //     analyzerPort: 8888,
      //     openAnalyzer: true, // Open browser after construction
      //     reportFilename: path.resolve(__dirname, `analyzer/index.html`),
      //   }),
      // ];

      return webpackConfig;
    },
  },
  babel: {
    presets: [
      [
        "@babel/preset-react",
        {
          runtime: "automatic",
        },
      ],
      "@babel/preset-typescript",
    ],
    loaderOptions: (babelLoaderOptions, { env, paths }) => {
      return babelLoaderOptions;
    },
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
        },
      },
    ],
  },
};
