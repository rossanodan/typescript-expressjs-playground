const nodeExternals = require('webpack-node-externals');

module.exports = {
	mode: process.env.NODE_ENV || 'production',
  target: 'node',
  externals: [
		nodeExternals()
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			}
		]
	},
	devtool: false,
	resolve: {
		extensions: ['.ts', '.js']
	}
};
