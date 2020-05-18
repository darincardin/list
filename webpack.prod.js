const path = require('path');
var webpack = require('webpack');



const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = env => {



	return  {
	  resolve: {
		modules: [__dirname, 'node_modules'],
		alias:{
		   '/js': path.resolve(__dirname, 'src/js/'),
		   '/jsx': path.resolve(__dirname, 'src/jsx/'),
		   '$': "jquery",  
		},
		extensions: ['*','.js','.jsx']
	  },
	  
	  plugins: [	
			new CleanWebpackPlugin(),
		    new CopyPlugin({
			    patterns: [ {from: 'src/index.html', to: '' } ],
			}),
			new webpack.ProvidePlugin({    
				$: "jquery",  
				jQuery: "jquery",  
				_: 'underscore'  
			  }) 
	  ],
	  
	  entry: {index: './src/index-prod.js'  },

	  output: {
		path: path.resolve(__dirname, 'dist'), filename: '[name].js'
	  },
	  devServer: {
		contentBase:  require('path').join(__dirname, "src"),
		publicPath: '/',
		historyApiFallback: {
			rewrites: [
				{ from: /^.*$/, to: '/' }
			]
		},
		inline: true,
		port: 7777   ,
	  },
	  module: {
		rules: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test:/\.(s*)css$/, use:['style-loader','css-loader', 'sass-loader']  },			
			{
			    test: /\.(png|jpe?g|gif)$/i, 
				exclude: /node_modules/, 
				use: [{  loader: 'file-loader',  options: {  name: '[name].[ext]'}} ]
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
				loader: 'url-loader'
			},
			
			/*
            {
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: 'jQuery'
                    },
                    {
                        loader: 'expose-loader',
                        options: '$'
                    }
                ]
            }			
			
			*/
			
			
		]
	  }
	}

}


