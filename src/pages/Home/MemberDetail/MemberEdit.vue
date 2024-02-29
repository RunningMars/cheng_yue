<template>

<div class="content">
    <div style="background-color: #7d7777;height:1px;" ></div>
    <div class="member_info">



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
                    <li class="fl" v-show="member.age" >{{member.age}}岁</li>
                    <li class="fl" v-show="member.height" >{{member.height}}cm</li>
                    <li class="fl" v-show="member.city" >{{member.city}}</li>
                    <li class="fl" v-show="member.job" >{{member.job}}</li>
                </ul>
          </div>

          <div class="edit_area_form">

                <div style="margin-top:8px;margin-bottom:8px;">
                    <el-button type="primary"  icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
                </div>

                <ul class="tabs_navi">
                    <li :class="tab==1 ? 'active' : '' " @click="tab=1">我的信息</li>
                    <li :class="tab==2 ? 'active' : '' " @click="tab=2">择偶要求</li>
                
                </ul>
                <hr>
                <el-form ref="member" :model="member" label-width="auto">

                    <!-- TA的信息 -->
                    <div v-if="tab==1" class="member_info" >

                        <span class="title" style="font-size:20px;">我的信息</span>
                        <!-- 基本资料 -->
                        <div class="member_basic_info clearfix">

                            <div class="block_label fl">
                                <span class="">基本资料</span>
                            </div>

                            <div class="block_content fl clearfix">

                                <el-form-item 
                                label="上传头像" 
                                prop="profile_photo" 
                                :rules="[
                                    { required: true, message: '请上传您本人头像', trigger: 'blur' },
                                ]">
                                    <UploadSingleImageComponet v-model="member.profile_photo" ></UploadSingleImageComponet>
                                </el-form-item>
                          
                                <el-form-item 
                                label="昵称"  
                                prop="nick_name"  
                                :rules="[
                                    { required: true, message: '请设置您的昵称', trigger: 'blur' },
                                    { min: 1, max: 14, message: '长度在 1 到 14 个字符', trigger: 'blur' }
                                ]">
                                    <el-input style="width:190px;" v-model="member.nick_name"></el-input>
                                </el-form-item>

                                <!-- <el-form-item label="电话">
                                    <el-input style="width:320px;" v-model="member.mobile"></el-input>
                                </el-form-item> -->

                                <el-form-item 
                                label="性别"   
                                prop="sex"  
                                :rules="[
                                    { required: true, message: '请选择你的性别', trigger: 'blur' },
                                ]">
                                <el-radio v-model="member.sex" :label="1">男</el-radio>
                                <el-radio v-model="member.sex" :label="2">女</el-radio>
                                </el-form-item>
                
                                <el-form-item 
                                label="生日"  
                                prop="birth_day"  
                                :rules="[
                                    { required: true, message: '请输入您的生日', trigger: 'blur' },
                                ]">
                                    <el-date-picker
                                        v-model="member.birth_day"
                                        type="date"
                                        placeholder="选择日期"
                                        value-format="yyyy-MM-dd"
                                        > 
                                    </el-date-picker>
                                </el-form-item> 

                                <el-form-item 
                                label="当前城市"   
                                prop="city"  
                                :rules="[
                                    { required: true, message: '请选择您所在的城市', trigger: 'blur' },
                                ]">
                                    <el-input style="width:80px;" v-model="member.city"></el-input>
                                </el-form-item>
                
                                <el-form-item 
                                label="学历"    
                                prop="education_background"  
                                :rules="[
                                    { required: true, message: '请选择你的学历', trigger: 'blur' },
                                ]">
                                    <el-select v-model="member.education_background" placeholder="请选择">
                                        <el-option
                                            v-for="item in education_background_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item 
                                label="职业"     
                                prop="job"  
                                :rules="[
                                    { required: true, message: '请填写你的职业', trigger: 'blur' },
                                ]">
                                    <el-input style="width:100px;" v-model="member.job"></el-input>
                                </el-form-item>
                

                                <el-form-item 
                                label="年收入"    
                                prop="annual_income"  
                                :rules="[
                                    { required: true, message: '请选择你的年收入', trigger: 'blur' },
                                ]">
                                    <el-select v-model="member.annual_income" placeholder="请选择">
                                        <el-option
                                            v-for="item in income_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item 
                                label="住房情况" 
                                prop="asset_house"  
                                :rules="[
                                    { required: true, message: '请选择你的住房情况', trigger: 'blur' },
                                ]">
                                    <el-select v-model="member.asset_house" placeholder="请选择">
                                        <el-option
                                            v-for="item in house_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>
                
                                <el-form-item 
                                label="购车情况"    
                                prop="asset_car"  
                                :rules="[
                                    { required: true, message: '请选择你的购车情况', trigger: 'blur' },
                                ]">
                                    <el-select v-model="member.asset_car" placeholder="请选择">
                                    <el-option
                                        v-for="item in car_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="婚姻情况"    
                                prop="marital_status"  
                                :rules="[
                                    { required: true, message: '请选择你的婚姻情况', trigger: 'blur' },
                                ]">
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
                                    <el-select v-model="member.height" placeholder="请选择">
                                        <el-option
                                            v-for="item in height_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>      
                                </el-form-item>
                
                                <el-form-item label="体重kg">
                                    <el-input style="width:80px;" v-model="member.weight"></el-input>
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
                                    <el-input style="width:80px;" v-model="member.ethnic"></el-input>
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
                                    <el-select v-model="member.want_marry" placeholder="请选择">
                                    <el-option
                                        v-for="item in want_marry_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                

                                <el-form-item label="是否要孩子">
                                    <el-select v-model="member.want_child" placeholder="请选择">
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
                                    <el-input 
                                    type="textarea"
                                    :rows="2"
                                    v-model="member.interest">
                                    </el-input>
                                </el-form-item>

                                <el-form-item label="自我介绍">
                                    <el-input  type="textarea"
                                    :rows="2" v-model="member.about_me"></el-input>
                                </el-form-item>

                                <el-form-item label="希望你">
                                    <el-input  type="textarea"
                                    :rows="2" v-model="member.hope_you"></el-input>
                                </el-form-item>

                                <el-form-item label="择偶要求">
                                    <el-input  type="textarea"
                                    :rows="2" v-model="member.mating_requirement"></el-input>
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
                                
                                <el-form-item label="我的照片">
                                    <UploadMultiImageComponet v-model="member.member_image" :fileList="member.member_image"></UploadMultiImageComponet>
                                </el-form-item>
                            </div>
                        </div>

                    </div>
                
                    <!-- 择偶条件 -->
                    <div v-if="tab==2" class="member_info">
                        <div style="font-size:20px;margin-bottom:15px;">
                            <span  class="title" >择偶条件</span>
                        </div>
                    
                        
                        <!-- 基本资料 -->
                        <div class="member_basic_info clearfix">

                            <div class="block_label fl">
                                <span class="">基本信息</span>
                            </div>

                            <div class="block_content fl clearfix">

                                <el-form-item label="年龄">
                                    <el-select v-model="member.member_request.age_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in age_request_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>

                                    <!-- <div class="block">
                                        <el-slider
                                        v-model="member.member_request.age_request"
                                        range
                                        show-stops
                                        :min="20"
                                        :max="60">
                                        </el-slider>
                                    </div> -->
                                </el-form-item>

                                <el-form-item label="身高cm">
                                    <el-input style="width:80px;" v-model="member.member_request.height_request"></el-input>
                                </el-form-item>


                                <el-form-item label="体重kg">
                                    <el-input style="width:80px;" v-model="member.member_request.weight_request"></el-input>
                                </el-form-item>

                                <el-form-item label="体型">
                                    <el-select v-model="member.member_request.body_size_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in body_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="学历">
                                <el-select v-model="member.member_request.education_background_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in education_background_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="职业">
                                    <el-input style="width:100px;" v-model="member.member_request.job_request"></el-input>
                                </el-form-item>

                                <el-form-item label="年收入">
                                <el-select  v-model="member.member_request.annual_income_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in income_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="住房情况">
                                <el-select v-model="member.member_request.asset_house_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in house_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                </el-form-item>

                                <el-form-item label="购车情况">
                                    <el-select v-model="member.member_request.asset_car_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in car_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="工作地区">
                                    <el-input style="width:80px;" v-model="member.member_request.city_request"></el-input>
                                </el-form-item>

                                <el-form-item label="婚姻情况">
                                    <el-select v-model="member.member_request.marital_status_request" placeholder="请选择你的婚姻情况">
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
                                    <el-select v-model="member.member_request.want_child_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in want_child_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否吸烟">
                                    <el-select v-model="member.member_request.about_smoke_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in smoke_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="是否喝酒">
                                    <el-select v-model="member.member_request.about_drink_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in drink_request_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>

                                <!-- <el-form-item label="微信号">
                                    <el-input style="width:320px;" v-model="member.wechat_no"></el-input>
                                </el-form-item>
                                
                                <el-form-item label="邮箱">
                                    <el-input style="width:320px;" v-model="member.email"></el-input>
                                </el-form-item> -->
        
                            </div>
                            
                        </div>

                    </div>


                    <el-form-item class="sumbmit_button" >
                        <el-button type="primary" @click="save('member')">保存</el-button>
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
      rules: {
          nick_name: [
            { required: true, message: '请设置您的昵称', trigger: 'blur' },
            { min: 1, max: 14, message: '长度在 1 到 14 个字符', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择你所在的城市', trigger: 'change' }
          ],
          profile_photo: [
            { type: 'date', required: true, message: '请上传您本人的头像', trigger: 'change' }
          ],
          education_background: [
            { type: 'date', required: true, message: '请选择您的学历', trigger: 'change' }
          ],
          job: [
            { type: 'array', required: true, message: '请输入您的职业', trigger: 'change' }
          ],
          annual_income: [
            { type: 'array', required: true, message: '请选择您的年收入', trigger: 'change' }
          ],
          asset_house: [
            { type: 'array', required: true, message: '请选择您的住房信息', trigger: 'change' }
          ],
          asset_car: [
            { type: 'array', required: true, message: '请选择您的购车信息', trigger: 'change' }
          ],
          sex: [
            { required: true, message: '请选择您的性别', trigger: 'change' }
          ],
          birth_day: [
            { required: true, message: '请输入您的生日', trigger: 'blur' }
          ],
          marital_status: [
            { required: true, message: '请选择您的婚姻情况', trigger: 'blur' }
          ]
        },

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
            {label:"准备买车",value:"准备买车"},
            {label:"有车",value:"有车"}
        ],
      car_request_options:[
            {label:"不限",value:"不限"},
            {label:"暂无",value:"暂无"},
            {label:"准备买车",value:"准备买车"},
            {label:"有车",value:"有车"}
        ],
      house_options:[
            {label:"暂无",value:"暂无"},
            {label:"准备买房",value:"准备买房"},
            {label:"有房",value:"有房"}
        ],
      house_request_options:[
            {label:"不限",value:"不限"},
            {label:"暂无",value:"暂无"},
            {label:"准备买房",value:"准备买房"},
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
        height_options:[
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

    async save(formName){
        let res = null;
        this.$refs[formName].validate((valid) => {
            if (valid) {
                res = true;
                console.log(' submit validate! true');
            } else {
                res = false;
                console.log('error submit validate!!');
            }
            return res;
        });
        
        console.log('res',res);

        if (!res)
        {
          return false;
        }

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
    console.log('beforeDestroy MemberEdit')
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

.edit_area_form .title {
  margin-left:30%;
  margin-bottom:30px;
}

.member_basic_info .block_label {
  width:130px;
}
.member_basic_info .block_content {
  width:550px;
  /* width:100px; */
}
.content .edit_area_form .member_info {
    margin-top:20px;
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

.tabs_navi {
    margin-left:20%;
    margin-top:12px;
    margin-bottom:12px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    /* background-color:black; */
}

.tabs_navi .active{
    color:gray;
    background-color:black;
}

.tabs_navi li{
    padding:1px;
    margin-left:10px;
    margin-right:10px;
    width:8%;
    /* height:20px; */
    border:1px solid lightgray;
    text-align:center;
    border-radius: 10px;
}


.sumbmit_button {
    display: flex;
    /* justify-content: flex-start;
    align-items: center; */
    flex-wrap:wrap;
    justify-content:space-evenly;
}
</style>
