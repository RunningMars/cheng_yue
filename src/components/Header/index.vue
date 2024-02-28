<template>

  <div>
    <!--    header-->
    <div class="header clearfix">
      <div class="logo fl">
          <img src="../../assets/logo/rabbit.png" >
      </div>

      <ul class="header nav fr clearfix">

          <li class="fl"> <router-link to="/login" v-show="!$store.state.user.token">登录</router-link></li>
          <li class="fl"> <router-link to="/register" v-show="!$store.state.user.token">注册</router-link></li>
          
          <li class="fl"> <router-link to="/home">首页</router-link></li>
          <li class="fl">
             <router-link to="/chat">
              <span v-if="!$store.state.message.unread_chat_count">私信</span>
                <el-badge 
                v-if="$store.state.message.unread_chat_count" 
                :value="$store.state.message.unread_chat_count" 
                class="item">
                  <span>私信</span>
                </el-badge>
            </router-link>
          </li>
          <li class="fl"> <router-link to="/favorite">已收藏</router-link></li>
          <li class="fl"> <router-link to="/thumbs_up">已点赞</router-link></li>
          <li class="fl"> <router-link to="/personal/edit">编辑信息</router-link></li>
          <li class="fl"> <router-link to="/personal/info">预览信息</router-link></li>
          <li class="fl"> <router-link to="/receive_thumbs_up">我收到的点赞</router-link></li>

          <!-- <li class="fl"> <router-link to="/message">私信对话</router-link></li> -->

          <li class="fl"> <a @click="logout">退出</a> </li>
          <!-- <li class="fl"> <router-link to="/about">关于</router-link></li>
          <li class="fl"> <router-link to="/test">test</router-link></li> -->
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  data(){
    return {
      timer:null
    };
  },
  methods:{
    async logout(){
      
      await this.$store.dispatch('user/userLogout');
      
      if (!this.$store.state.user.token)
      {
        let toPath = this.$route.query.redirect || "/login";
        await this.$store.dispatch('member/clearMemberList');
      
        this.$router.push(toPath);
      }
      
      this.stopTimer();

      this.$store.commit('message/READ_ALL');
     
    },
    startTimer(){
      if (!this.timer){
        this.timer = setInterval(() => {
          this.$store.dispatch("message/getUnreadChatCount");
        }, 10 * 1000)
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
    this.$bus.$on('startQueryUnreadCount',this.startTimer);
    if (this.$store.state.user.token )
    {
      this.$store.dispatch("message/getUnreadChatCount");
      this.startTimer();
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy HeaderComponent')
    this.stopTimer();
    this.$bug.$off('startQueryUnreadCount');
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* #region header start */
.header {
    background-color: #333333;
    overflow: hidden;
    height:51px;
    line-height: 51px;
}
.header .logo img{
    float:left;
    margin-left:20px;
    margin-top:3px;
    margin-bottom:3px;
    border-radius:23px;
    width:45px;
}
.header .nav li{
    margin-top:10px;
    font:18px white;
    font-weight: bold;
    padding-right:15px;
    margin-right:15px;
    float:left;
    border-right:1px solid gray;
}
.header .nav li a{
    color:antiquewhite;
}
.header .nav li:last-child{
    border-right:0;
}
/*#endregion header end */

</style>
