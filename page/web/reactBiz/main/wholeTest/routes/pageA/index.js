import routeEnter from 'routeEnter'

module.exports = Object.assign({
    path: "pageA",
    breadcrumbName: "页面",
    getComponent(nextState, callback) {
        require.ensure([], function (require) {
            callback(null,require('./components/pageA.jsx'))
        }, 'pageA')
    },
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                {
                    path: 'subPagea',
                    breadcrumbName:'subPagea',
                    getComponent(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./components/subPagea.jsx'))
                        },'pageA_subPagea')
                    }
                },
                {
                    path: 'subPageb',
                    breadcrumbName:'subPageb',
                    getComponent(nextState, cb) {
                        require.ensure([], (require) => {
                            cb(null, require('./components/subPageb.jsx'))
                        },'pageA_subPageb')
                    }
                }
            ])
        })
    }
}, routeEnter);
