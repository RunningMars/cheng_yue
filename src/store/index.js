//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import order from './order'
import user from './user'
import member from './member'

//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules:{
        order:order,
        user:user,
        member:member
    }
})