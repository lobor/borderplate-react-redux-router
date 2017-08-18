var path = require('path')
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const __DEV__ = process.env.NODE_ENV === 'development'

var config = {
	entry: {
		main: [
			"./src/main.js"
		]
	},
	devtool: __DEV__ ? 'source-map' : false,
	output: {
    filename: "./[name].js",
    path: path.join(__dirname, '..', "dist"),
  },
	module: {
	  rules: [
			{
			  test: /\.html$/,
			  loader: "html-loader",
			},
	    {
	      test: /\.js$/,
	      exclude: /.*node_modules((?!router-by-redux).)*$/,
				use: [
					{ loader: 'react-hot-loader' },
					{
						loader: 'babel-loader',
						query: {
							presets: ['es2015', 'react', 'stage-2']
						}
					}
				]
	    }
	  ]
	},
	plugins: [
		new HtmlWebpackPlugin({
		  template: path.join(__dirname, '..', 'src', "index.html"),
		  inject: true,
		  minify: {
		    collapseWhitespace: true,
		  },
		})
	]
};

if (__DEV__) {
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	config.entry.main.push(`webpack-hot-middleware/client.js?path=__webpack_hmr`);
} else {
	config.plugins.push(
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({
		  'process.env': {
		    NODE_ENV: JSON.stringify('production')
		  }
		})
	);
}

module.exports = config;