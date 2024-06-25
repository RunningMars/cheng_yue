import { reqGetChatList,reqGetChatMessage,reqGetUnreadChatCount,reqReadAll } from "@/api";
import { Message } from 'element-ui';

export default {
    namespaced:true,
    state:{
        //chat列表
        result:[], 
        //聊天消息记录
        chatMessage:{
            data:{
                records:[]
            },
            toMember:{}
        },
        unreadChatCount: null
    },
    mutations:{
        GET_CHAT_LIST(state, result) {
            state.result = result;
        },
       
        GET_CHAT_MESSAGE(state, result) {
            state.chatMessage = result;
        },

        CLEAR_CHAT_LIST(state) {
            state.result = [];
        },

        CLEAR_CHAT_MEASSAGE(state) {
            state.chatMessage = {};
        },

        GET_UNREAD_CHAT_COUNT(state,result) {
            state.unreadChatCount = result;
        },

        READ_ALL(state) {
            state.unreadChatCount = null;
        },
    },
    actions:{
        // 获取Chat Room 列表
        async getChatList({ commit }, params = {}) {
            let response = await reqGetChatList(params);
           
            if (response.code == 0) {
                commit("GET_CHAT_LIST", response.result);
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

        // 获取Chat Message 
        async getChatMessage({ commit }, params = {}) {
            let response = await reqGetChatMessage(params);
            if (response.code == 0) {
                console.log("response.result",response.result)
                commit("GET_CHAT_MESSAGE", response.result);
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
        // 获取未读聊天数量
        async getUnreadChatCount({ commit }, params = {}) {
            let response = await reqGetUnreadChatCount(params);
            if (response ){
                if (response.code == 0) {
                    commit("GET_UNREAD_CHAT_COUNT", response.result.unreadChatCount);
                }else{
                    if (response.message){
                        Message({
                            message: response.message,
                            type: 'warning',
                            duration:2000
                        });  
                    } 
                }
            }
            
            return response
        },
        // 全部已读
        async readAll({ commit }, params = {}) {
            let response = await reqReadAll(params);
        
            if (response.code == 0) {
                commit("READ_ALL");
            }else{
                Message({
                    message: response.message,
                    type: 'warning',
                    duration:2000
                });          
            }
            return response
        },

        // 清空 chat list
        async clearChatList({ commit }) {
            commit("CLEAR_CHAT_LIST"); 
        },

        // 清空 chat list
        async clearChatMessage({ commit }) {
            commit("CLEAR_CHAT_MEASSAGE"); 
        }
    },
    getters:{
        chatList(state){
            //state.result.data 如果服务器数据回来了，没问题是一个数组
            //假如网络不给力|没有网state.result.data应该返回的是undefined
            //计算新的属性的属性值至少给人家来一个数组
            return state.result.records || [];
        },
        chatMessage(state){
            return state.chatMessage || {
                data:{
                    records:[]
                },
                toMember:{}
            };
        }
    }
}