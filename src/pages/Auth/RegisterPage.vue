<template>
    <div class="register_container">
        <div class="register_content">
            <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="手机号">
                    <el-input style="width:320px;" v-model="form.mobile"></el-input>
                    </el-form-item>
                
                    <el-form-item label="密码">
                    <el-input style="width:320px;" type="password" v-model="form.password" show-password></el-input>
                    </el-form-item>
            
                    <el-form-item label="确认密码">
                    <el-input style="width:320px;" type="password" v-model="form.password_confirmation" show-password></el-input>
                    </el-form-item>

                    <!-- 验证码组件 -->
                    <CaptchaA type="register"></CaptchaA>

                    <!-- <el-form-item label="同意协议">
                    <el-switch v-model="form.is_agree"></el-switch>
                    </el-form-item> -->

                    <el-form-item>
                    <el-button type="primary" id="verify-button" @click="register">注册</el-button>
                    <el-button>取消</el-button>
                    </el-form-item>
            </el-form>
        </div>
    </div> 
</template>

<script>
    import CaptchaA from '../../components/Verify/CaptchaA.vue'
    export default {
        data() {
            return {
                form: {
                    mobile: '',
                    password: '',
                    password_confirmation: '',
                    is_agree: '',
                }
            }
        },
        components: {
            CaptchaA
        },
        methods: {
            register() {
                if (!this.form.mobile || !this.form.password || !this.form.password_confirmation )
                {
                    this.$message.warning("请填写手机号和密码.");
                }
                return true;
            },
            async registerCaptchaPassed(){
                if (this.form.mobile && this.form.password && this.form.password_confirmation )
                {
                    console.log('请求 register!');
                    await this.$store.dispatch("user/userRegister", {...this.form});

                    if (this.$store.state.user.userRegisterPass){
                        this.$router.push("/login");
                    }
                }else{
                    this.$message.warning("请填写手机号和密码.");
                }
            }
        },
        mounted(){
            this.$bus.$on('registerCaptchaPass',this.registerCaptchaPassed);
        },
        beforeDestroy(){
            this.$bus.$off('registerCaptchaPass');
        },
    }
</script>

<style scoped>

/** 版心 */
.register_container{
      width:1190px;
      margin: 0 auto;
      /*background-color: lightblue;*/
  }

.register_content {
    width:400px;
    margin: 0 auto;
    text-align: center;
    margin-top:30px;
}

</style>