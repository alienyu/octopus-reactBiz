let merge = require("webpack-merge");
let baseConf = require("./env/base.js");
let bizConf;
let envConf;
let env = process.env.NODE_ENV;
let perConf;
if(!env || (env == "local")) {
    perConf = require("./config/localConf.json")
} else {
    perConf = require("./config/releaseConf.json");
}
let platform = perConf.platform;
let projectPath = perConf.projectPath;
let pageName = perConf.pageName || "";
bizConf = process.cwd() + "/page/" + platform + "/" + projectPath + "/webpackConfig/config.js";
if(env) {
    envConf = require("./env/prod.js");
} else {
    envConf = require("./env/dev.js");
}

let webpackConf = merge(baseConf, envConf);
webpackConf = merge(webpackConf, bizConf);

module.exports = webpackConf;