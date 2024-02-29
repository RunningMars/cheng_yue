<template>
  <div class="home">

      <!--搜索栏-->
      <div class="search clearfix">
        
        <div>
          <el-button type="primary" v-show="this.is_favorite || this.is_thumbs_up" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
        </div>

        <div style="height:130px;margin-left:12px;margin-top:12px;display:flex;flex-wrap:wrap;justify-content:space-around; align-content:space-evenly;">

          <div class="search_item">
            <el-input class="input" style="width:190px;" v-model="searchParams.key_word" placeholder="搜索昵称" clearable v-on:keyup.enter.native="getData()" size="small"></el-input>
          </div>

          <div class="search_item">
            <el-input class="input" style="width:100px;" v-model="searchParams.age_min_request" placeholder="年龄(起)" clearable v-on:keyup.enter.native="getData()" size="small"></el-input>
            <span style="color:grey;"> 至 </span>
            <el-input class="input" style="width:100px;" v-model="searchParams.age_max_request" placeholder="年龄(止)" clearable v-on:keyup.enter.native="getData()" size="small"></el-input>
          </div>

          <div class="search_item">
            <!-- <el-input class="input" style="width:190px;" v-model="searchParams.height_request" placeholder="请输入搜索的身高(cm)" v-on:keyup.enter.native="getData()" ></el-input> -->
            <el-select v-model="searchParams.height_request" placeholder="搜索身高" clearable size="small">
              <el-option
                  v-for="item in height_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.education_background_request" placeholder="搜索学历" clearable size="small">
              <el-option
                  v-for="item in education_background_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.annual_income_request" placeholder="选择年收入" clearable size="small">
              <el-option
                  v-for="item in annual_income_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.asset_house_request" placeholder="搜索住房情况" clearable size="small">
              <el-option
                  v-for="item in house_asset_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.asset_car_request" placeholder="搜索车辆情况" clearable size="small">
              <el-option
                  v-for="item in car_asset_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.marital_status_request" placeholder="搜索婚姻情况" clearable size="small">
              <el-option
                  v-for="item in marital_status_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.want_child_request" placeholder="搜索生孩观念" clearable size="small">
              <el-option
                  v-for="item in want_child_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-button type="primary" icon="el-icon-delete" @click="clearSearch()"  >清除</el-button>
            <el-button type="primary" icon="el-icon-search" @click="getData()"  >搜索</el-button>

          </div>

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
  props: ['msg','is_favorite','is_thumbs_up'],
  data(){
    return {
      searchParams: {
        is_favorite:0,
        is_thumbs_up:0,
        //搜索的关键字
        key_word:"",

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

        age_min_request:null,
        age_max_request:null,
        height_request:null,
        education_background_request:null,
        annual_income_request:null,
        asset_house_request:null,
        asset_car_request:null,
        marital_status_request:null,
        want_child_request:null,
      },

      education_background_request_options:[
            {label:"大专以上",value:"1"},
            {label:"本科以上",value:"2"},
            {label:"硕士以上",value:"3"},
            {label:"博士及以上",value:"4"}
        ],
        annual_income_request_options:[
          {label:"5w-10w",value:"5w-10w"},
          {label:"10w-15w",value:"10w-15w"},
          {label:"15w-20w",value:"15w-20w"},
          {label:"20w-30w",value:"20w-30w"},
          {label:"30w-50w",value:"30w-50w"},
          {label:"50w以上",value:"50w以上"},
      ],
      car_asset_request_options:[
            {label:"暂无",value:"暂无"},
            {label:"准备买车",value:"准备买车"},
            {label:"有车",value:"有车"}
        ],
      house_asset_request_options:[
            {label:"暂无",value:"暂无"},
            {label:"准备买房",value:"准备买房"},
            {label:"有房",value:"有房"}
        ],
      marital_status_request_options:[
            {label:"未婚",value:"未婚"},
            {label:"未婚有孩",value:"未婚有孩"},
            {label:"离婚无孩",value:"离婚无孩"},
            {label:"离婚有孩",value:"离婚有孩"},
        ],
      want_child_request_options:[
            {label:"想要孩子",value:"想要孩子"},
            {label:"想要多个孩子",value:"想要多个孩子"},
            {label:"看情况",value:"看情况"},
            {label:"丁克",value:"丁克"},
        ],
      smoke_request_options:[
            {label:"不吸烟",value:"不吸烟"},
            {label:"稍微抽点",value:"稍微抽点"},
            {label:"正常吸烟",value:"正常吸烟"},
            {label:"特定场合会吸",value:"特定场合会吸"},
            {label:"抽得比较多",value:"抽得比较多"},
        ],
      drink_request_options:[
            {label:"不喝酒",value:"不喝酒"},
            {label:"偶尔喝一点",value:"偶尔喝一点"},
            {label:"正常喝酒",value:"正常喝酒"},
            {label:"特定场合会喝",value:"特定场合会喝"},
            {label:"喝得比较多",value:"喝得比较多"},
        ],
      height_request_options:[
        {label:"140cm 以上",value:140},
        {label:"141cm 以上",value:141},
        {label:"142cm 以上",value:142},
        {label:"143cm 以上",value:143},
        {label:"144cm 以上",value:144},
        {label:"145cm 以上",value:145},
        {label:"146cm 以上",value:146},
        {label:"147cm 以上",value:147},
        {label:"148cm 以上",value:148},
        {label:"149cm 以上",value:149},
        {label:"150cm 以上",value:150},
        {label:"151cm 以上",value:151},
        {label:"152cm 以上",value:152},
        {label:"153cm 以上",value:153},
        {label:"154cm 以上",value:154},
        {label:"155cm 以上",value:155},
        {label:"156cm 以上",value:156},
        {label:"157cm 以上",value:157},
        {label:"158cm 以上",value:158},
        {label:"159cm 以上",value:159},
        {label:"160cm 以上",value:160},
        {label:"161cm 以上",value:161},
        {label:"162cm 以上",value:162},
        {label:"163cm 以上",value:163},
        {label:"164cm 以上",value:164},
        {label:"165cm 以上",value:165},
        {label:"166cm 以上",value:166},
        {label:"167cm 以上",value:167},
        {label:"168cm 以上",value:168},
        {label:"169cm 以上",value:169},
        {label:"170cm 以上",value:170},
        {label:"171cm 以上",value:171},
        {label:"172cm 以上",value:172},
        {label:"173cm 以上",value:173},
        {label:"174cm 以上",value:174},
        {label:"175cm 以上",value:175},
        {label:"176cm 以上",value:176},
        {label:"177cm 以上",value:177},
        {label:"178cm 以上",value:178},
        {label:"179cm 以上",value:179},
        {label:"180cm 以上",value:180},
        {label:"181cm 以上",value:181},
        {label:"182cm 以上",value:182},
        {label:"183cm 以上",value:183},
        {label:"184cm 以上",value:184},
        {label:"185cm 以上",value:185},
        {label:"186cm 以上",value:186},
        {label:"187cm 以上",value:187},
        {label:"188cm 以上",value:188},
        {label:"189cm 以上",value:189},
        {label:"190cm 以上",value:190},
      ],
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    getData() {
      this.$store.dispatch("member/getMemberList", this.searchParams);
    },
    clearSearch() {
      this.searchParams.key_word = null;
      this.searchParams.age_min_request = null;
      this.searchParams.age_max_request = null;
      this.searchParams.height_request = null;
      this.searchParams.education_background_request = null;
      this.searchParams.annual_income_request = null;
      this.searchParams.asset_house_request = null;
      this.searchParams.asset_car_request = null;
      this.searchParams.marital_status_request = null;
      this.searchParams.want_child_request = null;
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
      this.$router.push('/member/' + memberId);
    }
  },
  mounted() {

    if (this.is_favorite)
    {
      this.searchParams.is_favorite = this.is_favorite;
    }

    if (this.is_thumbs_up)
    {
      this.searchParams.is_thumbs_up = this.is_thumbs_up;
    }
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
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
