module.exports = {
  // Starting point of the React App (the root)
  entry: "./index.js",

  // Where it should output the bundled files
  // path property defines where to output the target filename
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },

  // module defines which transformations to make on the code base
  module: {
    loaders: [
      // Matches all JS files, excludes the node modules directory
      // and runs the babel-loader on the targeted JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot-loader", "babel-loader"]
      },
      // Watches all CSS files and runs the loaders against them
      // The "!" facilitates the chaining/piping of loaders
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
