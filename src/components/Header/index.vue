<template>

  <div>
    <!--    header-->
    <div class="header clearfix">
      <div class="logo fl" style="width:10%;">
          <img src="../../assets/logo/rabbit.png" >
          <router-link to="/home"><span style="margin-left:12px;color:antiquewhite;">缘来里</span></router-link>
      </div>

      <ul id="nav_bar_normal" style="width:90%;vertical-align:middle;" class="header nav fr clearfix">

          <li class="fl" v-show="!$store.state.user.token" > <router-link to="/login" >登录</router-link></li>
          <li class="fl" v-show="!$store.state.user.token" > <router-link to="/register" >注册</router-link></li>
          
          <li class="fl"> <router-link to="/home">首页</router-link></li>
          <li class="fl"> <router-link to="/favorite">已收藏</router-link></li>
          <li class="fl"> <router-link to="/thumbs_up">已点赞</router-link></li>

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

          <li class="fl"> <router-link to="/personal/edit">编辑信息</router-link></li>
          <li class="fl"> <router-link to="/personal/info">预览信息</router-link></li>
          <li class="fl"> <router-link to="/receive_thumbs_up">我收到的点赞</router-link></li>

          <li class="fl"> <a @click="logout">退出</a> </li>
          <!-- <li class="fl"> <router-link to="/about">关于</router-link></li>
          <li class="fl"> <router-link to="/test">test</router-link></li> -->
      </ul>

      <div id="nav_bar_collapsed" style="font-size:18px;font-weight:bold">
        
        <el-menu 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#454545"
        text-color="#f9e8d1"
        >
          <div class="logo fl">
            <img src="../../assets/logo/rabbit.png" >
            <router-link to="/home"> <span style="margin-left:12px;color:antiquewhite;">缘来里</span></router-link>
          </div>

          <el-submenu index="2" style="margin-left:12%;">
            <template slot="title" ><span style="color:antiquewhite;font-size:18px;font-weight:bold;">菜单栏</span></template>

            <router-link to="/login"><el-menu-item index="2-1" v-show="!$store.state.user.token"><span style="color:antiquewhite">登录</span></el-menu-item></router-link>
            <router-link to="/register"><el-menu-item index="2-2" v-show="!$store.state.user.token"><span style="color:antiquewhite">注册</span></el-menu-item></router-link>
            <router-link to="/home"><el-menu-item index="2-3"><span  style="color:antiquewhite">首页</span></el-menu-item></router-link>
            <router-link to="/favorite"><el-menu-item index="2-4"><span  style="color:antiquewhite">已收藏</span></el-menu-item></router-link>
            <router-link to="/thumbs_up"><el-menu-item index="2-5"><span  style="color:antiquewhite">已点赞</span></el-menu-item></router-link>
            <router-link to="/chat"> 
              <el-menu-item index="2-6">
              
                <span v-if="!$store.state.message.unread_chat_count" style="color:antiquewhite">私信</span>

                <el-badge
                  v-if="$store.state.message.unread_chat_count"
                  :value="$store.state.message.unread_chat_count"
                  class="item">
                  <span style="color:antiquewhite">私信</span>
                </el-badge>
              
              </el-menu-item>
            </router-link>
            <router-link to="/personal/edit"><el-menu-item index="2-7"><span style="color:antiquewhite">编辑信息</span></el-menu-item></router-link>
            <router-link to="/personal/info"><el-menu-item index="2-8"><span style="color:antiquewhite">预览信息</span></el-menu-item></router-link>
            <router-link to="/receive_thumbs_up"><el-menu-item index="2-9"><span style="color:antiquewhite">我收到的点赞</span></el-menu-item></router-link>
            <el-menu-item @click="logout" index="2-10"><span style="color:antiquewhite">退出</span></el-menu-item>
          </el-submenu>
        </el-menu>

      </div>

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
        }, 30 * 1000)
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
    this.$bus.$on('stopQueryUnreadCount',this.stopTimer);
    if (this.$store.state.user.token )
    {
      this.$store.dispatch("message/getUnreadChatCount");
      this.startTimer();
    }
  },
  beforeDestroy() {
    console.log('beforeDestroy HeaderComponent')
    this.stopTimer();
    this.$bus.$off('startQueryUnreadCount');
    this.$bus.$off('stopQueryUnreadCount');
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 默认情况下的导航栏样式 */
#nav_bar_normal {
    width:100%;
    display: flex; /* 水平布局 */
    /* 靠近主轴终点,居右 */
    justify-content:flex-end;
    align-items:center;
    /* flex-direction:row-reverse; */
}
#nav_bar_collapsed {
    width:100%;
    display: none; /* 水平布局 */

}
 
/* 视口变小后的导航栏样式（折叠）*/
@media (max-width: 789px) {
    #nav_bar_normal {
        display: none; /* 隐藏导航栏 */
    }
    #nav_bar_collapsed {
        display: contents; /* 显示导航栏 */
    }
}
/* #region header start */
.header {
    background-color: #333333;
    overflow: hidden;
    height:51px;
    line-height: 51px;
}
.header .logo img{
    float:left;
    margin-left:12px;
    margin-top:3px;
    margin-bottom:3px;
    border-radius:23px;
    width:45px;
}
.header .nav {
  text-align:center;
  vertical-align:middle;
}
.header .nav li{
    margin-top:6px;
    height:30px;
    font:18px white;
    font-weight: bold;
    padding-right:12px;
    margin-right:6px;
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
