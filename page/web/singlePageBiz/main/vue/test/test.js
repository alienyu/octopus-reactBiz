require("./test.less")
import Vue from 'vue'
//import Element from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import Test from './test.vue'

//Vue.use(Element);
new Vue({
    el: "#app",
    render: h => h(Test)
});