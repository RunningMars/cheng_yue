<template>
  <div>
    <!-- <div id="captcha-button">点击弹出验证码A</div> -->
    <div id="captcha-element"></div>
  </div>
</template>

<script>
// import "../../utils/captcha2.js";
import { reqCaptchaVerify } from '@/api';
export default {
  name: 'CaptchaA',
  props: ["type"],
  data() {
    return {
      captcha: null,
      captchaButton: null,
      verifying:false,
    };
  },
  mounted() {
    // this.captchaButton = document.getElementById('captcha-button');
    // console.log('this.loginButton',this.loginButton)
    // this.captchaButton = this.loginButton;

    window.initAliyunCaptcha({
      SceneId: '12197dyv', // 无痕+滑块 场景ID。通过步骤一添加验证场景后，您可以在验证码场景列表，获取该场景的场景ID
      // SceneId: '1csneyw2', // 滑块 场景ID。通过步骤一添加验证场景后，您可以在验证码场景列表，获取该场景的场景ID

      prefix: '1rgqdq', // 身份标。开通阿里云验证码2.0后，您可以在控制台概览页面的实例基本信息卡片区域，获取身份标
      mode: 'popup', // 验证码模式。popup 表示要集成的验证码模式为弹出式。无需修改 ;embed 表示要集成的验证码模式为嵌入式。无需修改
      // mode: 'embed', // 验证码模式。popup 表示要集成的验证码模式为弹出式。无需修改 ;embed 表示要集成的验证码模式为嵌入式。无需修改
      element: '#captcha-element', // 页面上预留的渲染验证码的元素，与原代码中预留的页面元素保持一致。
      button: '#verify-button', // 触发验证码弹窗的元素。button表示单击登录按钮后，触发captchaVerifyCallback函数。您可以根据实际使用的元素修改element的值
      captchaVerifyCallback: this.captchaVerifyCallback, // 业务请求(带验证码校验)回调函数，无需修改
      onBizResultCallback: this.onBizResultCallback, // 业务请求结果回调函数，无需修改
      getInstance: this.getInstance, // 绑定验证码实例函数，无需修改
      slideStyle: {
        width: 360,
        height: 40,
      }, // 滑块验证码样式，支持自定义宽度和高度，单位为px。其中，width最小值为320 px
      language: 'cn', // 验证码语言类型，支持简体中文（cn）、繁体中文（tw）、英文（en）
    });
  },
  beforeUnmount() {
    this.captchaButton = null;
    // 必须删除相关元素，否则再次mount多次调用 initAliyunCaptcha 会导致多次回调 captchaVerifyCallback
    document.getElementById('aliyunCaptcha-mask')?.remove();
    document.getElementById('aliyunCaptcha-window-popup')?.remove();
  },
  methods: {
    getInstance(instance) {
      this.captcha = instance;
    },
    async captchaVerifyCallback(captchaVerifyParam) {
      // if (this.verifying){
      //     return false;
      // }
      // this.verifying = true;
      // console.log(captchaVerifyParam);
      // 1.向后端发起业务请求，获取验证码验证结果和业务结果
      const result = await reqCaptchaVerify({
        captchaVerifyParam: captchaVerifyParam, // 验证码参数
        bizParam: {} // 业务参数
      });
      return {
        captchaResult: result['result'], // 验证码验证是否通过，boolean类型，必选
        bizResult: true, // 业务验证是否通过，boolean类型，可选；若为无业务验证结果的场景，bizResult可以为空
      }
    },
    // 验证通过后调用
    onBizResultCallback(data) {
      console.log('onBizResultCallback data',data);
      if (this.type && this.type == 'login'){
        this.$bus.$emit('loginCaptchaPass');
      }
      if (this.type && this.type == 'register'){
        this.$bus.$emit('registerCaptchaPass');
      }
    },
  },
};
</script>

<style>
#captcha-button {
  z-index: 99;
  width: 150px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid transparent;
  cursor: pointer;
  background-color: hsla(160, 100%, 37%, 1);
  color: #fff;
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
}
</style>