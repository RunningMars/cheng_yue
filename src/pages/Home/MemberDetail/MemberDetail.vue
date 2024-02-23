<template>

<div class="content">

    <div class="member_info">

          <li class="el-icon-back" @click="$router.back()"></li>

          <!--  member detail header-->
          <div class="member_header clearfix">

                <div class="profile_photo fl">
                    <viewer :image="member.profile_photo">
                        <img :src="member.profile_photo"
                            class="pro-img">
                   </viewer>
                </div>

                <div class="member_name fl">{{member.nick_name}}</div>

                <ul class="member_abstract fl clearfix">
                    <li class="fl">{{member.age}}岁</li>
                    <li class="fl">{{member.height}}cm</li>
                    <li class="fl">{{member.city}}</li>
                    <li class="fl">{{member.job}}</li>
                </ul>
          </div>

          <!-- TA的信息 -->
          <div class="member_info">


            <span class="" style="font-size:20px;">TA的信息</span>
            <!-- 基本资料 -->
            <div class="member_basic_info clearfix">

                <div class="block_label fl">
                    <span class="">基本资料</span>
                </div>

                <div class="block_content fl clearfix">
                    <div class="info fl">
                      <span>{{member.age}}岁</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.height}}cm</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.weight}}kg</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.body_size}}</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.education_background}}</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.province}}</span>
                      <span>/{{member.city}}</span>
                    </div>
                    <div class="info fl">
                      <span>{{member.job}}</span>
                    </div>
                  
                    <div v-show="member.annual_income" class="info fl">
                      <span>{{member.annual_income}}</span>
                    </div>

                    <div v-show="member.asset_house" class="info fl">
                      <span>{{member.asset_house}}</span>
                    </div>

                    <div v-show="member.asset_car" class="info fl">
                      <span>{{member.asset_car}}</span>
                    </div>
                </div>
            </div>
          
          

              <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">家庭情况</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>{{member.ethnic}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.about_family}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.city}}</span>
                  </div>
              </div>
            </div>


            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>{{member.marital_status}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.about_marry}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.about_child}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.about_child}}</span>
                  </div>
              </div>
            </div>


            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>{{member.about_smoke}}</span>
                  </div>
                  <div class="info fl">
                    <span>{{member.about_drink}}</span>
                  </div>
              </div>
            </div>




            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">兴趣爱好</span>
              </div>
              
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>{{ member.interest }}</span>
                  </div>

              </div>
            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">关于我</span>
              </div>
              
              <div class="block_content fl clearfix">
                  <div class="info fl">
                      <span class="">{{ member.about_me }}</span>
                  </div>
              </div>
            </div>



            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">希望你</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>{{ member.hope_you }}</span>
                  </div>
              </div>

            </div>

            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">择偶要求</span>
              </div>

              <div class="info fl">
                    <span>{{member.mating_requirement}}</span>
                  </div>
            </div>


          
          </div>


          <!-- TA的信息 -->
          <div class="member_info">


                <span class="" style="font-size:20px;">TA的择偶观</span>
                <!-- 基本资料 -->
                <div class="member_basic_info clearfix">
                  <div class="block_label fl">
                      <span class="">基本要求</span>
                  </div>
                  <div class="block_content fl clearfix">
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                      <!-- <div class="info fl">
                        <span>不限</span>
                      </div>
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                      <div class="info fl">
                        <span>不限</span>
                        <span>不限</span>
                      </div>
                      <div class="info fl">
                        <span>不限</span>
                      </div> -->
                  </div>
                </div>



                <div class="member_basic_info clearfix">
                  <div class="block_label fl">
                      <span class="">婚姻观念</span>
                  </div>
                  <div class="block_content fl clearfix">
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                  </div>
                </div>


                <div class="member_basic_info clearfix">
                  <div class="block_label fl">
                      <span class="">生活习惯</span>
                  </div>
                  <div class="block_content fl clearfix">
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                      <div class="info fl">
                        <span>不限</span>
                      </div>
                  </div>
                </div>




                <div class="member_basic_info clearfix">
                  <div class="block_label fl">
                      <span class="">其他要求</span>
                  </div>
                  <div class="block_content fl clearfix">
                      <div class="info fl">
                        <span>暂无</span>
                      </div>
                  </div>
                </div>



              
          </div>


          <div class="member_pics">
              <viewer :images="member.member_image">
                <img
                    v-for="(member_image,index) in member.member_image"
                    :src="member_image.url"
                    :key="index"
                    class="pro-img"
                  >
              </viewer>
          </div>  

          <div style="width:700px">
            <div class="send" style="display:flex;justify-content:center;text-align:center;">
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateFavorites(member.id)" round> {{member.member_favorite_to_member.length === 0 ? '收藏' : '已收藏'}} </el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="updateThumbsUp(member.id)" round > {{member.member_thumbs_up_to_member.length === 0 ? '点赞' : '已点赞'}} </el-button>
              </div>
              <div class="search_input" ></div>
              <div class="search_input"  style="margin-right:10px;" v-if="member.id != $store.state.user.userInfo.member.id">
                <el-button type="primary" @click="openChat(member.id)" round >私信</el-button>
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

      let is_thumbs_up = this.$store.state.member.member.member_thumbs_up_to_member.length === 0 ? 1 : 0;

      await reqUpdateMythumbsUp({to_member_id:to_member_id,is_thumbs_up:is_thumbs_up});

      this.getData(to_member_id);
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
    width:1190px;
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
  margin-top : 95px;
  margin-left : 50px;
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

.member_basic_info .block_label {
  width:130px;
}
.member_basic_info .block_content {
  width:550px;
  /* width:100px; */
}
.content .member_info .info {
    font-size:16px;
    background-color: rgb(244,244,244);
    border-radius: 8px;
    margin-left: 20px;
    padding: 5px;
    margin-top: 4px;
}

.content .member_info .member_pics {
    margin-bottom: 5px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
}

.content .member_info .member_pics img{
    width: 300px;
    /* height:auto; */
    /* float:left; */
    margin-right:3px;
    border-radius: 4px;
    
}
.content .member_info .member_pics img:first-child{
    margin-left:2px;
}

</style>
