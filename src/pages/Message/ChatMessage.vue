<template>

  <div class="private_message">


    <!--搜索栏-->
    <div class="search clearfix">
            <!-- <li class="el-icon-back" @click="$router.back()"></li> -->
    <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
    </div>

    <div class="content">
        <div  class="chat_message_list" >
            
            <div class="target_member_info" @click="routeToViewMemberDetail(chatMessage.toMember?.id)">
                    <div style="max-height:40px;max-width:40px;margin:0 auto;">
                      <!-- <img class="profile_photo" style="border-radius:20px;" :src="chatMessage.toMember.profilePhoto"> -->
                    </div>
                    <h4 style="text-align:center;">{{chatMessage.toMember?.nickName}}</h4>
            </div>

            <div style="margin-top:30px;">
              <div class="chat_msg" v-for="msg in chatMessage.data?.records" :key="msg.id"> 

                <div><span style="display:block;text-align:center;font-size:11px;">{{formatDateTime(msg.createdAt)}}</span></div>

                <div class="clearfix"  >

                  <div class="fl" style="width:11%;text-align:center;">
                    <div style="height:40px">
                      <img v-if="$store.state.user.userInfo.member.id != msg.fromMemberId" class="profile_photo"  :src="msg.fromMember?.profilePhoto">
                    </div>
                  </div>

                  <div  class="fl" style="width:78%;" >
                    <div  class="clearfix">
                      <span style="font-size: medium;" :class="$store.state.user.userInfo.member.id == msg.fromMemberId ? 'fr' : 'fl' ">{{msg.message}}</span>
                    </div>
                  </div>

                  <div class="fr"  style="width:11%;text-align:center;">
                    <div style="height:40px">
                      <img v-if="$store.state.user.userInfo.member.id == msg.fromMemberId" class="profile_photo"  :src="$store.state.user.userInfo.member.profilePhoto">
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
          :current-page.sync="searchParams.pageNum"
          :page-sizes="[1, 5, 10, 20, 30, 50, 100]"
          :page-size="searchParams.pageSize"
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
  //   chatRoomId: String
  // },
  data(){
    return {
      chatRoomId:null,
      toMemberId:null,
      // chatMessage:{
      //   data:[],
      //   opposite_member:{
      //     nickName:''
      //   }
      // },
      msg:"",
      searchParams: {
        //搜索的关键字
        keyWord:"",

        //排序:初始状态应该是综合且降序
        order: "1:desc",

        //第几页
        pageNum: 1,

        //当前页
        page: 1,

        //每一页展示条数
        pageSize: 10,

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
      this.$store.dispatch("message/getChatMessage", {...this.searchParams, chatRoomId:this.chatRoomId, toMemberId:this.toMemberId});
    },

    sendMessage(){
      // this.$store.dispatch("message/sendMessage", {toMemberId:this.msg,toMemberId:this.toMemberId});
      console.log('sendMessage',this.msg);
      console.log('this.toMemberId',this.toMemberId);
      if (this.msg === '')
      {
        return true;
      }
      let response = reqSendMessage({chatRoomId:this.chatRoomId,toMemberId:this.toMemberId,message:this.msg});
      console.log('response',response)
      //console.log('status_code',response.status_code)
      //console.log('messae',response.messae)
         
            response.then((result)=>{
                //console.log('result',result);\
                if (result.code == 0) {
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
        this.searchParams.pageSize = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.pageNum;
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
      },20 * 1000);

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
    if (this.$route.query.chatRoomId)
    {
      this.chatRoomId = this.$route.query.chatRoomId
    }
    //console.log('this.$route.query',this.$route.query);
    
    if (this.$route.query.toMemberId)
    {
      this.toMemberId = this.$route.query.toMemberId
    }
    //console.log('this.chatRoomId',this.chatRoomId);
    //console.log('this.toMemberId',this.toMemberId);

    if (this.$store.state.user.token){
      this.getData();
    }else{
      this.$router.push("/login");
    }
    this.startTimer();
    this.$store.dispatch("message/getUnreadChatCount");
    // console.log("this.chatMessage",this.chatMessage)
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
      return this.$store.state.message.chatMessage.data.total || 0;
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

.send_message_input {
  margin-left:3%;
}

.pagination {
  margin-left:2%;
}

</style>
