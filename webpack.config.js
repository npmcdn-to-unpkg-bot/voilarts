module.exports = {

    entry: '/src/js/app2.js',

    output: {
        path: __dirname + '/pub/',
        publicPath: 'pub/',
        filename: 'build.js'
    },

    module: {
        loaders: [
        { test: /\.vue$/, loader:'vue' },
        { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
