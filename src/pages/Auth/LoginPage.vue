<template>
    
    <div class="login_container">

        <div class="login_content">
            
            <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="手机号">
                    <el-input style="width:320px;" v-model="form.mobile"></el-input>
                    </el-form-item>
                
                    <el-form-item label="密码">
                    <el-input style="width:320px;" type="password" v-model="form.password" show-password></el-input>
                    </el-form-item>

                    <!-- 验证码组件 -->
                    <CaptchaA></CaptchaA>

                    <!-- <el-form-item label="同意协议">
                    <el-switch v-model="form.is_agree"></el-switch>
                    </el-form-item> -->

                    <el-form-item>
                    <el-button type="primary" id="login-button">登录</el-button>
                    <el-button>取消</el-button>
                    </el-form-item>

                    <!-- <el-button type="primary" @click="refresh">Refresh</el-button> -->
            </el-form>

        </div>
    </div> 
</template>

<script>
import CaptchaA from '../../components/Verify/CaptchaA.vue'
export default {
    data() {
        return {
            captchaPass : false,
            form: {
                mobile: '',
                password: '',
                is_agree: '',
            }
        }
    },
    components: {
        CaptchaA
    },
    methods: {
        // async login() {
        //     if (!this.captchaPass){
        //         this.$message.warning("请点击进行验证.",1800);
        //         return false;
        //     }
        //     await this.$store.dispatch("user/userLogin", {...this.form});
            
        //     if (this.$store.state.user.token)
        //     {
        //         let toPath = this.$route.query.redirect || "/home";
                
        //         this.$router.push(toPath);

        //         this.$store.dispatch('message/getUnreadChatCount');

        //         this.$bus.$emit('startQueryUnreadCount');
        //     }
        // },
        refresh() {
            console.log('refresh!');
            this.$store.dispatch("user/userRefresh");
        },
        async captchaPassed(){

            this.captchaPass = true;

            await this.$store.dispatch("user/userLogin", {...this.form});
            
            if (this.$store.state.user.token)
            {
                let toPath = this.$route.query.redirect || "/home";
                
                this.$router.push(toPath);

                this.$store.dispatch('message/getUnreadChatCount');

                this.$bus.$emit('startQueryUnreadCount');
            }

        }
    },
    mounted(){
        this.$bus.$on('captchaPass',this.captchaPassed);
    },
    beforeDestroy(){
        this.$bus.$off('captchaPass');
    },
}
</script>

<style scoped>

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

/** 版心 */
.login_container{
      width:1190px;
      margin: 0 auto;
      /*background-color: lightblue;*/
  }

.login_content {
    width:400px;
    margin: 0 auto;
    text-align: center;
    margin-top:30px;
}

</style>