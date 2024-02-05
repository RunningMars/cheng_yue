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

                <ul class="tabs_navi clearfix">
                    <li :class="tab==1 ? 'fl active' : 'fl' " @click="tab=1">我的信息</li>
                    <li :class="tab==2 ? 'fl active' : 'fl' " @click="tab=2">择偶要求</li>
                </ul>

                <el-form ref="member" :model="member" label-width="80px">

                    <!-- TA的信息 -->
                    <div v-show="tab==1" class="member_info">

                        <span class="" style="font-size:20px;">我的信息</span>
                        <!-- 基本资料 -->
                        <div class="member_basic_info clearfix">

                            <div class="block_label fl">
                                <span class="">基本资料</span>
                            </div>


                            <UploadSingleImageComponet v-model="member.profile_photo" ></UploadSingleImageComponet>

                            <div class="block_content fl clearfix">

                                <el-form-item label="昵称">
                                    <el-input style="width:320px;" v-model="member.nick_name"></el-input>
                                </el-form-item>

                                <el-form-item label="电话">
                                    <el-input style="width:320px;" v-model="member.mobile"></el-input>
                                </el-form-item>

                                <el-form-item label="性别">
                                <el-radio v-model="member.sex" :label="1">男</el-radio>
                                <el-radio v-model="member.sex" :label="2">女</el-radio>
                                </el-form-item>
                
                                <el-form-item label="生日">
                                <el-date-picker
                                    v-model="member.birth_day"
                                    type="date"
                                    placeholder="选择日期"> 
                                </el-date-picker>
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
                                <el-select v-model="member.education_background" placeholder="请选择">
                                    <el-option
                                        v-for="item in education_background_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>
                

                                <el-form-item label="职业">
                                    <el-input style="width:320px;" v-model="member.job"></el-input>
                                </el-form-item>
                

                                <el-form-item label="年收入">
                                <el-select v-model="member.annual_income" placeholder="请选择">
                                    <el-option
                                        v-for="item in income_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>
                

                                <el-form-item label="住房情况">
                                <el-select v-model="member.asset_house" placeholder="请选择">
                                    <el-option
                                        v-for="item in house_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>
                
                                <el-form-item label="购车情况">
                                    <el-select v-model="member.asset_car" placeholder="请选择">
                                    <el-option
                                        v-for="item in car_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="婚姻情况">
                                    <el-select v-model="member.marital_status" placeholder="请选择你的婚姻情况">
                                    <el-option
                                        v-for="item in marital_status_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                                

                                <el-form-item label="身高cm">
                                    <el-input style="width:320px;" v-model="member.height"></el-input>
                                </el-form-item>
                

                                <el-form-item label="体重kg">
                                    <el-input style="width:320px;" v-model="member.weight"></el-input>
                                </el-form-item>
            

                                <el-form-item label="体型">
                                    <el-select v-model="member.body_size" placeholder="请选择">
                                    <el-option
                                        v-for="item in body_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item label="民族">
                                    <el-input style="width:320px;" v-model="member.ethnic"></el-input>
                                </el-form-item>
                
                                <el-form-item label="星座">
                                    <el-select v-model="member.constellation" placeholder="请选择">
                                    <el-option
                                        v-for="item in xingzuo_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item label="家庭情况">
                                    <el-select v-model="member.about_family" placeholder="请选择">
                                    <el-option
                                        v-for="item in family_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                
                                <el-form-item label="兄妹情况">
                                <el-input style="width:320px;" v-model="member.brother_sister" placeholder="请填写你的兄弟姐妹情况"></el-input>
                                </el-form-item>
                

                                <el-form-item label="何时结婚">
                                    <el-select v-model="member.about_marry" placeholder="请选择">
                                    <el-option
                                        v-for="item in want_marry_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item label="是否要孩子">
                                    <el-select v-model="member.about_child" placeholder="请选择">
                                    <el-option
                                        v-for="item in want_child_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否吸烟">
                                    <el-select v-model="member.about_smoke" placeholder="请选择">
                                    <el-option
                                        v-for="item in smoke_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否喝酒">
                                    <el-select v-model="member.about_drink" placeholder="请选择">
                                    <el-option
                                        v-for="item in drink_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="兴趣爱好">
                                    <el-input style="width:320px;" v-model="member.interest"></el-input>
                                </el-form-item>

                                <el-form-item label="自我介绍">
                                    <el-input style="width:320px;" v-model="member.about_me"></el-input>
                                </el-form-item>

                                <el-form-item label="希望你">
                                    <el-input style="width:320px;" v-model="member.hope_you"></el-input>
                                </el-form-item>

                                <el-form-item label="择偶要求">
                                    <el-input style="width:320px;" v-model="member.mating_requirement"></el-input>
                                </el-form-item>
                
                                <!-- <div class="member_pics">
                                    <viewer :images="member.member_image">
                                        <img
                                            v-for="(member_image,index) in member.member_image"
                                            :src="member_image.url"
                                            :key="index"
                                            class="pro-img"
                                        >
                                    </viewer>
                                </div>   -->
                                
                            
                                <UploadMultiImageComponet v-model="member.member_image" :fileList="member.member_image"></UploadMultiImageComponet>
                            </div>
                        </div>

                    </div>
            
                
                    <!-- 择偶条件 -->
                    <div v-show="tab==2" class="member_info">

                        <span class="" style="font-size:20px;">择偶条件</span>
                        <!-- 基本资料 -->
                        <div class="member_basic_info clearfix">

                            <div class="block_label fl">
                                <span class="">基本信息</span>
                            </div>

                            <div class="block_content fl clearfix">

                                <el-form-item label="年龄">
                                    <el-select v-model="member.age_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in age_request_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="身高cm">
                                    <el-input style="width:320px;" v-model="member.height_request"></el-input>
                                </el-form-item>


                                <el-form-item label="体重kg">
                                    <el-input style="width:320px;" v-model="member.weight_request"></el-input>
                                </el-form-item>

                                <el-form-item label="体型">
                                    <el-select v-model="member.body_size_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in body_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="学历">
                                <el-select v-model="member.education_background_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in education_background_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="职业">
                                    <el-input style="width:320px;" v-model="member.job_request"></el-input>
                                </el-form-item>

                                <el-form-item label="年收入">
                                <el-select  v-model="member.income_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in income_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="住房情况">
                                <el-select v-model="member.asset_house_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in house_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="购车情况">
                                    <el-select v-model="member.asset_car_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in car_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="工作地区">
                                    <el-input style="width:320px;" v-model="member.city_request"></el-input>
                                </el-form-item>

                                <el-form-item label="婚姻情况">
                                    <el-select v-model="member.marital_status_request" placeholder="请选择你的婚姻情况">
                                    <el-option
                                        v-for="item in marital_status_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                                
                                <!-- <el-form-item label="家庭情况">
                                    <el-select v-model="member.about_family_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in family_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item> -->

                                <el-form-item label="是否要孩子">
                                    <el-select v-model="member.about_child_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in want_child_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否吸烟">
                                    <el-select v-model="member.about_smoke_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in smoke_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否喝酒">
                                    <el-select v-model="member.about_drink_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in drink_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                            </div>
                            
                        </div>

                    </div>


                    <el-form-item>
                        <el-button type="primary" @click="save">保存</el-button>
                        <el-button @click="$router.back()">取消</el-button>
                    </el-form-item>
                </el-form>
          </div>

    </div>
  
         
