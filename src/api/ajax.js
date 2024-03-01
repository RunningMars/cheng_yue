//对于axios进行二次封装
import axios from "axios"; 

//在当前模块中引入store
import store from '@/store';

//import nprogress from "nprogress";
import { removeToken,removeUserInfo } from '@/utils/token' 
import router from '@/router';

//底下的代码也是创建axios实例
let requests = axios.create({
    //基础路径
    baseURL: "/api",
    //请求不能超过5S
    timeout: 10000,
  });

  //请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
    //现在的问题是config是什么?配置对象
    //可以让进度条开始动
    //if(store.state.detail.uuid_token){
      //请求头添加一个字段(userTempId):和后台老师商量好了
      //config.headers.userTempId = store.state.detail.uuid_token;
    //}
    //需要携带token带给服务器
    if(store.state.user.token){
      config.headers.Authorization = "Bearer " + store.state.user.token;
    }
    //nprogress.start();
    return config;
  }, error => {
    Promise.reject(error);
});
  
//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
    (response) => {
      //进度条结束
      //nprogress.done();
      //相应成功做的事情
      if (response.status == 200) {            

          return response.data
      } else {
          if (response.status === 401){  
              removeToken();
              removeUserInfo();
              router.replace({
                  path: '/login'
              })
          }  
          return response.data
      }
    }
    ,
    (error) => {

      if (error.response && error.response.status === 401){
          removeToken();
          removeUserInfo();
          router.replace({
              path: '/login'
          })
      }

      //console.log('error',error)
      //alert("服务器响应数据失败");
      return error.response;
      // return Promise.reject(error);
    }
);




  //最终需要对外暴露（不对外暴露外面模块没办法使用）
  //这里的代码是暴露一个axios实例
  export default requests;