var webpack = require('webpack');
const path = require('path');
var envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try{
  envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV + '.env'))
} catch (e){}

module.exports={
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!bootstrap/dist/js/bootstrap.bundle.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor:{
        warnings: false,
        properties: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        unused: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        if_return: true,
        join_vars: true,
        drop_debugger: true,
        negate_iife: true,
        unsafe: true,
        hoist_vars: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        HOST_URL: JSON.stringify(process.env.HOST_URL),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
        MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    })
  ],
  output:{
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve:{
    modules: [
      __dirname,
      "node_modules",
      "./app/components",
      "./app/api"
    ],
    alias:{
      app: 'app',
      applicationStyles: 'app/assets/styles/app.scss',
      myJS: 'app/assets/js',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',
    },
    extensions: ['.js', '.jsx']
  },
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
          presets: ['react', 'env', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }, {
        test: /\.(s)?css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },{
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                path.resolve(__dirname, './node_modules/bootstrap/scss'),
              ]
            }
          }
        ]
      }
    ]
  },
  devtool: process.env.NODE_ENV === 'production' ? undefined : 'eval-source-map'
};
