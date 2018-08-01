/*** webpack.config.js ***/

module.exports = {
    // entry: path.join(__dirname, "src/index.js"),
    entry: {
        './Utils/index': './src/Utils/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js"]
    },
    devServer: {
        port: 3001
    }
};