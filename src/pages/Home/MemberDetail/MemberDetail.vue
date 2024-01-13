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
                      <span>{{member.annual_income}}W</span>
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
                    <span>汉族</span>
                  </div>
                  <div class="info fl">
                    <span>独生子女</span>
                  </div>
                  <div class="info fl">
                    <span>籍贯:成都</span>
                  </div>
              </div>
            </div>


            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">婚姻观念</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>未婚</span>
                  </div>
                  <div class="info fl">
                    <span>何时结婚,看情况</span>
                  </div>
                  <div class="info fl">
                    <span>等时机成熟</span>
                  </div>
              </div>
            </div>


            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">生活习惯</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>不吸烟</span>
                  </div>
                  <div class="info fl">
                    <span>不喝酒</span>
                  </div>
              </div>
            </div>




            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">兴趣爱好</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>旅游</span>
                  </div>
                  <div class="info fl">
                    <span>瑜伽</span>
                  </div>
                  <div class="info fl">
                    <span>跑步</span>
                  </div>
                  <div class="info fl">
                    <span>跳舞</span>
                  </div>
              </div>
            </div>



            <div class="member_basic_info clearfix">
              <div class="block_label fl">
                  <span class="">自我介绍</span>
              </div>
              <div class="block_content fl clearfix">
                  <div class="info fl">
                    <span>阳光..健康..</span>
                  </div>
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
                        <span>{{member.age}}岁-{{member.age}}岁</span>
                      </div>
                      <div class="info fl">
                        <span>{{member.height}}cm-{{member.height}}cm</span>
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
                        <span>不吸烟</span>
                      </div>
                      <div class="info fl">
                        <span>不喝酒</span>
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
                    :src="member_image.image"
                    :key="index"
                    class="pro-img"
                  >
              </viewer>
          </div>  


    </div>
  
         
</div>

</template>

<script>

import { mapGetters } from "vuex";
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
    }
  },
  mounted() {

    let id = '';

    if ( this.$router.currentRoute.path == "/personal/info"  ){
      if (typeof this.$store.state.user.userInfo.member !== 'undefined' && this.$store.state.user.userInfo.member.id){
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
