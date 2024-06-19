<template>
    
    <div class="login_container">
        <div style="margin-top:10%;text-align:center;">
            <h2>登录</h2>
        </div>
        <div class="login_content" >
            
            <el-form ref="form" :model="form" label-width="60px" class="demo-ruleForm">
                    <el-form-item  label="手机号">
                        <el-col :span="18">
                            <el-input  v-model="form.mobile"></el-input>
                        </el-col>
                    </el-form-item>
                
                    <el-form-item label="密码">
                        <el-col :span="18">
                            <el-input  type="password" v-model="form.password" show-password></el-input>
                        </el-col>
                    </el-form-item>

                    <!-- 阿里云付费验证码到期,暂时停用 -->
                    <!-- 验证码组件 -->
                    <!-- <CaptchaA type="login"></CaptchaA> -->

                    <!-- <el-form-item label="同意协议">
                    <el-switch v-model="form.is_agree"></el-switch>
                    </el-form-item> -->

                    <el-form-item label-width="50px" >
                        <el-col :span="20" >
                            <el-button type="primary" id="verify-button" @click="login">登录</el-button>
                            <el-button>取消</el-button>
                        </el-col>
                    </el-form-item>

                    <!-- <el-button type="primary" @click="refresh">Refresh</el-button> -->
            </el-form>

        </div>
    </div> 
</template>

<script>
//import CaptchaA from '../../components/Verify/CaptchaA.vue'
export default {
    data() {
        return {
            captchaPass : true,
            form: {
                mobile: '',
                password: '',
                is_agree: '',
            }
        }
    },
    components: {
        //CaptchaA
    },
    methods: {
        
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

        },
        async login(){

            this.captchaPass = true;

            await this.$store.dispatch("user/userLogin", {...this.form});
            
            if (this.$store.state.user.token)
            {
                let toPath = this.$route.query.redirect || "/home";
                
                this.$router.push(toPath);

                this.$store.dispatch('message/getUnreadChatCount');

                this.$bus.$emit('startQueryUnreadCount');
            }

        },
    },
    mounted(){
        this.$bus.$on('loginCaptchaPass',this.captchaPassed);
        this.$bus.$emit('stopQueryUnreadCount');
    },
    beforeDestroy(){
        this.$bus.$off('loginCaptchaPass');
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
      /* width:1190px; */
      margin: 0 auto;
      /*background-color: lightblue;*/
  }

.login_content {
    margin-top:4%;
}
/* 根据需求调整样式 */
.login_content {
  display: flex; /* 使用 Flexbox 布局 */
  justify-content: center; /* 水平居中 */
}
 
.el-form-item__label {
  text-align: center; /* 标签居中 */
}

.el-form {
    margin: 0 auto;
}
/* .demo-ruleForm {
    margin-left:20%;
    margin-top:20%;
} */
  /* 手机端 */
@media (max-width: 468px) {
   
    /*搜索*/
    .search {
        overflow: hidden;
        padding:4px;
    }
}

</style>