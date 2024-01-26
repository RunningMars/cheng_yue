<template>
  <div class="home">

    <!--搜索栏-->
    <div class="search clearfix">
        <div class="search_input fr">
            <el-input class="input" v-model="searchParams.key_word" placeholder="请输入内容" v-on:keyup.enter.native="getData()" ></el-input>
            <el-button type="primary" icon="el-icon-search" @click="getData()"  >搜索</el-button>
        </div>
    </div>

    <div class="content">
        <div  class="member_list">

              <!-- <div v-for="member in this.$store.state.member.result.data" :key="member.id" class="member_list_item clearfix"> -->
              <div v-for="member in memberList" :key="member.id"   class="member_list_item hover clearfix">

                <div class="item_top">
                  <div class="member_name fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">{{member.nick_name}}</div>
                  <div class="avatar fr"> 
                    <viewer :image="member.profile_photo">
                      <img :src="member.profile_photo"
                          class="pro-img">
                    </viewer>
                  </div>
                  <div class="info fl member_detail_hover"  @click="routeToViewMemberDetail(member.id)">
                    <span>{{member.age}}岁</span>
                    <span>/{{member.height}}cm</span>
                    <span>/{{member.education_background}}</span>
                  </div>
                  <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                    <span>{{member.province}}</span>
                    <span>/{{member.city}}</span>
                  </div>
                  <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                    <span>{{member.job}}</span>
                  </div>
                </div>

                <div class="item_middle member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <!-- <img> -->
                    <!-- <span>点赞99</span> -->
                    <div class="request about_me fl"><span>关于我  </span><span> {{ member.about_me }}</span></div>
                    <div class="request hope_you fl"><span>希望你  </span><span> {{ member.hope_you }}</span></div>
                  </div>

                <div class="item_bottom">
                    <viewer :images="member.member_image">
                      <img
                          v-for="(member_image,index) in member.member_image"
                          :src="member_image.url"
                          :key="index"
                          class="pro-img"
                        >
                    </viewer>
                </div>
                
              </div>

        </div>

        <el-pagination class="pagination"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="searchParams.current_page"
          :page-sizes="[1,5, 10, 20, 30, 50, 100]"
          :page-size="searchParams.per_page"
          :pager-count="21"
          layout="sizes, prev, pager, next, jumper, total "
          :total="total">
        </el-pagination>

    </div>
</div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'MemberList',
  props: {
    msg: String
  },
  data(){
    return {
      searchParams: {
        //搜索的关键字
        key_word:"",
        //相应的id
        category1Id: "",
        category2Id: "",
        category3Id: "",
        //名字
        categoryName: "",
        keyword: "",
        //排序:初始状态应该是综合且降序
        order: "1:desc",
        //第几页
        current_page: 1,
        page: 1,
        //每一页展示条数
        per_page: 5,
        last_page: 1,
        //平台属性的操作
        props: [],
        //
        trademark: "",
      }
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    getData() {
      this.$store.dispatch("member/getMemberList", this.searchParams);
    },
    handleSizeChange(val) {
        this.searchParams.per_page = val;
        this.getData();
    },
    handleCurrentChange() {
      this.searchParams.page = this.searchParams.current_page;
      this.getData();
    },
    routeToViewMemberDetail(memberId) {
      //console.log('memberId',memberId);
      //this.$router.push({ name: "/member", params: {member_id:memberId} });
      this.$router.push('/member/' + memberId);
    }
  },
  mounted() {
    //console.log('memberlist mounted');
    if (this.$store.state.user.token){
      this.getData();
    }else{
      this.$router.push("/login");
    }
  },
  
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    ...mapGetters('member',["memberList"]),
    total(){
      return this.$store.state.member.result.total || 0;
    }
    // memberList(){
    //   return this.$store.getters['member/memberList']
    // },
  }
}
// search(){
//   this.$http
//   .get("/member/list?per_page=" + this.result.per_page + "&page=" + this.result.current_page + "&key_word=" + this.search_key_word)
//   .then((response) => { this.result = response.data.result; });
// },
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
    width:1190px;
    margin: 0 auto;
    /*background-color: lightblue;*/
}

/* 内容列表 */
.content .member_list{
    display:flex;
    flex-wrap:wrap;
    /* position:relative; */
}

.content .member_list .member_list_item{
    /* position: absolute; */
    width:276px;
    height:306px;
    padding:6px;
    box-shadow: 0px 0px 10px gray;
    /* background-color: floralwhite; */
    background-color: whitesmoke;
    margin:5px;
    transition:0.16s linear;
    border-radius:6px;
    /* transition: all .2s linear; */
}

.content .member_list .member_list_item .item_top{
    height:136px;
}

.content .member_list .member_list_item .item_middle{
    height:80px;
}

.content .member_list .member_list_item .item_bottom{
    height:90px;
}

.content .member_list .member_list_item{
    box-shadow:0px 0px 10px gray;
}
.content .member_list .member_name {
    width: 160px;
    margin-left:0;
    font-size:20px;
    font-weight: bold;
    display:block;
    margin-bottom:12px;
}

.content .member_list .info {
    font-size:13px;
    background-color: rgb(244,244,244);
    border-radius: 5px;
    margin-left: 9px;
    padding: 3px;
    margin-top: 4px;
}

.content .member_list .item_top div:nth-child(3) {
    margin-bottom:6px;
    margin-top: 2px;
}

.content .member_list .item_middle span{
    font-size:13px;
}

.content .member_list .avatar img{
    /* display:block; */
    width:95px;
    max-width:95px;
    max-height:95px;
    margin-top:0;
    border-radius:6px;
    max-width: 100%;
    max-height: 100%;
}

.content .member_list .item_middle .request span:first-child{
    font-size:14px;
    font-weight:bold;
    color:black;
}

.content .member_list .about_me {
    width: 256px;
    height:37px;
    margin-right: 6px;
}

.content .member_list .hope_you {
    width: 256px;
    height:37px;
}
.content .member_list .member_detail_hover:hover {
   cursor:pointer;
}
.content .member_list .item_bottom {
    width: 256px;
    margin-bottom: 5px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
}

.content .member_list .item_bottom img{
    width: 60px;
    /* height:auto; */
    /* float:left; */
    margin-right:3px;
    border-radius: 4px;
    
}
.content .member_list .item_bottom img:first-child{
    margin-left:2px;
}

.content .member_list .pic_wall img:last-child{
    margin-right:0;
}
.zoom-img {
    cursor: zoom-in;
    transition: transform .3s cubic-bezier(.2,0,.2,1)!important;
}
.zoom-img--hidden {
    visibility: hidden; 
}
.pagination {
    margin-top:20px;
    text-align: center;
}

.hover:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
  -webkit-box-shadow: 0 0 6px #999;
  box-shadow: 0 0 6px #999;
  -webkit-transition: all .5s ease-out;
  transition: all .5s ease-out;
}

</style>
