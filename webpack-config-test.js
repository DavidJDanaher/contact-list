const nodeExternals = require('webpack-node-externals');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'null-loader' 
            }
        ]
    }
};
