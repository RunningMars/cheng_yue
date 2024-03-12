<template>
  <div class="home">

      <!--搜索栏-->
      <div class="search clearfix">
        
        <div>
          <el-button type="primary" v-show="this.is_favorite || this.is_thumbs_up" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
        </div>

        <div class="search_items">

          <div class="search_item">
            <el-input class="input" v-model="searchParams.key_word" placeholder="昵称/ID" clearable v-on:keyup.enter.native="getData()" size="small"></el-input>
          </div>

          <div class="search_item">
            <!-- <el-input class="input" style="width:100px;" v-model="searchParams.age_min_request" placeholder="年龄(起)" clearable v-on:keyup.enter.native="getData()" size="small"></el-input>
            <span style="color:grey;"> 至 </span>
            <el-input class="input" style="width:100px;" v-model="searchParams.age_max_request" placeholder="年龄(止)" clearable v-on:keyup.enter.native="getData()" size="small"></el-input> -->
         
            <el-select v-model="searchParams.age_min_request" style="width:90px;" placeholder="年龄(起)" clearable size="small">
              <el-option
                  v-for="item in age_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <!-- <span style="color:grey;"> 至 </span> -->
            <span style="color:grey;"> </span>
            <el-select v-model="searchParams.age_max_request" style="width:90px;"  placeholder="年龄(止)" clearable size="small">
              <el-option
                  v-for="item in age_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.height_min_request" style="width:90px;" placeholder="身高(起)" clearable size="small">
              <el-option
                  v-for="item in height_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <span style="color:grey;"> </span>
            <el-select v-model="searchParams.height_max_request" style="width:90px;"  placeholder="身高(止)" clearable size="small">
              <el-option
                  v-for="item in height_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.education_background_code_request" placeholder="学历" clearable size="small">
              <el-option
                  v-for="item in education_background_code_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <!-- <el-select v-model="searchParams.annual_income_request" placeholder="选择年收入" clearable size="small"> -->
              <!-- <el-option
                  v-for="item in annual_income_range_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option> -->
            <!-- </el-select> -->
            <el-select v-model="searchParams.annual_income_min_request" placeholder="年收入" clearable size="small">
              <el-option
                  v-for="item in annual_income_min_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.asset_house_request" placeholder="住房" clearable size="small">
              <el-option
                  v-for="item in house_asset_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <div class="search_item">
            <el-select v-model="searchParams.asset_car_request" placeholder="车辆" clearable size="small">
              <el-option
                  v-for="item in car_asset_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <!-- <div class="search_item">
            <el-select v-model="searchParams.child_status_request" placeholder="小孩情况" clearable size="small">
              <el-option
                  v-for="item in child_status_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div> -->

          <div class="search_item">
            <el-select v-model="searchParams.marital_status_request" placeholder="婚姻情况" clearable size="small">
              <el-option
                  v-for="item in marital_status_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div>

          <!-- <div class="search_item">
            <el-select v-model="searchParams.want_child_request" placeholder="生孩观念" clearable size="small">
              <el-option
                  v-for="item in want_child_request_options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </div> -->

        </div>

        <div class="search_item fr">
            <el-button type="primary" icon="el-icon-search" @click="getData()" >搜索</el-button>
            <el-button type="primary" icon="el-icon-s-open" @click="clearSearch()" >清空条件</el-button>
        </div>
      </div>

    <div class="content">
        <div  class="member_list">

              <!-- <div v-for="member in this.$store.state.member.result.data" :key="member.id" class="member_list_item clearfix"> -->
              <div v-for="member in memberList" :key="member.id"   class="member_list_item hover clearfix">

                <div class="item_top">

                  <div class="fl clearfix" style="width:73%;">

                    <div class="member_name fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">{{member.nick_name}}</div>

                    <div class="info fl member_detail_hover"  @click="routeToViewMemberDetail(member.id)">
                      <span v-show="member.age">{{member.age}}岁</span>
                      <span v-show="member.height">/{{member.height}}cm</span>
                      <span v-show="member.education_background">/{{member.education_background}}</span>
                    </div>
                    <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <span v-show="member.province">{{member.province}}</span>
                      <span v-show="member.city">/{{member.city}}</span>
                    </div>
                    <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <span>{{member.job}}</span>
                    </div>
                  </div>

                  <div class="avatar fr" style="width:26%;"> 
                    <viewer :image="member.profile_photo">
                      <img :src="member.profile_photo"
                          class="pro-img">
                    </viewer>
                  </div>
