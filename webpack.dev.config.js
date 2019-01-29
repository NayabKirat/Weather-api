module.exports = {
  entry: [`${__dirname}/src/index.jsx`, "./src/css/styles.css", "./src/css/style.scss"],
  output: {
    path: `${__dirname}/dist/js`,
    filename: "bundle.js",
    publicPath: "/js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["env"],
              plugins: [
                "transform-object-rest-spread",
                "transform-class-properties"
              ]
            }
          }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["react", "env"],
              plugins: [
                "transform-object-rest-spread",
                "transform-class-properties"
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  watch: true,

  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },

  devtool: "source-map",

  resolve: { extensions: [".js", ".jsx"] }
};
