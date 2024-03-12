<template>

  <div class="private_message">


    <!--搜索栏-->
    <div class="search clearfix">
            <!-- <li class="el-icon-back" @click="$router.back()"></li> -->
    <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
    </div>

    <div class="content">
        <div  class="chat_message_list" >
            <div class="target_member_info" @click="routeToViewMemberDetail(chatMessage.to_member.id)">
                    <div style="max-height:40px;max-width:40px;margin:0 auto;">
                      <img class="profile_photo" style="border-radius:20px;" :src="chatMessage.to_member.profile_photo">
                    </div>
                    <h4 style="text-align:center;">{{chatMessage.to_member.nick_name}}</h4>
            </div>

            <div style="margin-top:30px;">
              <div class="chat_msg" v-for="msg in chatMessage.data" :key="msg.id"> 

                <div><span style="display:block;text-align:center;font-size:11px;">{{formatDateTime(msg.created_at)}}</span></div>

                <div class="clearfix"  >

                  <div class="fl" style="width:11%;text-align:center;">
                    <div style="height:40px">
                      <img v-if="!msg.is_send" class="profile_photo"  :src="msg.from_member.profile_photo">
                    </div>
                  </div>

                  <div  class="fl" style="width:78%;" >
                    <div  class="clearfix">
                      <span style="font-size: medium;" :class="msg.is_send ? 'fr' : 'fl' ">{{msg.message}}</span>
                    </div>
                  </div>

                  <div class="fr"  style="width:11%;text-align:center;">
                    <div style="height:40px">
                      <img v-if="msg.is_send" class="profile_photo"  :src="$store.state.user.userInfo.member.profile_photo">
                    </div>
                  </div>

                </div>
               
              </div>


            </div>
          

            <div class="send_message_input" style="margin-top:20px;">
              <!-- <el-input style="width:590px" class="input" v-model="msg" v-on:keyup.enter.native="sendMessage()" ></el-input> -->
              <el-input style="width:78%" class="input" v-model="msg" v-on:keypress.enter.native="sendMessage()" ></el-input>
              <el-button style="margin-left:5px;" type="primary" icon="el-icon-search" size="mini" @click="sendMessage()"  >发送</el-button>
            </div>

        </div>

        <el-pagination class="pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="searchParams.current_page"
          :page-sizes="[1, 5, 10, 20, 30, 50, 100]"
          :page-size="searchParams.per_page"
          :pager-count="11"
          :small="true"
          layout="sizes, prev, pager, next, jumper, total "
          :total="total">
        </el-pagination>

    </div>
</div>

</template>

<script>
import { mapGetters } from "vuex";
import { reqSendMessage } from "@/api";
import moment from 'moment';
export default {
  name: 'ChatMessage',
  // props: {
  //   chat_id: String
  // },
  data(){
    return {
      chat_id:null,
      to_member_id:null,
      // chatMessage:{
      //   data:[],
      //   opposite_member:{
      //     nick_name:''
      //   }
      // },
      msg:"",
      searchParams: {
        //搜索的关键字
        key_word:"",

        //排序:初始状态应该是综合且降序
        order: "1:desc",

        //第几页
        current_page: 1,

        //当前页
        page: 1,

        //每一页展示条数
        per_page: 10,

        //最后一页
        last_page: 1,
      },
      timer:null
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    async getData() {
      this.$store.dispatch("message/getChatMessage", {...this.searchParams,chat_id:this.chat_id,to_member_id:this.to_member_id});
    },

    sendMessage(){
      // this.$store.dispatch("message/sendMessage", {to_member_id:this.msg,to_member_id:this.to_member_id});
      console.log('sendMessage',this.msg);
      console.log('this.to_member_id',this.to_member_id);
      if (this.msg === '')
      {
        return true;
      }
      let response = reqSendMessage({chat_id:this.chat_id,to_member_id:this.to_member_id,message:this.msg});
      console.log('response',response)
      //console.log('status_code',response.status_code)
      //console.log('messae',response.messae)
         
            response.then((result)=>{
                //console.log('result',result);\
                if (result.status_code == 200) {
                  console.log(',this.getData')
                  this.getData();
                  this.msg = '';
                }else{
                  this.$message({
                      message: result.message,
                      type: 'warning',
                      duration: 2000
                  }); 
                }  
            });
    },

    handleSizeChange(val) {
        this.searchParams.per_page = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.current_page;
      this.getData();
    },
  
    formatDateTime(dateTime) {
      return moment(dateTime).format('YYYY-MM-DD HH:mm'); // 将时间按指定格式进行格式化
    },
    routeToViewMemberDetail(memberId){
      this.$router.push('/member/' + memberId);
    },
    startTimer(){
      this.timer = setInterval(()=>{
          this.getData();
      },7 * 1000);

      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除
      // this.$once('hook:beforeDestroy', () => {
      //   clearInterval(this.timer);
      // });     
    },
    stopTimer(){
      clearInterval(this.timmer); 
      this.timer = null;    
    }
  },
  mounted() {
    if (this.$route.query.chat_id)
    {
      this.chat_id = this.$route.query.chat_id
    }
    //console.log('this.$route.query',this.$route.query);
    
    if (this.$route.query.to_member_id)
    {
      this.to_member_id = this.$route.query.to_member_id
    }
    //console.log('this.chat_id',this.chat_id);
    //console.log('this.to_member_id',this.to_member_id);

    if (this.$store.state.user.token){
      this.getData();
    }else{
      this.$router.push("/login");
    }
    this.startTimer();
    this.$store.dispatch("message/getUnreadChatCount");
  },
  // unmounted(){
  //   console.log('unmounted');
  //   this.stopTimer();
  // },
  beforeDestroy() {
    console.log('beforeDestroy ChatMessage');
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  // beforeRouteLeave(to, from, next){
  //   console.log('beforeRouteLeave');
  //   if (this.timer) {
  //     clearInterval(this.timer);
  //     this.timer = null;
  //   }
  //   next();
  // },
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    ...mapGetters('message',["chatMessage"]),
    total(){
      return this.$store.state.message.chat_message.total || 0;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*搜索*/
.search {
    padding:10px;
}
.search .input{
    width:200px;
}

/* 版心 */
.content{
    width:100%;
    margin: 0 auto;
    /*background-color: lightblue;*/
}

.warning-row {
    background: rgb(206, 147, 37);
}

.profile_photo {
  max-width:40px;
  max-height:40px;
  border-radius: 4px;
}
.target_member_info:hover {
  cursor:pointer;
}

.pagination {
  /* margin-left:5%; */
  margin-top:10%;
}


</style>
