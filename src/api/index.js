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
export const reqRegister = (params) => requests({url:"/auth/register", params , method:"post"});

// 登录
export const reqLogin = (params) => requests({url:"/auth/login", params , method:"post"});

// 刷新
export const reqRefresh = (params) => requests({url:"/auth/refresh", params , method:"post"});

// 登出
export const reqLogout = () => requests({url:"/auth/logout" , method:"post"});

/**
 * Member
 */

// 获取member list
export const reqGetMemberList = (params) => requests({url:"/member/list", params , method:"get"});
 
// 获取member Detail
export const reqGetMemberDetail = (params) => requests({url:"/member/detail", params , method:"get"});

// 更新member Detail
export const reqUpdateMemberDetail = (params) => requests({url:"/member/save", params , method:"post"});

// 更新收藏
export const reqUpdateMyFavorite = (params) => requests({url:"/member/favorite/update", params , method:"post"});

// 更新点赞
export const reqUpdateMythumbsUp = (params) => requests({url:"/member/thumbs_up/update", params , method:"post"});

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
export const reqSendMessage = (params) => requests({url:"/message/chat/send", params , method:"post"});

// 获取未读聊天数量
export const reqGetUnreadChatCount = (params) => requests({url:"/message/chat/unread_count", params , method:"get"});

// 全部已读
export const reqReadAll = (params) => requests({url:"/message/chat/read_all", params , method:"get"});

/**
 * uploadImage
 */
export const reqUploadImage = (params) => requests({url:"/uploadImage" , params ,method:"post"});

/**
 * captcha
 */
export const reqCaptchaVerify = (params) => requests.post("/captcha/verify" , params );

/**
 * 发送短信验证码
 */
export const reqSendSmsValidateCode = (params) => requests.post("/sms/validate/send" , params );
