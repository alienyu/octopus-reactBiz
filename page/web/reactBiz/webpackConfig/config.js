let webpack = require('webpack');
let merge = require("webpack-merge");
let baseConf = require(process.cwd() + "/build/env/base.js");
let env = process.env.NODE_ENV;
let perConf = require(process.cwd() + "/build/config/bizConfig.json");
let platform = perConf.platform;
let projectPath = perConf.projectPath;
let pageName = perConf.pageName;
module.exports = merge(baseConf, {
    entry: {
        'react-vendor': ['react','react-dom', 'antd']
    },
    resolve: {
        alias: {
            "routeEnter": process.cwd() + "/page/" + platform + "/" + projectPath + "/main/" + pageName + "/routes/routeEnter.js",
            "ajax": process.cwd() + "/page/" + platform + "/" + projectPath + "/static/module/ajax.js"
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['react-vendor'],
            minChunks: Infinity
        }),

        new webpack.ProvidePlugin({
            'ajax': 'ajax',
            'intl': 'react-intl-universal'
        })
    ]
});