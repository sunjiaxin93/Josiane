import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件通过export暴露接口，路由中导入组件
//import Login from '../views/Login/Login'
import Teacher from '../views/Teacher/Teacher'
// 导入 vue-router 依赖
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/teacher',   // 跳转路径
            name: 'teacher',    // 名称
            component: Teacher  // 组件
        }
    ]
});