<!--                   
                  <div class="fl clearfix" >
                    <div class="info fl member_detail_hover"  @click="routeToViewMemberDetail(member.id)">
                      <span v-show="member.age">{{member.age}}岁</span>
                      <span v-show="member.height">/{{member.height}}cm</span>
                      <span v-show="member.education_background">/{{member.education_background}}</span>
                    </div>
                    <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <span v-show="member.province">{{member.province}}</span>
                      <span v-show="member.city">/{{member.city}}</span>
                    </div>
                    <div class="info fl member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <span>{{member.job}}</span>
                    </div>
                  </div> -->
                  
                </div>

                <div class="item_middle member_detail_hover" @click="routeToViewMemberDetail(member.id)">
                      <!-- <img> -->
                    <!-- <span>点赞99</span> -->
                    <div class="request about_me fl" v-show="member.about_me"><span>关于我  </span><span> {{ member.about_me }}</span></div>
                    <div class="request hope_you fl" v-show="member.hope_you"><span>希望你  </span><span> {{ member.hope_you }}</span></div>
                  </div>

                <div class="item_bottom">
                    <viewer :images="member.member_image" class="viewer_class">
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
          :small="true"
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
        height_min_request:null,
        height_max_request:null,
        education_background_code_request:null,
        annual_income_request:null,
        annual_income_min_request:null,
        asset_house_request:null,
        asset_car_request:null,
        marital_status_request:null,
        child_status_request:null,
        want_child_request:null,
      },

      education_background_code_request_options:[
          {label:"高中及以上",value:1},
          {label:"中专及以上",value:2},
          {label:"大专及以上",value:3},
          {label:"本科及以上",value:4},
          {label:"硕士及以上",value:5},
          {label:"博士及以上",value:6},
          {label:"博士后",value:7},
        ],
      annual_income_range_request_options:[
          {label:"5w-10w",value:"5w-10w"},
          {label:"10w-15w",value:"10w-15w"},
          {label:"15w-20w",value:"15w-20w"},
          {label:"20w-30w",value:"20w-30w"},
          {label:"30w-50w",value:"30w-50w"},
          {label:"50w 以上",value:"50w以上"},
      ],
      annual_income_min_request_options:[
          {label:"5w 以上",value:5},
          {label:"10w 以上",value:10},
          {label:"15w 以上",value:15},
          {label:"20w 以上",value:20},
          {label:"30w 以上",value:30},
          {label:"50w 以上",value:50},
      ],
      car_asset_request_options:[
          {label:"未购车",value:"未购车"},
          {label:"已购车",value:"已购车"}
        ],
      house_asset_request_options:[
          {label:"和家人同住",value:"和家人同住"},
          {label:"已购房",value:"已购房"},
          {label:"租房",value:"租房"},
          {label:"打算婚后购房",value:"打算婚后购房"},
          {label:"住在单位宿舍",value:"住在单位宿舍"},
        ],
      marital_status_request_options:[
          {label:"未婚",value:"未婚"},
          {label:"离异",value:"离异"},
          {label:"丧偶",value:"丧偶"},
        ],
      child_status_request_options:[
          {label:"没有小孩",value:"没有小孩"},
          {label:"有小孩且住在一起",value:"有小孩且住在一起"},
          {label:"有小孩且偶尔会一起住",value:"有小孩且偶尔会一起住"},
          {label:"有小孩但不在身边",value:"有小孩但不在身边"},
        ],
      want_child_request_options:[
          {label:"想要孩子",value:"想要孩子"},
          {label:"视情况而定",value:"视情况而定"},
          {label:"不想要孩子",value:"不想要孩子"},
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
          {label:"140cm",value:140},
          {label:"141cm",value:141},
          {label:"142cm",value:142},
          {label:"143cm",value:143},
          {label:"144cm",value:144},
          {label:"145cm",value:145},
          {label:"146cm",value:146},
          {label:"147cm",value:147},
          {label:"148cm",value:148},
          {label:"149cm",value:149},
          {label:"150cm",value:150},
          {label:"151cm",value:151},
          {label:"152cm",value:152},
          {label:"153cm",value:153},
          {label:"154cm",value:154},
          {label:"155cm",value:155},
          {label:"156cm",value:156},
          {label:"157cm",value:157},
          {label:"158cm",value:158},
          {label:"159cm",value:159},
          {label:"160cm",value:160},
          {label:"161cm",value:161},
          {label:"162cm",value:162},
          {label:"163cm",value:163},
          {label:"164cm",value:164},
          {label:"165cm",value:165},
          {label:"166cm",value:166},
          {label:"167cm",value:167},
          {label:"168cm",value:168},
          {label:"169cm",value:169},
          {label:"170cm",value:170},
          {label:"171cm",value:171},
          {label:"172cm",value:172},
          {label:"173cm",value:173},
          {label:"174cm",value:174},
          {label:"175cm",value:175},
          {label:"176cm",value:176},
          {label:"177cm",value:177},
          {label:"178cm",value:178},
          {label:"179cm",value:179},
          {label:"180cm",value:180},
          {label:"181cm",value:181},
          {label:"182cm",value:182},
          {label:"183cm",value:183},
          {label:"184cm",value:184},
          {label:"185cm",value:185},
          {label:"186cm",value:186},
          {label:"187cm",value:187},
          {label:"188cm",value:188},
          {label:"189cm",value:189},
          {label:"190cm",value:190},
          {label:"191cm",value:191},
          {label:"192cm",value:192},
          {label:"193cm",value:193},
          {label:"194cm",value:194},
          {label:"195cm",value:195},
          {label:"196cm",value:196},
          {label:"197cm",value:197},
          {label:"198cm",value:198},
          {label:"199cm",value:199},
          {label:"200cm",value:200},
      ],
      age_request_options:[
          {label:"18岁",value:18},
          {label:"19岁",value:19},
          {label:"20岁",value:20},
          {label:"21岁",value:21},
          {label:"22岁",value:22},
          {label:"23岁",value:23},
          {label:"24岁",value:24},
          {label:"26岁",value:26},
          {label:"27岁",value:27},
          {label:"28岁",value:28},
          {label:"29岁",value:29},
          {label:"30岁",value:30},
          {label:"31岁",value:31},
          {label:"32岁",value:32},
          {label:"33岁",value:33},
          {label:"34岁",value:34},
          {label:"36岁",value:36},
          {label:"37岁",value:37},
          {label:"38岁",value:38},
          {label:"39岁",value:39},
          {label:"40岁",value:40},
          {label:"41岁",value:41},
          {label:"42岁",value:42},
          {label:"43岁",value:43},
          {label:"44岁",value:44},
          {label:"46岁",value:46},
          {label:"47岁",value:47},
          {label:"48岁",value:48},
          {label:"49岁",value:49},
          {label:"50岁",value:50},
          {label:"51岁",value:51},
          {label:"52岁",value:52},
          {label:"53岁",value:53},
          {label:"54岁",value:54},
          {label:"56岁",value:56},
          {label:"57岁",value:57},
          {label:"58岁",value:58},
          {label:"59岁",value:59},
          {label:"60岁",value:60},
          {label:"61岁",value:61},
          {label:"62岁",value:62},
          {label:"63岁",value:63},
          {label:"64岁",value:64},
          {label:"66岁",value:66},
          {label:"67岁",value:67},
          {label:"68岁",value:68},
          {label:"69岁",value:69},
          {label:"70岁",value:70},
          {label:"71岁",value:71},
          {label:"72岁",value:72},
          {label:"73岁",value:73},
          {label:"74岁",value:74},
          {label:"76岁",value:76},
          {label:"77岁",value:77},
          {label:"78岁",value:78},
          {label:"79岁",value:79},
          {label:"80岁",value:80},
          {label:"81岁",value:81},
          {label:"82岁",value:82},
          {label:"83岁",value:83},
          {label:"84岁",value:84},
          {label:"86岁",value:86},
          {label:"87岁",value:87},
          {label:"88岁",value:88},
          {label:"89岁",value:89},
          {label:"90岁",value:90},
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
      this.searchParams.height_min_request = null;
      this.searchParams.height_max_request = null;
      this.searchParams.education_background_code_request = null;
      this.searchParams.annual_income_request = null;
      this.searchParams.annual_income_min_request = null;
      this.searchParams.asset_house_request = null;
      this.searchParams.asset_car_request = null;
      this.searchParams.marital_status_request = null;
      this.searchParams.child_status_request = null;
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
  overflow: hidden;
    padding:10px;
}
/* .search .input{
    width:200px;
} */

