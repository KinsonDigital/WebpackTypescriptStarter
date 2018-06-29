const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "../src/app.ts"),
	output: {
		path: path.resolve(__dirname, "../build"),
		filename: "app.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},	
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../index.html")
		})
	]
}