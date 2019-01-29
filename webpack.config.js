// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// module.exports = {
//   entry: [`${__dirname}/src/index.js`, `${__dirname}/src/css/styles.css`],
//   output: {
//     path: `${__dirname}/dist/js`,
//     filename: "bundle.js",
//     publicPath: "/js"
//   },

//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["env"]
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           use: [
//             {
//               loader: "css-loader",
//               options: {
//                 url: false
//               }
//             }
//           ]
//         })
//       }
//     ]
//   },
//   devServer: {
//     contentBase: "./dist",
//     historyApiFallback: true
//   },
//   devtool: "source-map",
//   resolve: { extensions: [".js"] },
//   plugins: [
//     new ExtractTextPlugin({
//       filename: "../css/styles.css"
//     })
//   ]
// };
