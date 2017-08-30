let merge = require("webpack-merge");
let baseConf = require("./env/base.js");
let envConf;
let env = process.env.NODE_ENV;
if(env) {
    envConf = require("./env/prod.js");
} else {
    envConf = require("./env/dev.js");
}

let webpackConf = merge(baseConf, envConf);

module.exports = webpackConf;