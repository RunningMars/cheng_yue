<template>


<div class="content">
  <div style="background-color: #7d7777;height:1px;" ></div>

    <div class="member_info_content">
          <!--  member detail header-->
          <div class="member_header clearfix">
                <div class="profile_photo fl">
                    <viewer :image="member.profilePhoto">
                        <img :src="member.profilePhoto"
                            class="pro-img">
                   </viewer>
                </div>

                <div class="right_side_box fl">
                  <div class="member_name">{{member.nickName}}</div>
                  <ul class="member_abstract clearfix">
                      <li class="fl" v-if="member.age" >{{member.age}}岁</li>
                      <li class="fl" v-if="member.height" >{{member.height}}cm</li>
                      <li class="fl" v-if="member.city" >{{member.city}}</li>
                      <li class="fl" v-if="member.job" >{{member.job}}</li>
                  </ul>
                </div>
                
          </div>

          <!-- 返回按钮 -->
          <div style="margin-top:8px;margin-bottom:8px;">
               <el-button type="primary" icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
          </div>

          <!-- TA的信息 -->
          <div class="member_info" style="margin-top:32px;margin-bottom:8px;">

            <span class="" style="font-size:20px;">TA的信息</span>
            <!-- 基本资料 -->
            <div class="member_basic_info clearfix">

                <div class="block_label fl">
                    <span class="">基本资料</span>
                </div>

                <div class="block_content fl clearfix">
                    <div class="info fl" v-if="member.age">
                      <span>{{member.age}}岁</span>
                    </div>
                    <div class="info fl" v-if="member.height">
                      <span>{{member.height}}cm</span>
                    </div>
                    <div class="info fl" v-if="member.weight">
                      <span>{{member.weight}}kg</span>
                    </div>
                    <div class="info fl" v-if="member.bodySize">
                      <span>{{member.bodySize}}</span>
                    </div>
                    <div class="info fl" v-if="member.educationBackground">
                      <span>{{member.educationBackground}}</span>
                    </div>
                    <div class="info fl" v-if="member.city">
                      <span>{{member.city}}</span>
                    </div>
                    <div class="info fl" v-if="member.job">
                      <span>{{member.job}}</span>
                    </div>
                  
                    <div class="info fl" v-if="member.annualIncome">
                      <span>{{member.annualIncome}}</span>
                    </div>

                    <div v-if="member.assetHouse" class="info fl">
                      <span>{{member.assetHouse}}</span>
                    </div>

                    <div v-if="member.assetCar" class="info fl">
                      <span>{{member.assetCar}}</span>
                    </div>
                </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">家庭情况</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.ethnic">
                    <span>{{member.ethnic}}</span>
                  </div>
                  <div class="info fl" v-if="member.aboutFamily">
                    <span>{{member.aboutFamily}}</span>
                  </div>

              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.maritalStatus">
                    <span>{{member.maritalStatus}}</span>
                  </div>
                  <div class="info fl" v-if="member.wantMarry">
                    <span>{{member.wantMarry}}</span>
                  </div>
                  <div class="info fl" v-if="member.wantChild">
                    <span>{{member.wantChild}}</span>
                  </div>
                  <div class="info fl" v-if="member.wantChild">
                    <span>{{member.wantChild}}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.aboutSmoke">
                    <span>{{member.aboutSmoke}}</span>
                  </div>
                  <div class="info fl" v-if="member.aboutDrink">
                    <span>{{member.aboutDrink}}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">兴趣爱好</span>
              </div>
              
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.interest">
                    <span>{{ member.interest }}</span>
                  </div>

              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">关于我</span>
              </div>
              
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.aboutMe">
                      <span class="">{{ member.aboutMe }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">希望你</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.hopeYou">
                    <span>{{ member.hopeYou }}</span>
                  </div>
              </div>

            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">择偶要求</span>
              </div>

              <div class="info fl" v-if="member.matingRequirement">
                    <span>{{member.matingRequirement}}</span>
                  </div>
            </div>

          </div>

          <!-- TA的信息 -->
          <div class="member_info" style="margin-top:35px;">

            <span class="" style="font-size:20px;">TA的择偶观</span>
            <!-- 基本资料 -->
            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">基本要求</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.memberRequest.ageMinRequest">
                    <span>{{ member && member.memberRequest.ageMinRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.heightMinRequest">
                    <span>{{ member && member.memberRequest.heightMinRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.weightMinRequest">
                    <span>{{ member && member.memberRequest.weightMinRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.bodySizeRequest">
                    <span>{{ member && member.memberRequest.bodySizeRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.educationBackgroundRequest">
                    <span>{{ member.memberRequest.educationBackgroundRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.annualIncomeRequest">
                    <span>{{ member.memberRequest.annualIncomeRequest }}w以上</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.jobRequest">
                    <span>{{ member.memberRequest.jobRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.assetHouseRequest">
                    <span>{{ member.memberRequest.assetHouseRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.assetCarRequest">
                    <span>{{ member.memberRequest.assetCarRequest }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.memberRequest.maritalStatusRequest">
                    <span>{{ member.memberRequest.maritalStatusRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.wantChildRequest">
                    <span>{{ member.memberRequest.wantChildRequest }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.memberRequest.aboutSmokeRequest">
                    <span>{{ member.memberRequest.aboutSmokeRequest }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.memberRequest.aboutDrinkRequest">
                    <span>{{ member.memberRequest.aboutDrinkRequest }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">其他要求</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.memberRequest.aboutFamilyRequest">
                    <span>{{ member.memberRequest.aboutFamilyRequest }}</span>
                  </div>
              </div>
            </div>
              
          </div>

          <div class="member_pics">
              <viewer :images="member.memberImages" class="viewer_class">
                <img
                    v-for="(memberImage,index) in member.memberImages"
                    :src="memberImage.url"
                    :key="index"
                    class="pro-img"
                  >
              </viewer>
          </div>  

          <div >
            <div class="send" style="margin-top:20px;display:flex;justify-content:center;text-align:center;">
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateFavorites(member.id)" round> {{ !member.memberFavoriteToMember || member.memberFavoriteToMember.length === 0 ? '收藏' : '已收藏'}} </el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateThumbsUp(member.id)" round > {{ !member.memberThumbsUpToMember || member.memberThumbsUpToMember.length === 0 ? '点赞' : '已点赞'}} </el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="openChat(member.id)" round >私信</el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" >
                <el-button type="primary" @click="$router.back()" round>返回</el-button>
              </div>
            </div>
          </div>

    </div>
  
</div>

</template>

<script>

import { mapGetters } from "vuex";
import { reqUpdateMyFavorite , reqUpdateMythumbsUp } from "@/api";
export default {
  name: 'MemberDetail',
  props:  ['member_id'],
  data(){
    return {
      searchParams: {
        //搜索的关键字
        keyWord:"",
        //相应的id
        category1Id: "",
      }
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    getData(id) {
        this.$store.dispatch("member/getMemberDetail", {id:id});
    },
    openChat(toMemberId){
      this.$router.push({ path: "/message", query: {toMemberId:toMemberId} });
    },
    async updateFavorites(toMemberId){

      let isFavorite = this.$store.state.member.member.memberFavoriteToMember.length === 0 ? 1 : 0;
      
      await reqUpdateMyFavorite({toMemberId:toMemberId,isFavorite:isFavorite});

      this.getData(toMemberId);
    },
    async updateThumbsUp(toMemberId){
      // if (toMemberId != this.$store.state.user.userInfo.member.id)
      // {
        let isThumbsUp = this.$store.state.member.member.memberThumbsUpToMember.length === 0 ? 1 : 0;

        await reqUpdateMythumbsUp({toMemberId:toMemberId,isThumbsUp:isThumbsUp});

        this.getData(toMemberId);
      // }
     
    }
  },
  mounted() {

    let id = '';

    if ( this.$router.currentRoute.path == "/personal/info"  ){
      if (this.$store.state.user.userInfo && typeof this.$store.state.user.userInfo.member !== 'undefined' && this.$store.state.user.userInfo.member.id){
        id = this.$store.state.user.userInfo.member.id;
      }else{
        this.$router.push({
          path:'/login'
        });
      }
    }else{
      if (this.member_id){
        id = this.member_id;
      }
    }
    //console.log('id',id);
    if (id){
        this.getData(id);
    }
  },
  
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    ...mapGetters('member',["member"]),
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 版心 */
.content{
    width:100%;
    margin: 0 auto;
    /*background-color: lightblue;*/
}
/* #region header start */
.member_header {
    background-color: #333333;
    overflow: hidden;
}
.member_header .profile_photo img{
    float:left;
    margin-left:40px;
    margin-top:15px;
    margin-bottom:30px;
    border-radius:60px;
    width:120px;
}

.right_side_box {
    width:70%;
    margin-bottom : 15px;
  }
  .member_header .member_abstract {
    margin-top : 10px;
    margin-left : 10px;
  }

.member_header .member_abstract{
    margin-left:3%;
    display:flex;
    justify-content:center;
          /* justify-content:space-evenly; */
}

.member_header .member_abstract li{
    margin-top:10px;
    font:18px ;
    color:rgb(182, 182, 182);
    font-weight: bold;
    padding-right:15px;
    margin-right:15px;
    float:left;
    border-right:1px solid gray;
}

.member_header .member_abstract li:last-child{
    border-right:0;
}

.member_header .member_name {
    margin-top:24px;
    margin-left:40px;
    /* margin-bottom:12px; */
    width: 160px;
    font-size:26px;
    font-weight: bold;
    display:block;
    color:whitesmoke;
}

.member_basic_info {
  margin-top:36px;
}
.member_basic_info .block_label {
  width:130px;
}


.member_info_content .member_info {
  margin-left:26px;
}
.content .member_info .info {
    font-size:16px;
    background-color: rgb(244,244,244);
    border-radius: 8px;
    margin-left: 20px;
    margin-top: 4px;
    padding: 5px;
}

.content .member_info_content .member_pics {
    margin-top: 15px;
    margin-bottom: 5px;

}

.content .member_info_content .viewer_class {
    width:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.content .member_info_content .member_pics img{
    margin-top:20px;
    width: 300px;
    /* height:auto; */
    /* float:left; */
    margin-right:3px;
    border-radius: 4px;
    
}
.content .member_info_content .member_pics img:first-child{
    margin-left:2px;
}

@media (max-width:789px){
  .member_header .profile_photo img{
      float:left;
      margin-left:12px;
      margin-top:15px;
      margin-bottom:10px;
      border-radius:60px;
      width:24%;
  }
  .member_header .member_name {
      margin-top:8px;
      margin-left:10px;
      /* margin-bottom:12px; */
      width: 120px;
      font-size:20px;
      font-weight: bold;
      display:block;
      color:whitesmoke;
  }
  .right_side_box {
    width:100%;
    margin-bottom : 15px;
  }


}
</style>
