<template>

  <div class="private_message">

    <!--搜索栏-->
    <div class="search clearfix">
      <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
      <!-- <li class="el-icon-back" @click="$router.back()"></li> -->
        <div class="search_input fr">
            <el-input class="input" v-model="searchParams.key_word" placeholder="请输入内容" v-on:keyup.enter.native="getData()" ></el-input>
            <el-button type="primary" icon="el-icon-search" @click="getData()"  >搜索</el-button>
        </div>
    </div>

    <div class="content">
        <div  class="chat_list">
            <div >
              <div >
                <h3>我的私信</h3>  
              </div>
              <div style="margin-top:15px;" >
                <span>{{ this.$store.state.message.unread_chat_count ? ' 未读 ' + this.$store.state.message.unread_chat_count  : '' }}</span>
                <el-button style="margin-left:20px;" @click="readAll" v-show="this.$store.state.message.unread_chat_count" type="info" size="mini" round>全部已读</el-button>
              </div>
            </div>
          <el-table
            :data="chatList"
            class="row_hover"
            style="width: 100%;"
            @cell-click="cellClick"
            :row-class-name="tableRowClassName">
              <!-- 我是否已读chat -->
              <!-- <el-table-column
                width="80">
                <template slot-scope="scope">
                  <span v-show="scope.row.chat_room_member_me[0].is_new_to_read">未读</span>
                  <span v-show="!scope.row.chat_room_member_me[0].is_new_to_read">已读</span>
                </template>
              </el-table-column> -->

              <!-- 对方是否已读 -->
              <!-- <el-table-column
                width="120">
                <template slot-scope="scope">
                  <span v-show="scope.row.chat_room_member_opposite[0].is_new_to_read">对方未读</span>
                  <span v-show="!scope.row.chat_room_member_opposite[0].is_new_to_read">对方已读</span>
                </template>
              </el-table-column> -->

              <!-- 对方头像 -->
              <el-table-column
              :cell-class-name="cellStyle"
                width="56px">

                <template slot-scope="scope">
                  <el-badge v-show="scope.row.chat_room_member_me[0].is_new_to_read" is-dot class="item">
                    <div class="demo-type">
                      <div>
                        <el-avatar :src="scope.row.chat_room_member_opposite[0].member.profile_photo"></el-avatar>
                      </div>   
                    </div>
                  </el-badge>
                  <div class="demo-type" v-show="!scope.row.chat_room_member_me[0].is_new_to_read" >
                      <div>
                        <el-avatar :src="scope.row.chat_room_member_opposite[0].member.profile_photo"></el-avatar>
                      </div>   
                    </div>
                </template>

              </el-table-column>

              <!-- 对方昵称 -->
              <el-table-column
                prop="chat_room_member_opposite[0].member.nick_name"
                width="130">
              </el-table-column>

              <!-- 最新消息 -->
              <el-table-column

                prop="chat_room_last_message.message">
              </el-table-column>

              <!-- 最新消息发送时间 -->
              <el-table-column>

                <template slot-scope="scope">
                  <div class="demo-type">
                    <div>
                      <span>{{ formatDateTime(scope.row.chat_room_last_message.created_at) }}</span>
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
    getData() {
      console.log('getData');
      this.$store.dispatch("message/getChatList", this.searchParams);
    },
    handleSizeChange(val) {
        this.searchParams.per_page = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.current_page;
      this.getData();
    },
    tableRowClassName({row}) {
      // console.log('row',row);
      // console.log('rowIndex',rowIndex);
        if (row.chat_room_member_me[0].is_new_to_read) {
          return 'warning-row';
        } 
        return '';
    },
    cellStyle({row}) {
        if (row.chat_room_member_me[0].is_new_to_read) {
          return 'item';
        } 
        return '';
    },
    routeToViewMemberDetail(member_id){
      this.$router.push('/member/' + member_id);
      // event.stopPropagation();
    },
    routeToViewChatMessage(row) {
      this.$router.push({ path: "/message", query: {chat_id:row.id,to_member_id:row.chat_room_member_opposite[0].member_id} });
    },
    cellClick(row, column){
        // if (column.property == 'chat_room_member_opposite[0].member.nick_name' || !column.property)
        if ( !column.property)
        {
          this.routeToViewMemberDetail(row.chat_room_member_opposite[0].member_id);
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
      },14 * 1000);

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