/* 版心 */
.content{
    width:100%;
    margin: 0 auto;
    /*background-color: lightblue;*/
}
.search_items {
  margin-left:12px;
  margin-top:12px;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-content:space-evenly; 
}
.search_items .search_item {
  width:190px;
  /* overflow:hidden; */
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
    background-color: rgb(222 222 222);
    border-radius: 5px;
    margin-left: 9px;
    padding: 3px;
    margin-top: 4px;
}

/* .content .member_list .item_top div:nth-child(3) {
    margin-bottom:6px;
    margin-top: 2px;
} */

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
    width: 100%;
    margin-bottom: 5px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
}
.content .member_list .viewer_class {
    width: 100%;
    margin-bottom: 5px;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
}

.content .member_list .item_bottom img{
    width: 77px;
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

  /* 手机端 */
@media (max-width: 468px) {

    /*搜索*/
    .search {
      overflow: hidden;
        padding:4px;
    }

    /* 版心 */
    .content{
        margin: 0 auto;
        /*background-color: lightblue;*/
    }
    
  .search_items {
    font-size: 10px;
    margin-left:4px;
    margin-top:4px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-content:space-evenly; 
  }
  .search_item .el-input__inner {
    font-size: 10px;
  }
  .search_items .search_item {
    width:80px;
  }
  .content .member_list .member_list_item{
    width:88%;
  }
  .pagination {
    padding:0;
  }

  .content .member_list{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
  }
}
</style>
