<template>


<div class="content">
  <div style="background-color: #7d7777;height:1px;" ></div>

    <div class="member_info_content">
          <!--  member detail header-->
          <div class="member_header clearfix">
                <div class="profile_photo fl">
                    <viewer :image="member.profile_photo">
                        <img :src="member.profile_photo"
                            class="pro-img">
                   </viewer>
                </div>

                <div class="right_side_box fl">
                  <div class="member_name">{{member.nick_name}}</div>
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
                    <div class="info fl" v-if="member.body_size">
                      <span>{{member.body_size}}</span>
                    </div>
                    <div class="info fl" v-if="member.education_background">
                      <span>{{member.education_background}}</span>
                    </div>
                    <div class="info fl" v-if="member.city">
                      <span>{{member.city}}</span>
                    </div>
                    <div class="info fl" v-if="member.job">
                      <span>{{member.job}}</span>
                    </div>
                  
                    <div class="info fl" v-if="member.annual_income">
                      <span>{{member.annual_income}}</span>
                    </div>

                    <div v-if="member.asset_house" class="info fl">
                      <span>{{member.asset_house}}</span>
                    </div>

                    <div v-if="member.asset_car" class="info fl">
                      <span>{{member.asset_car}}</span>
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
                  <div class="info fl" v-if="member.about_family">
                    <span>{{member.about_family}}</span>
                  </div>

              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.marital_status">
                    <span>{{member.marital_status}}</span>
                  </div>
                  <div class="info fl" v-if="member.want_marry">
                    <span>{{member.want_marry}}</span>
                  </div>
                  <div class="info fl" v-if="member.want_child">
                    <span>{{member.want_child}}</span>
                  </div>
                  <div class="info fl" v-if="member.want_child">
                    <span>{{member.want_child}}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.about_smoke">
                    <span>{{member.about_smoke}}</span>
                  </div>
                  <div class="info fl" v-if="member.about_drink">
                    <span>{{member.about_drink}}</span>
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
                  <div class="info fl" v-if="member.about_me">
                      <span class="">{{ member.about_me }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">希望你</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member.hope_you">
                    <span>{{ member.hope_you }}</span>
                  </div>
              </div>

            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">择偶要求</span>
              </div>

              <div class="info fl" v-if="member.mating_requirement">
                    <span>{{member.mating_requirement}}</span>
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
                  <div class="info fl" v-if="member && member.member_request.age_request">
                    <span>{{ member && member.member_request.age_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.height_request">
                    <span>{{ member && member.member_request.height_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.weight_request">
                    <span>{{ member && member.member_request.weight_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.body_size_request">
                    <span>{{ member && member.member_request.body_size_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.education_background_request">
                    <span>{{ member.member_request.education_background_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.annual_income_request">
                    <span>{{ member.member_request.annual_income_request }}w以上</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.job_request">
                    <span>{{ member.member_request.job_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.asset_house_request">
                    <span>{{ member.member_request.asset_house_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.asset_car_request">
                    <span>{{ member.member_request.asset_car_request }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.member_request.marital_status_request">
                    <span>{{ member.member_request.marital_status_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.want_child_request">
                    <span>{{ member.member_request.want_child_request }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.member_request.about_smoke_request">
                    <span>{{ member.member_request.about_smoke_request }}</span>
                  </div>
                  <div class="info fl" v-if="member && member.member_request.about_drink_request">
                    <span>{{ member.member_request.about_drink_request }}</span>
                  </div>
              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">其他要求</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl" v-if="member && member.member_request.about_family_request">
                    <span>{{ member.member_request.about_family_request }}</span>
                  </div>
              </div>
            </div>
              
          </div>

          <div class="member_pics">
              <viewer :images="member.member_image" class="viewer_class">
                <img
                    v-for="(member_image,index) in member.member_image"
                    :src="member_image.url"
                    :key="index"
                    class="pro-img"
                  >
              </viewer>
          </div>  

          <div >
            <div class="send" style="margin-top:20px;display:flex;justify-content:center;text-align:center;">
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateFavorites(member.id)" round> {{ !member.member_favorite_to_member || member.member_favorite_to_member.length === 0 ? '收藏' : '已收藏'}} </el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateThumbsUp(member.id)" round > {{ !member.member_thumbs_up_to_member || member.member_thumbs_up_to_member.length === 0 ? '点赞' : '已点赞'}} </el-button>
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
        key_word:"",
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
    openChat(to_member_id){
      this.$router.push({ path: "/message", query: {to_member_id:to_member_id} });
    },
    async updateFavorites(to_member_id){

      let is_favorite = this.$store.state.member.member.member_favorite_to_member.length === 0 ? 1 : 0;
      
      await reqUpdateMyFavorite({to_member_id:to_member_id,is_favorite:is_favorite});

      this.getData(to_member_id);
    },
    async updateThumbsUp(to_member_id){
      // if (to_member_id != this.$store.state.user.userInfo.member.id)
      // {
        let is_thumbs_up = this.$store.state.member.member.member_thumbs_up_to_member.length === 0 ? 1 : 0;

        await reqUpdateMythumbsUp({to_member_id:to_member_id,is_thumbs_up:is_thumbs_up});

        this.getData(to_member_id);
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

.member_header .member_abstract{
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
