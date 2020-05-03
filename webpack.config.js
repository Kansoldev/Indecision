const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: "Bundled-file.js",
		path: path.join(__dirname, "/dist")
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader'
			}
		]
	},
	devtool: 'cheap-module-eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}