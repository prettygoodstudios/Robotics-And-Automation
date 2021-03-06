const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: "/dist"
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
            test: /\.js$|.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                "presets": ["@babel/preset-react", "@babel/preset-env"],
                "plugins": ["@babel/plugin-transform-react-jsx", "@babel/plugin-proposal-class-properties"]
              }
        },
        { 
            test: /\.scss$|.css$/, 
            loader: 'style-loader'
        },
        {
            test: /\.scss$|.css$/, 
            use: 'css-loader' 
        },
        { 
            test: /\.scss$/,
            loader: 'sass-loader' 
        },
        { 
          test: /\.otf$/,
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
            outputPath: "./fonts/",
            publicPath: "./dist/fonts/"
          }
      }
    ]
  }
};