</div>

</template>

<script>

// import { mapGetters } from "vuex";
import { reqUpdateMemberDetail } from "@/api";

import UploadMultiImageComponet from "../../../components/Upload/MultipuleUpload";
import UploadSingleImageComponet from "../../../components/Upload/SingleUpload";

export default {
  name: 'MemberDetail',
  props:  ['member_id'],
  components: {
    UploadMultiImageComponet,
    UploadSingleImageComponet
  },
  data(){
    return {
      member: {
      },
      tab:1,
      income_options:[
            {label:"5w-10w",value:"5w-10w"},
            {label:"10w-15w",value:"10w-15w"},
            {label:"15w-20w",value:"15w-20w"},
            {label:"20w-30w",value:"20w-30w"},
            {label:"30w-50w",value:"30w-50w"},
            {label:"50w以上",value:"50w以上"},
        ],
        income_request_options:[
            {label:"不限",value:"不限"},
            {label:"5w-10w",value:"5w-10w"},
            {label:"10w-15w",value:"10w-15w"},
            {label:"15w-20w",value:"15w-20w"},
            {label:"20w-30w",value:"20w-30w"},
            {label:"30w-50w",value:"30w-50w"},
            {label:"50w以上",value:"50w以上"},
        ],
      car_options:[
            {label:"暂无",value:"暂无"},
            {label:"准备购买",value:"准备购买"},
            {label:"有车",value:"有车"}
        ],
      car_request_options:[
            {label:"不限",value:"不限"},
            {label:"暂无",value:"暂无"},
            {label:"准备购买",value:"准备购买"},
            {label:"有车",value:"有车"}
        ],
      house_options:[
            {label:"暂无",value:"暂无"},
            {label:"准备购买",value:"准备购买"},
            {label:"有房",value:"有房"}
        ],
      house_request_options:[
            {label:"不限",value:"不限"},
            {label:"暂无",value:"暂无"},
            {label:"准备购买",value:"准备购买"},
            {label:"有房",value:"有房"}
        ],
      education_background_options:[
            {label:"大专以下",value:"大专以下"},
            {label:"大专",value:"大专"},
            {label:"本科",value:"本科"},
            {label:"硕士",value:"硕士"},
            {label:"博士及以上",value:"博士及以上"}
        ],
      education_background_request_options:[
            {label:"不限",value:"不限"},
            {label:"大专以下",value:"大专以下"},
            {label:"大专",value:"大专"},
            {label:"本科",value:"本科"},
            {label:"硕士",value:"硕士"},
            {label:"博士及以上",value:"博士及以上"}
        ],
      body_options:[
            {label:"一般",value:"一般"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"运动",value:"运动"},
            {label:"偏胖",value:"偏胖"},
            {label:"魁梧",value:"魁梧"},
            {label:"壮实",value:"壮实"}
        ],
      body_request_options:[
            {label:"不限",value:"不限"},
            {label:"一般",value:"一般"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"运动",value:"运动"},
            {label:"偏胖",value:"偏胖"},
            {label:"魁梧",value:"魁梧"},
            {label:"壮实",value:"壮实"}
        ],
      xingzuo_options:[
            {label:"白羊座",value:"白羊座"},
            {label:"金牛座",value:"金牛座"},
            {label:"双子座",value:"双子座"},
            {label:"巨蟹座",value:"巨蟹座"},
            {label:"狮子座",value:"狮子座"},
            {label:"处女座",value:"处女座"},
            {label:"天秤座",value:"天秤座"},
            {label:"天蝎座",value:"天蝎座"},
            {label:"射手座",value:"射手座"},
            {label:"摩羯座",value:"摩羯座"},
            {label:"水瓶座",value:"水瓶座"},
            {label:"双鱼座",value:"双鱼座"}
        ],
      family_options:[
            {label:"原生家庭",value:"原生家庭"},
            {label:"单亲家庭",value:"单亲家庭"}
        ],
      marital_status_options:[
            {label:"未婚",value:"未婚"},
            {label:"未婚有孩",value:"未婚有孩"},
            {label:"离婚无孩",value:"离婚无孩"},
            {label:"离婚有孩",value:"离婚有孩"},
        ],
      marital_status_request_options:[
            {label:"不限",value:"不限"},
            {label:"未婚",value:"未婚"},
            {label:"未婚有孩",value:"未婚有孩"},
            {label:"离婚无孩",value:"离婚无孩"},
            {label:"离婚有孩",value:"离婚有孩"},
        ],
      want_marry_options:[
            {label:"可以闪婚",value:"可以闪婚"},
            {label:"一年内",value:"一年内"},
            {label:"两年内",value:"两年内"},
            {label:"三年内",value:"三年内"},
            {label:"看情况",value:"看情况"},
        ],
      want_child_options:[
            {label:"想要孩子",value:"想要孩子"},
            {label:"想要多个孩子",value:"想要多个孩子"},
            {label:"看情况",value:"看情况"},
            {label:"丁克",value:"丁克"},
        ],
      want_child_request_options:[
            {label:"不限",value:"不限"},
            {label:"想要孩子",value:"想要孩子"},
            {label:"想要多个孩子",value:"想要多个孩子"},
            {label:"看情况",value:"看情况"},
            {label:"丁克",value:"丁克"},
        ],
      smoke_options:[
            {label:"不吸烟",value:"不吸烟"},
            {label:"稍微抽点",value:"稍微抽点"},
            {label:"正常吸烟",value:"正常吸烟"},
            {label:"特定场合会吸",value:"特定场合会吸"},
            {label:"抽得比较多",value:"抽得比较多"},
        ],
      smoke_request_options:[
            {label:"不限",value:"不限"},
            {label:"不吸烟",value:"不吸烟"},
            {label:"稍微抽点",value:"稍微抽点"},
            {label:"正常吸烟",value:"正常吸烟"},
            {label:"特定场合会吸",value:"特定场合会吸"},
            {label:"抽得比较多",value:"抽得比较多"},
        ],
      drink_options:[
            {label:"不喝酒",value:"不喝酒"},
            {label:"偶尔喝一点",value:"偶尔喝一点"},
            {label:"正常喝酒",value:"正常喝酒"},
            {label:"特定场合会喝",value:"特定场合会喝"},
            {label:"喝得比较多",value:"喝得比较多"},
        ],
      drink_request_options:[
            {label:"不限",value:"不限"},
            {label:"不喝酒",value:"不喝酒"},
            {label:"偶尔喝一点",value:"偶尔喝一点"},
            {label:"正常喝酒",value:"正常喝酒"},
            {label:"特定场合会喝",value:"特定场合会喝"},
            {label:"喝得比较多",value:"喝得比较多"},
        ],
      age_request_options:[
            {label:"不限",value:"不限"},
            {label:"25岁以下",value:"25岁以下"},
            {label:"25岁-30岁",value:"25岁-30岁"},
            {label:"30岁-35岁",value:"30岁-35岁"},
            {label:"35岁-40岁",value:"35岁-40岁"},
            {label:"40岁以上",value:"40岁以上"},
        ],
    }
  },
  methods:{
    //把发请求的这个action封装到一个函数里面
    //将来需要再次发请求，你只需要在调用这个函数即可
    async getData() {
      let id = '';
      
      if (this.$store.state.user.userInfo && typeof this.$store.state.user.userInfo.member !== 'undefined' && this.$store.state.user.userInfo.member.id){
        id = this.$store.state.user.userInfo.member.id;
      }else{
        this.$router.push({
          path:'/login'
        });
      }

      if (id){
        await this.$store.dispatch("member/getMemberDetail", {id:id});
        if (this.$store.state.member.member){
            this.member = this.$store.state.member.member
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
    },
    uploadedImages(uploadedImages){
            console.log('receive uploadedImages',uploadedImages);
        this.member.member_image = uploadedImages
        // uploadedImages.forEach((itm) => {
        //     let index = this.member.member_image.findIndex((it) => {
        //         return it.url == itm;
        //     });
        //     if (-1 == index || this.member.member_image.length <= index) {
        //         this.member.member_image.push({'url':itm})
        //     }
        // });
    },
    uploadedSingleImage(uploadedImage){
        this.member.profile_photo = uploadedImage;
    }
  },
  mounted() {
    this.$bus.$on('uploadedImages',this.uploadedImages);
    this.$bus.$on('uploadedSingleImage',this.uploadedSingleImage);
    this.getData();
  },
  
  computed:{
    //mapGetters里面的写法：传递的数组，因为getters计算是没有划分模块【home,search】
    //...mapGetters('member',["member"]),

    // income_request_options(){
    //     let income_request_options = [{label:"不限",value:"不限"}];
    //     this.income_options.forEach( (i) => {
    //         income_request_options.push(i);
    //     });
    //     // income_request_options.unshift({label:"不限",value:"不限"});
    //     console.log('income_request_options',income_request_options)
    //     return income_request_options;
    // }
  },
  beforeDestroy() {
    this.$bus.$off('uploadedImages');
    this.$bus.$off('uploadedSingleImage');
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

.tabs_navi .active{
    color:gray;
    background-color:black;
}
.tabs_navi ul{
    margin: 0 auto;
}
.tabs_navi ul li{
    padding:4px;
    margin-left:10px;
    width:30%;
    height:20px;
    border:1px solid lightgray;
    text-align:center;
}
</style>
