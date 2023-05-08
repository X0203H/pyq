import Vue from 'vue'
import App from './App.vue'
// 引入element-ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue路由
import VueRouter from "vue-router";
import router from "@/router";
// 引入vuex
import store from "@/Vuex/store";
// 引入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
// require styles 富文本编辑器对应的样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

// 注册富文本编辑器组件为全局组件
Vue.use(VueQuillEditor)

// 应用路由和element-ui组件
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

const vm = new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
console.log(vm)
