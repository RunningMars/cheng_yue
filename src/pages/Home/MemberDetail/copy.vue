<template>
  <div class="home">

    <!--搜索栏-->
    <div class="search clearfix">
        <div class="search_input fr">
            <el-input class="input" v-model="search_keyWord" placeholder="请输入内容" ></el-input>
            <el-button type="primary" icon="el-icon-search" @click="search()">搜索</el-button>
        </div>
    </div>

    <div class="content">
        <div  class="member_list">

              <div class="member_list_item clearfix">
                <div class="item_top">
                  <div class="member_name fl">{{member.nickName}}</div>
                  <div  class="avatar fr"> 
                    <viewer :image="member.profilePhoto">
                      <img
                          :src="member.profilePhoto"
                          class="pro-img"
                        >
                    </viewer>
                  </div>
                  <div class="info fl">
                    <span>{{member.age}}岁</span>
                    <span>/{{member.height}}cm</span>
                    <span>/{{member.educationBackground}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.province}}</span>
                    <span>/{{member.city}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.job}}</span>
                  </div>
                </div>

                <div class="item_middle">
                      <!-- <img> -->
                    <!-- <span>点赞99</span> -->
                    <div class="request aboutMe fl"><span>关于我  </span><span> {{ member.aboutMe }}</span></div>
                    <div class="request hope_you fl"><span>希望你  </span><span> {{ member.hopeYou }}</span></div>
                  </div>

                <div class="item_bottom">
                    <viewer :images="member.memberImages">
                      <img
                          v-for="(memberImage,index) in member.memberImages"
                          :src="memberImage.image"
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
          :current-page.sync="data.pageNum"
          :page-sizes="[1,5, 10, 20, 30, 50, 100]"
          :page-size="data.pageSize"
          :pager-count="21"
          layout="sizes, prev, pager, next, jumper, total "
          :total="data.total">
        </el-pagination>

    </div>
</div>

</template>

<script>
export default {
  name: 'MemberList',
  props: {
    msg: String
  },
  data(){
    return {
      search_keyWord:"",
      data:{
        data:[  
          ],
          pageNum: 1,
          last_page: 1,
          pageSize: 10,
          total: 0
      }
    }
  },
  methods:{
    search(){
      this.$http
      .get("/member/list?pageSize=" + this.data.pageSize + "&page=" + this.data.pageNum + "&keyWord=" + this.search_keyWord)
      .then((response) => {
        this.data = response.data.result;
      });
    },
    handleSizeChange(val) {
        this.data.pageSize = val;
        this.handleCurrentChange();
    },
    handleCurrentChange() {
      this.$http
      .get("/member/list?pageSize=" + this.data.pageSize + "&page=" + this.data.pageNum)
      .then((response) => {
        this.data = response.data.result;
      });
    }
  },
  mounted() {
    console.log('mounted');
    this.handleCurrentChange(1);
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

</style>
