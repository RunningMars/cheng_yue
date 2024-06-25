<template>

  <div class="private_message">

    <!--搜索栏-->
    <div class="search clearfix">
      <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
      <!-- <li class="el-icon-back" @click="$router.back()"></li> -->
        <div class="search_input fr">
            <el-input class="input" v-model="searchParams.keyWord" placeholder="请输入内容" v-on:keypress.enter.native="getData()"  ></el-input>
            <el-button type="primary" icon="el-icon-search" @click="getData()"  >搜索</el-button>
        </div>
    </div>

    <div class="content">
        <div  class="chat_list" style="margin-top:12px;">
            <div >
              <div >
                <h3>我的私信</h3>  
              </div>
              <div style="margin-top:15px;" >
                <span>{{ this.$store.state.message.unreadChatCount ? ' 未读  ' + this.$store.state.message.unreadChatCount  : '' }}</span>
                <el-button style="margin-left:20px;" @click="readAll" v-show="this.$store.state.message.unreadChatCount" type="primary" size="mini" round>全部已读</el-button>
              </div>
            </div>
          <el-table
            :show-header="false"
            :data="chatList"
            class="row_hover"
            style="width: 100%;margin-top:10px;"
            @cell-click="cellClick"
            :row-class-name="tableRowClassName">
              <!-- 我是否已读chat -->
              <!-- <el-table-column
                width="80">
                <template slot-scope="scope">
                  <span v-show="scope.row.chatRoomMeMember[0].isNewToRead">未读</span>
                  <span v-show="!scope.row.chatRoomMeMember[0].isNewToRead">已读</span>
                </template>
              </el-table-column> -->

              <!-- 对方是否已读 -->
              <!-- <el-table-column
                width="120">
                <template slot-scope="scope">
                  <span v-show="scope.row.chatRoomOppositeMember[0].isNewToRead">对方未读</span>
                  <span v-show="!scope.row.chatRoomOppositeMember[0].isNewToRead">对方已读</span>
                </template>
              </el-table-column> -->

              <!-- 对方头像 -->
              <el-table-column
              :cell-class-name="cellStyle"
                width="52px">

                <template slot-scope="scope">
                  <el-badge v-show="scope.row.chatRoomMeMember[0].isNewToRead" is-dot class="item">
                    <div class="demo-type">
                      <div>
                        <el-avatar :src="scope.row.chatRoomOppositeMember[0].member.profilePhoto"></el-avatar>
                      </div>   
                    </div>
                  </el-badge>
                  <div class="demo-type" v-show="!scope.row.chatRoomMeMember[0].isNewToRead" >
                      <div>
                        <el-avatar :src="scope.row.chatRoomOppositeMember[0].member.profilePhoto"></el-avatar>
                      </div>   
                    </div>
                </template>

              </el-table-column>

              <!-- 对方昵称 -->
              <el-table-column
                prop="chatRoomOppositeMember[0].member.nickName"
                width="84">
              </el-table-column>

              <!-- 最新消息 -->
              <el-table-column
              
                prop="chatRoomLastMessage.message">
              </el-table-column>

              <!-- 最新消息发送时间 -->
              <el-table-column
              width="96">

                <template slot-scope="scope">
                  <div class="demo-type">
                    <div>
                      <span>{{ formatDateTime(scope.row.chatRoomLastMessage.createdAt) }}</span>
                    </div>   
                  </div>
                </template>
              </el-table-column>

             
          </el-table>

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
import moment from 'moment';
export default {
  name: 'ChatList',
  props: {
    msg: String
  },
  data(){
    return {
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
    getData() {
      console.log('getData');
      this.$store.dispatch("message/getChatList", this.searchParams);
    },
    handleSizeChange(val) {
        this.searchParams.pageSize = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.pageNum;
      this.getData();
    },
    tableRowClassName({row}) {
      // console.log('row',row);
      // console.log('rowIndex',rowIndex);
        if (row.chatRoomMeMember[0].isNewToRead) {
          return 'warning-row';
        } 
        return '';
    },
    cellStyle({row}) {
        if (row.chatRoomMeMember[0].isNewToRead) {
          return 'item';
        } 
        return '';
    },
    routeToViewMemberDetail(member_id){
      this.$router.push('/member/' + member_id);
      // event.stopPropagation();
    },
    routeToViewChatMessage(row) {
      this.$router.push({ path: "/message", query: {chatRoomId:row.id,toMemberId:row.chatRoomOppositeMember[0].memberId} });
    },
    cellClick(row, column){
        // if (column.property == 'chatRoomOppositeMember[0].member.nickName' || !column.property)
        if ( !column.property)
        {
          this.routeToViewMemberDetail(row.chatRoomOppositeMember[0].memberId);
        }else{
          this.routeToViewChatMessage(row);
        }
        // if (column.label == "交易ID") 
    },
    formatDateTime(dateTime) {
      return moment(dateTime).format('YYYY-MM-DD HH:mm'); // 将时间按指定格式进行格式化
    },
    startTimer(){
      this.timer = setInterval(() => {
        this.getData();
      },20 * 1000);

      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除
      // this.$once('hook:beforeDestroy', () => {
      //   clearInterval(this.timer);
      // });  
    },
    stopTimer(){
      clearInterval(this.timer);
      this.timer = null;
    },
    readAll(){
      this.$store.dispatch("message/readAll");
      this.getData();
    }
  },
  mounted() {
    if (this.$store.state.user.token){
      this.getData();
    }else{
      this.$router.push("/login");
    }

    this.startTimer();
  },
  // unmounted(){
  //   console.log('unmounted');
  //   this.stopTimer();
  // },
  beforeDestroy() {
    console.log('beforeDestroy ChatList');
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
    ...mapGetters('message',["chatList"]),
    total(){
      return this.$store.state.message.result.total || 0;
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.row_hover:hover {
  cursor:pointer;
}
.pagination {
  margin-top:10%;
  margin-left:2%;
}
</style>
