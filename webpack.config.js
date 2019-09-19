const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    watch: true,
    entry: './webpack.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js',
        publicPath: '.',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader']
                    })
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|png)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets',
                    },
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: '/stylesheets/final.css', disable: false, allChunks: true }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /final.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
          })
    ]
};