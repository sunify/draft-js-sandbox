var webpack = require('webpack');

module.exports = {
  entry: {
    index: [
      __dirname + '/src/index.js',
      'webpack-dev-server/client?http://localhost:5555',
  		'webpack/hot/dev-server',
  	],
  },
	output: {
  	path: __dirname,
		publicPath: 'http://localhost:5555/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['node_modules', 'src']
	},
	devtool: '#eval',
	module: {
	  loaders: [
			{ test: /\.css$/, loader: 'style!css?modules!postcss' },
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
		],
	},
	postcss: [
  		require('autoprefixer')
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('development')
			}
		}),
	],
};
