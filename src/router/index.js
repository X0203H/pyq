import VueRouter from "vue-router";
// 引入路由接管的组件
import Login from "@/components/Login/Login.vue";
import Private from "@/router/views/Private/Private.vue";
import LibrAry from "@/router/views/Library/Library.vue";
// 文章
import ArticleCon from "@/router/views/Private/ArticleCon/ArticleCon.vue";
// 视频
import VideoCon from "@/router/views/Private/VideoCon/VideoCon.vue";
// 海报
import PosterCon from "@/router/views/Private/PosterCon/PosterCon.vue";
import SalesmanWen from "@/router/views/Library/SalesmanWen/SalesmanWen.vue";

export default new VueRouter({
    routes: [
        {path: '/', redirect: '/login'},
        {
            path: '/login',
            component: Login
        },
        // 私有素材库
        {
            path: '/private',
            component: Private,
            children: [
                {
                    name: 'article',
                    path: 'article',
                    component: ArticleCon
                },
                {
                    name: 'video',
                    path: 'video',
                    component: VideoCon
                },
                {
                    name: 'poster',
                    path: 'poster',
                    component: PosterCon
                }
            ]
        },
        // 文库页
        {
            path: '/library',
            component: LibrAry,
            children: [
                {
                    name: "salesmanwen",
                    path: 'salesmanwen',
                    component: SalesmanWen
                }
            ]
        }
    ],
    // 去掉/#/号
    mode: 'history'
})