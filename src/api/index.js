//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";


//切记:当前函数执行需要把服务器返回结果返回


//获取搜索模块数据 地址:/api/list  请求方式:post  参数:需要带参数
//当前这个函数需不需要接受外部传递参数
//当前这个接口（获取搜索模块的数据），给服务器传递一个默认参数【至少是一个空对象】

/**
 * Auth
 */
// 注册
export const reqRegister = (data) => requests({url:"/user/register", data , method:"post"});

// 登录
export const reqLogin = (data) => requests({url:"/user/login", data , method:"post"});

// 刷新
export const reqRefresh = (data) => requests({url:"/user/refresh", data , method:"post"});

// 登出
export const reqLogout = () => requests({url:"/user/logout" , method:"post"});

/**
 * Member
 */

// 获取member list
export const reqGetMemberList = (params) => requests({url:"/member/list", params , method:"get"});
 
// 获取member Detail
export const reqGetMemberDetail = (params) => requests({url:"/member/detail", params , method:"get"});

// 更新member Detail
export const reqUpdateMemberDetail = (data) => requests({url:"/member/save", data , method:"post"});

// 更新收藏
export const reqUpdateMyFavorite = (data) => requests({url:"/member/favorite/update", data , method:"post"});

// 更新点赞
export const reqUpdateMythumbsUp = (data) => requests({url:"/member/thumbs_up/update", data , method:"post"});

// 获取被点赞列表
export const reqReceiveMythumbsUpList = (params) => requests({url:"/member/thumbs_up/list", params , method:"get"});


/**
 * Message
 */

// 获取聊天列表 chat list
export const reqGetChatList = (params) => requests({url:"/message/chat/list", params , method:"get"});
 
// 获取聊天记录 chat message
export const reqGetChatMessage = (params) => requests({url:"/message/chat/message", params , method:"get"});

// 发送消息 send message
export const reqSendMessage = (data) => requests({url:"/message/chat/send", data , method:"post"});

// 获取未读聊天数量
export const reqGetUnreadChatCount = (params) => requests({url:"/message/chat/unread_count", params , method:"get"});

// 全部已读
export const reqReadAll = (params) => requests({url:"/message/chat/read_all", params , method:"get"});

/**
 * uploadImage
 */
export const reqUploadImage = (data) => requests({url:"/uploadImage" , data ,method:"post"});

/**
 * captcha
 */
export const reqCaptchaVerify = (data) => requests.post("/captcha/verify" , data );

/**
 * 发送短信验证码
 */
export const reqSendSmsValidateCode = (data) => requests.post("/sms/validate/send" , data );
