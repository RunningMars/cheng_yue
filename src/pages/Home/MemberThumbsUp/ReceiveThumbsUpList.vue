<template>

  <div class="private_message">

    <!--搜索栏-->
    <div class="search clearfix">
        <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
        <div class="search_input fr">
            <el-input class="input" v-model="searchParams.key_word" placeholder="请输入内容" v-on:keyup.enter.native="getData()" ></el-input>
            <el-button type="primary" icon="el-icon-search" @click="getData()"  >搜索</el-button>
        </div>
    </div>

    <div class="content" style="margin-top:24px;">
        <div  class="chat_list">
            <div>
              <span style="font-size:18px;weight:bold;">我收到的点赞  </span><span style="font-size:20px;weight:bold;">{{ thumbs_up_count }}</span>
            </div>
          <el-table
            :data="receiveThumbsUpList"
            class="row_hover"
            style="width: 100%;"
            @cell-click="cellClick"
            >
            
              <!-- 对方头像 -->
              <el-table-column width="56px">

                <template slot-scope="scope">
                  <div class="demo-type">
                    <div>
                      <el-avatar :src="scope.row.member.profile_photo"></el-avatar>
                    </div>   
                  </div>
                </template>

              </el-table-column>

              <!-- 对方昵称 -->
              <el-table-column
                prop="member.nick_name"
                width="134">
              </el-table-column>

              <!-- 对方昵称 -->
              <el-table-column
                width="100">
                <span>为我点赞</span>
              </el-table-column>

              <!-- 最新点赞发送时间 -->
              <el-table-column>
 
                <template slot-scope="scope">
                  <div class="demo-type">
                    <div>
                      <span>{{ formatDateTime(scope.row.created_at) }}</span>
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
      }
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    getData() {
      console.log('getData');
      this.$store.dispatch("member/getReceiveThumbsUpList", this.searchParams);
    },
    handleSizeChange(val) {
        this.searchParams.per_page = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.current_page;
      this.getData();
    },

    routeToViewMemberDetail(member_id){
      this.$router.push('/member/' + member_id);
    },

    // routeToViewChatMessage(row) {
    //   this.$router.push({ path: "/message", query: {chat_id:row.id,to_member_id:row.chat_room_member_opposite[0].member_id} });
    // },
    formatDateTime(dateTime) {
      return moment(dateTime).format('YYYY-MM-DD HH:mm'); // 将时间按指定格式进行格式化
    },
    cellClick(row){

        this.routeToViewMemberDetail(row.member.id);
    } 
  },
  mounted() {
    if (this.$store.state.user.token){
      this.getData();
    }else{
      this.$router.push("/login");
    }
  },
  
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    ...mapGetters('member',["receiveThumbsUpList"]),
    total(){
      return this.$store.state.member.thumbs_up_result.total || 0;
    },
    thumbs_up_count(){
      return this.$store.state.member.thumbs_up_result.thumbs_up_count || 0
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
  margin-top:32px;
  /* margin-left:42px; */
}
</style>
