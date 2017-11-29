import  Vue  from 'vue'
import Router from 'vue-router'
import page from './components/page.vue'
import nest from './components/nestRouter.vue' 

Vue.use(Router)
const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
        path: '/first', component: First
        },
        {
        path: '/second',component: page,
        children:[{
            path: 'nest',
            component:nest
        }]
        }
    ]
})

