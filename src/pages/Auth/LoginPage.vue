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

                    <el-form-item label="同意协议">
                    <el-switch v-model="form.is_agree"></el-switch>
                    </el-form-item>

                    <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button>取消</el-button>
                    </el-form-item>


                    <el-button type="primary" @click="refresh">Refresh</el-button>
            </el-form>

        </div>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    mobile: '',
                    password: '',
                    is_agree: '',
                }
            }
        },
        methods: {
            async login() {
                await this.$store.dispatch("user/userLogin", {...this.form});
                
                if (this.$store.state.user.token)
                {
                    let toPath = this.$route.query.redirect || "/home";
                
                    this.$router.push(toPath);
                }

            },

            refresh() {
                console.log('refresh!');

                this.$store.dispatch("user/userRefresh");
                
            }
        }
    }
</script>

<style scoped>

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