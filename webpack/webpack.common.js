const HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");

module.exports = {
	entry: "./src/app.ts",
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
		new HtmlWebpackPlugin()
	]
}