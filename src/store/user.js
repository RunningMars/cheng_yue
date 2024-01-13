import { reqRegister,reqLogin,reqLogout,reqRefresh} from "@/api";
import { setToken, getToken,removeToken,setUserInfo,getUserInfo, removeUserInfo} from "@/utils/token";
import { Message } from 'element-ui'
export default {
    namespaced:true,
    state:{
        token : getToken(),
        userInfo : getUserInfo(),
        userRegisterPass : false,
    },
    mutations:{

        USER_LOGIN(state, token) {
            state.token = token;
        },
        USER_REFRESH(state, token) {
            state.token = token;
        },
        USER_INFO(state, userInfo) {
            state.userInfo = userInfo;
        },
        //清除本地数据
        USER_LOGOUT(state){
            //帮仓库中先关用户信息清空
            state.token = '';
            state.userInfo={};
            //本地存储数据清空
            removeToken();
            removeUserInfo();
        },
        USER_REGISTER_PASS(state) {
            state.userRegisterPass = true;
        }
    },
    actions:{
        // 用户注册
        async userRegister({ commit }, params = {}) {
            let response = await reqRegister(params);
           
            if (response.status_code == 200) {
                commit("USER_REGISTER_PASS");

                Message({
                    message: response.message,
                    type: 'success',
                    duration:1000
                });
                return response;
            }else{
                Message({
                    message: response.message,
                    type: 'error',
                    duration:2000
                });
                return false;
            }
        },
        // 用户登录
        async userLogin({ commit }, params = {}) {
            let response = await reqLogin(params);

            if (response.status_code == 200) {
                //用户已经登录成功且获取到token

                commit("USER_LOGIN", response.result.access_token);
                commit("USER_INFO", response.result.user_info);
                
                //持久化存储token
                setToken(response.result.access_token);
                setUserInfo(JSON.stringify(response.result.user_info));

                Message({
                    message: response.message,
                    type: 'success',
                    duration:1000
                });
                return "ok";
            } else {
                Message({
                    message: response.message,
                    type: 'error',
                    duration:2000
                });
                return false;
            }
        },
        // 用户刷新
        async userRefresh({ commit }, params = {}) {
            let response = await reqRefresh(params);

            if (response.status_code == 200) {
                //用户已经登录成功且获取到token

                commit("USER_REFRESH", response.result.access_token);
                //持久化存储token
                setToken(response.result.access_token);
                return "ok";
            } else {
                return false;
            }
        },
        // 用户登出
        async userLogout({ commit }, params = {}) {
            let response = await reqLogout(params);
            commit("USER_LOGOUT");
            if (response.status_code == 200) {
                Message({
                    message: response.message,
                    type: 'success',
                    duration:1000
                });
            } else {
                Message({
                    message: response.message,
                    type: 'error',
                    duration:2000
                });
                return false;
            }
        }
    },
    getters:{
    }
}