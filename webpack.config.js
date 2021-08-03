const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist/assets/js')
    },
    // mode: 'development',
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },{
            // use: ['file-loader'],
            test: /\.(png|jpg|gif|webp)$/,
            type: 'asset/resource',
            generator: {
                filename: '../images/[name][ext]',
                // filename: 'assets/images/[hash][ext]',
            },
        },{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    }
}