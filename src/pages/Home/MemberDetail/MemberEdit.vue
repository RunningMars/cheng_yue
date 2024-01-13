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

          <div class="edit_area_form">
                <el-form ref="member" :model="member" label-width="80px">

                      <!-- TA的信息 -->
                      <div class="member_info">


                          <span class="" style="font-size:20px;">TA的信息</span>
                          <!-- 基本资料 -->
                          <div class="member_basic_info clearfix">

                              <div class="block_label fl">
                                  <span class="">基本资料</span>
                              </div>

                              <div class="block_content fl clearfix">

                                  <el-form-item label="昵称">
                                      <el-input style="width:320px;" v-model="member.nick_name"></el-input>
                                  </el-form-item>

                                  <el-form-item label="电话">
                                      <el-input style="width:320px;" v-model="member.mobile"></el-input>
                                  </el-form-item>


                                  <el-form-item label="性别">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>
                  
                                  <el-form-item label="生日">
                                      <el-input style="width:320px;" v-model="member.birth_day"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="微信号">
                                      <el-input style="width:320px;" v-model="member.wechat_no"></el-input>
                                  </el-form-item>
                                  
                                  <el-form-item label="邮箱">
                                      <el-input style="width:320px;" v-model="member.email"></el-input>
                                  </el-form-item>
          

                                  <el-form-item label="当前城市">
                                      <el-input style="width:320px;" v-model="member.city"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="学历">
                                      <el-input style="width:320px;" v-model="member.education_background"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="职业">
                                      <el-input style="width:320px;" v-model="member.job"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="年收入">
                                      <el-input style="width:320px;" v-model="member.annual_income"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="住房情况">
                                      <el-input style="width:320px;" v-model="member.asset_house"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="购车情况">
                                      <el-input style="width:320px;" v-model="member.asset_car"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="体重">
                                      <el-input style="width:320px;" v-model="member.weight"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="身高">
                                      <el-input style="width:320px;" v-model="member.height"></el-input>
                                  </el-form-item>
                  
                                  <el-form-item label="民族">
                                      <el-input style="width:320px;" v-model="member.ethnic"></el-input>
                                  </el-form-item>
                  
                                  <el-form-item label="星座">
                                      <el-input style="width:320px;" v-model="member.constellation"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="家庭情况">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="何时结婚">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>
                  

                                  <el-form-item label="是否要孩子">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>

                                  <el-form-item label="是否吸烟">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>

                                  <el-form-item label="是否喝酒">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>

                                  <el-form-item label="兴趣爱好">
                                      <el-input style="width:320px;" v-model="member.age"></el-input>
                                  </el-form-item>

                                  <el-form-item label="自我介绍">
                                      <el-input style="width:320px;" v-model="member.about_me"></el-input>
                                  </el-form-item>

                                  <el-form-item label="希望你">
                                      <el-input style="width:320px;" v-model="member.hope_you"></el-input>
                                  </el-form-item>

                                  <el-form-item label="兴趣爱好">
                                      <el-input style="width:320px;" v-model="member.interest"></el-input>
                                  </el-form-item>

                                  <el-form-item label="兴趣爱好">
                                      <el-input style="width:320px;" v-model="member.interest"></el-input>
                                  </el-form-item>
                  
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

                      

                        <el-form-item>
                            <el-button type="primary" @click="save">保存</el-button>
                            <el-button>取消</el-button>
                        </el-form-item>
                </el-form>
          </div>


    </div>
  
         
</div>

</template>

<script>

// import { mapGetters } from "vuex";
import { reqUpdateMemberDetail } from "@/api";



export default {
  name: 'MemberDetail',
  props:  ['member_id'],
  data(){
    return {
      member: {
      }
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    async getData() {
      let id = '';
      
      if (typeof this.$store.state.user.userInfo.member !== 'undefined' && this.$store.state.user.userInfo.member.id){
        id = this.$store.state.user.userInfo.member.id;
      }else{
        this.$router.push({
          path:'/login'
        });
      }

      if (id){
        await this.$store.dispatch("member/getMemberDetail", {id:id});
        if (this.$store.state.user.userInfo.member){
            this.member = this.$store.state.user.userInfo.member
        }
      }
    },
    async save(){

      console.log('保存 this.member param',this.member);

      let response = await reqUpdateMemberDetail({...this.member});
           
           if (response.status_code == 200) {
              
              this.$message({
                   message: response.message,
                   type: 'success',
                   duration:1000
              }); 
              this.getData();   
           }else{
               this.$message({
                   message: response.message,
                   type: 'warning',
                   duration:2000
               });          
           }
           return response
    }
  },
  mounted() {
    this.getData();
  },
  
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    //...mapGetters('member',["member"]),
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
