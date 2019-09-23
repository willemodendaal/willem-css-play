const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss/,
                use: [
                    // Adds to CSS output as <style> tags to html output.
                    "style-loader",
                    //Translates CSS into CommonJS (allows `import`)
                    "css-loader",
                    //Compiles Sass to CSS.
                    "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:9002
    },
    plugins: [
        //Handles index.html for us. Auto-loads entrypoint js into html.
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};