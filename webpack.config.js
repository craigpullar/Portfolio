const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

const config = [{
    cache: true,
    devtool: 'cheap-source-map',
    plugins: [
        new LiveReloadPlugin({
            appendScriptTag: true,
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
    context: `${__dirname}/client/js`,
    entry: {
        app: './app.js',
    },
    output: {
        path: `${__dirname}/client/`, // `dist` is the destination
        filename: 'dist/[name].bundle.js',
    },
    module: {
        rules: [

            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                include: `${__dirname}/client/js`,

            },
            {
                test: /\.(sass|scss)$/, // Check for sass or scss file names
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                include: `${__dirname}/client/css`,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
}];

module.exports = config;
