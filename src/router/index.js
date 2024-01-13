// 这个文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'

import MemberList from '../pages/Home/MemberList/MemberList.vue'
import AboutPage from '../pages/About/AboutPage'
import MemberDetail from '../pages/Home/MemberDetail/MemberDetail.vue'
import MemberEdit from '../pages/Home/MemberDetail/MemberEdit.vue'
import LoginPage from '../pages/Auth/LoginPage.vue'
import RegisterPage from '../pages/Auth/RegisterPage.vue'
import TestPage from '../pages/Test/TestPage.vue'

//*******以下为添加内容*******
const RouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}
const RouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}
//******以上为添加内容*********


const router = new VueRouter({
    routes: [
       
        {
            path: '/login',
            component: LoginPage,
            meta:{title:'登录'}
        },
        {
            path: '/register',
            component: RegisterPage,
            meta:{title:'注册'}
        },


        {
            path: '/home',
            component: MemberList,
            meta:{title:'广场'}
        },
        {
            path: '/personal/info',
            component: MemberDetail,
            meta:{title:'我的预览'}
        },
        
        {
            path: '/personal/edit',
            component: MemberEdit,
            meta:{title:'编辑个人资料'}
        },




        {
            path: '/member/:id',
            component: MemberDetail,
            meta:{title:'会员介绍'},
            props($route) {
                return {
                  member_id: $route.params.id,
                }
            }
        },
        {
            path: 'member/edit/:id',
            component: MemberEdit,
            meta:{title:'编辑会员资料'},
            props($route) {
                return {
                  member_id: $route.params.id,
                }
            }
        },


        {
            path: '/about',
            component: AboutPage,
            meta:{ title: '关于' }
        },
        {
            path: '/test',
            component: TestPage,
            meta:{title:'Test'}
        },
    ]
})

export default router



// const routerHistory = createWebHistory()

// 创建并暴露一个路由器
// const routes = [
//         {
//             path: '/home',
//             component: HomePage,
//             meta:{title:'主页'}
//         },
//         {
//             path: '/about',
//             component: AboutPage,
//             meta:{ title: '关于' }
//         }
//     ]
//
//
// export default new createRouter({
//     history:routerHistory,
//     routes
// })



//
// const router = new VueRouter({
//     routes: [
//         {
//             path: '/home',
//             component: Home,
//             meta:{title:'主页'},
//             children: [
//                 {
//                     path: 'news',
//                     component: News,
//                     meta:{isAuth:true,title:'新闻'}
//                 },
//                 {
//                     path: 'message',
//                     name: 'mess',
//                     component: Message,
//                     meta:{isAuth:true,title:'消息'},
//                     children: [
//                         {
//                             path: 'detail/:id/:title',
//                             name: 'xiangqing',
//                             component: Detail,
//                             meta:{isAuth:true,title:'详情'},
//                             props($route) {
//                                 return {
//                                     id: $route.query.id,
//                                     title:$route.query.title,
//                                     a: 1,
//                                     b: 'hello'
//                                 }
//                             }
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             path: '/about',
//             component: About,
//             meta:{ title: '关于' }
//         }
//     ]
// })


