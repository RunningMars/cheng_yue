import { reqGetMemberList,reqGetMemberDetail,reqReceiveMythumbsUpList } from "@/api";
import { Message } from 'element-ui';

export default {
    namespaced:true,
    state:{
        //member 列表
        result:[], 

        //member详情
        member:{
            memberRequest:{}
        },

        name:'rdgtest',
        
        //收到的点赞列表
        thumbs_up_result:[], 
    },
    mutations:{
        GET_MEMBER_LIST(state, result) {
            state.result = result;
        },
        GET_RECEIVE_THUMBS_UP_LIST(state, result) {
            state.thumbs_up_result = result;
        },
        CLEAR_GET_MEMBER_LIST(state) {
            state.result = [];
        },
        GET_MEMBER_DETAIL(state, result) {
            state.member = result;
        },
    },
    actions:{
        // 获取member列表
        async getMemberList({ commit }, params = {}) {
            let response = await reqGetMemberList(params);
           
            if (response.code == 0) {
                commit("GET_MEMBER_LIST", response.result);
            }else{
                if (response.message){
                    Message({
                        message: response.message,
                        type: 'warning',
                        duration:2000
                    }); 
                }
            }
            return response
        },
        // 获取被点赞列表
        async getReceiveThumbsUpList({ commit }, params = {}) {
            let response = await reqReceiveMythumbsUpList(params);
          
            if (response.code == 0) {
                commit("GET_RECEIVE_THUMBS_UP_LIST", response.result);
            }else{
                if (response.message){
                    Message({
                        message: response.message,
                        type: 'warning',
                        duration:2000
                    });  
                }
                        
            }
            return response
        },
        // 获取member info
        async getMemberDetail({ commit }, params = {}) {
            let response = await reqGetMemberDetail(params);
            if (response.code == 0) {
                commit("GET_MEMBER_DETAIL", response.result);
            }else{
                if (response.message){
                    Message({
                        message: response.message,
                        type: 'warning',
                        duration:2000
                    });
                }
                
            }
            return response
        },

        // 清空 member list
        async clearMemberList({ commit }) {
            commit("CLEAR_GET_MEMBER_LIST"); 
        }
    },
    getters:{
        memberList(state){
            //state.result.data 如果服务器数据回来了，没问题是一个数组
            //假如网络不给力|没有网state.result.data应该返回的是undefined
            //计算新的属性的属性值至少给人家来一个数组
            return state.result.records || [];
        },
        member(state){
            return state.member || {};
        },
        receiveThumbsUpList(state){
            return state.thumbs_up_result.data || [];
        }
    }
}