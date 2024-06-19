<template>
    <div class="register_container">
        <div style="margin-top:5%;text-align:center;">
            <h2>注册</h2>
        </div>
        <div class="register_content">
           
            
            <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="手机号">
                        <el-col :span="18">
                            <el-input v-model="form.mobile"></el-input>
                        </el-col>
                    </el-form-item>
                
                    <el-form-item label="密码">
                        <el-col :span="18">
                            <el-input type="password" v-model="form.password" show-password></el-input>
                        </el-col>
                    </el-form-item>
            
                    <el-form-item label="确认密码">
                        <el-col :span="18">
                            <el-input type="password" v-model="form.password_confirmation" show-password></el-input>        
                        </el-col>
                    </el-form-item>

                    <el-form-item label="验证码">
                        <el-col :span="18">
                            <div>
                                <el-col :span="10">
                                    <el-input  placeholder="验证码" size="small" v-model="form.code" clearable></el-input>
                                </el-col>
                                <el-button style="margin-left:12px;" :disabled="refresh_wait ? true : false" type="primary" @click="sendSmsValidateCode" size="mini">发送短信验证码</el-button>
                                <div style="width:100px;margin-left:180px;">
                                    <span v-if="refresh_wait">{{ refresh_wait }}s 后重新发送</span>
                                </div>
                            </div>
                        </el-col>
                    </el-form-item>

                    <!-- 阿里云付费验证码到期,暂时停用 -->
                    <!-- 验证码组件 -->
                    <!-- <CaptchaA type="register"></CaptchaA> -->

                    <!-- <el-form-item label="同意协议">
                    <el-switch v-model="form.is_agree"></el-switch>
                    </el-form-item> -->

                    <el-form-item>
                        <el-col :span="18">
                            <el-button type="primary" id="verify-button" @click="registerSubmit">注册</el-button>
                             <el-button>取消</el-button>
                        </el-col>
                    </el-form-item>
            </el-form>
        </div>
    </div> 
</template>

<script>
    //import CaptchaA from '../../components/Verify/CaptchaA.vue';
    import { reqSendSmsValidateCode } from '@/api';

    export default {
        data() {
            return {
                refresh_wait:0,
                timer:null,
                form: {
                    mobile: '',
                    password: '',
                    password_confirmation: '',
                    code: '',
                    is_agree: '',
                }
            }
        },
        components: {
            //CaptchaA
        },
        methods: {
            register() {
                if (!this.form.mobile )
                {
                    this.$message.warning("请填写手机号和密码.");
                }

                if (!this.form.mobile || !this.form.password || !this.form.password_confirmation )
                {
                    this.$message.warning("请填写手机号和密码.");
                }

                if (!this.form.code )
                {
                    this.$message.warning("请填写短信验证码.");
                }
            },
            async registerCaptchaPassed(){
                if (this.form.mobile && this.form.password && this.form.password_confirmation && this.form.code)
                {
                    console.log('registerCaptchaPassed 请求 register!');
                    await this.$store.dispatch("user/userRegister", {...this.form});
                    console.log('this.$store.state.user.userRegisterPass',)
                    if (this.$store.state.user.userRegisterPass){
                        this.$router.push("/login");
                    }
                }else{
                    this.$message.warning("请填写手机号和密码或验证码.");
                }
            },
            async registerSubmit(){
                if (!this.form.mobile )
                {
                    this.$message.warning("请填写手机号和密码.");
                    return;
                }

                if (!this.form.mobile || !this.form.password || !this.form.password_confirmation )
                {
                    this.$message.warning("请填写手机号和密码.");
                    return;
                }

                if (!this.form.code )
                {
                    this.$message.warning("请填写短信验证码.");
                    return;
                }
                if (this.form.mobile && this.form.password && this.form.password_confirmation && this.form.code)
                {
                    console.log('registerCaptchaPassed 请求 register!');
                    await this.$store.dispatch("user/userRegister", {...this.form});
                    console.log('this.$store.state.user.userRegisterPass',)
                    if (this.$store.state.user.userRegisterPass){
                        this.$router.push("/login");
                    }
                }else{
                    this.$message.warning("请填写手机号和密码或验证码.");
                }
            },
            async sendSmsValidateCode(){

                if (this.refresh_wait){
                    return false;
                }
                console.log('请求 sendSmsValidateCode!');

                if ( !this.form.mobile ){
                    this.$message.warning("请填写手机号.");
                    return;
                }
               
                let response = await reqSendSmsValidateCode({mobile:this.form.mobile});

                if (response.status_code == 200) {
        
                    this.$message({
                        message: response.message,
                        type: 'success',
                        duration:1000
                    }); 

                    this.refresh_wait = 60; 

                  

                }else{
                    this.$message({
                        message: response.message,
                        type: 'warning',
                        duration: 2000
                    });          
                }
                return response;
            },
            startTimer(){
                if (!this.timer){
                    this.timer = setInterval(()=>{
                        if (this.refresh_wait){
                            this.refresh_wait -= 1;
                        }
                    },1000);
                }
            },
            stopTimer(){
                if (this.timer){
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }
        },
        mounted(){
            this.$bus.$on('registerCaptchaPass',this.registerCaptchaPassed);
            this.startTimer();
        },
        beforeDestroy(){
            this.$bus.$off('registerCaptchaPass');
            this.stopTimer();
        },
    }
</script>

<style scoped>

/** 版心 */
.register_container{
      /* width:1190px; */
      margin: 0 auto;
      /*background-color: lightblue;*/
  }

.register_content {
    margin-top:5%;
}

/* 根据需求调整样式 */
.register_content {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
}
 
.el-form-item__label {
  text-align: center; /* 标签居中 */
}

.el-form {
    margin: 0 auto;
}

</style>