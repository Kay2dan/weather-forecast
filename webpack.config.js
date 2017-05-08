const path = require( "path" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );

config = {
	entry : {
		app : path.join( __dirname, "app" )
	},
	output : {
		path : path.join( __dirname, "build" ),
		filename : "[name].js"
	},
	module : {
		rules : [
			{
				test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
				use : {
						loader: 'file-loader?name=fonts/[name].[ext]'
					}
			},
			{
				test : /\.css$/,
				// use : [ "style-loader", "css-loader" ]
				// use : {
				// 	loader : "style-loader,
				// }
				use : [
					{
						loader : "style-loader"
					},
					{
						loader : "css-loader"
					}
				],
				include : path.join( __dirname, "css" )
			},
			{
				test : /\.js$/,
				include : path.join( __dirname, "app" ),
				use : {
					loader : "babel-loader",
					options : {
						cacheDirectory : true,
						presets : [ "react", "es2015" ]
					}
				}
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			title : "5 Day Weather Forecast"
		})
	]
};

module.exports = ( env ) => { 
	console.log( "env ==> ", env, " <==" );
	return config;
 };

