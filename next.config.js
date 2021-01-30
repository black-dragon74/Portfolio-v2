///
/// This is used to inject jQuery into the `window`
/// This doesn't mess with ReactDOM as the components having their DOM
/// Manipulated by jQuery use `refs` and are also dynamically imported
///

module.exports = {
    webpack: (config, _) => {
        const webpack = require('webpack')

        // noinspection JSUnresolvedFunction
        config.plugins.push(
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        )

        return config
    }
}
