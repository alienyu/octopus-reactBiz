import routeEnter from './routeEnter.js'

module.exports = [
    Object.assign({
        path: "/",
        breadcrumbName: "首页",
        getComponent: function(location, cb) {
            require.ensure([], function(require) {
                cb(null, require("./layout/components/index.jsx"))
            }, 'index')
        },
        getIndexRoute(nextState, cb) {
            require.ensure([], function(require) {
                cb(null, {
                    breadcrumbName: '欢迎页',
                    component: require("./layout/components/welcome.jsx")
                })
            }, 'welcome')
        },
        getChildRoutes(nextState, cb) {
            require.ensure([], (require) => {
                cb(null, [
                    require("./pageA"),
                    require("./pageB")
                ])
            }, 'body')
        }
    }, routeEnter)
];