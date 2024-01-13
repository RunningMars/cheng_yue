//存储token
export const setToken = (token) => {
  localStorage.setItem("TOKEN", token);
};
//获取token
export const getToken = () => {
  return localStorage.getItem("TOKEN");
};

//清除本地存储的token
export const removeToken=()=>{
   localStorage.removeItem("TOKEN");
}


//存储userInfo
export const setUserInfo = (userInfo) => {
  localStorage.setItem("USERINFO", userInfo);
};
//获取userInfo
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("USERINFO"));
};

//清除本地存储的userInfo
export const removeUserInfo=()=>{
   localStorage.removeItem("USERINFO");
}
