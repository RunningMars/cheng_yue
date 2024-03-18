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
                <div class="right_side_box fl">
                    <div class="member_name">{{member.nick_name}}</div>

                    <ul class="member_abstract clearfix">
                        <li class="fl" v-show="member.age" >{{member.age}}岁</li>
                        <li class="fl" v-show="member.height" >{{member.height}}cm</li>
                        <li class="fl" v-show="member.city" >{{member.city}}</li>
                        <li class="fl" v-show="member.job" >{{member.job}}</li>
                    </ul>
                </div>
                
          </div>

          <div class="edit_area_form">

                <div style="margin-top:8px;margin-bottom:8px;">
                    <el-button type="primary"  icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
                </div>

                <ul class="tabs_navi">
                    <div>
                        <li :class="tab==1 ? 'active' : '' " @click="tab=1">我的信息</li>
                    </div>
                    <div>
                        <li :class="tab==2 ? 'active' : '' " @click="tab=2"><span>择偶要求</span></li>
                    </div>
                    
                
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
                                    <el-input  v-model="member.mobile"></el-input>
                                </el-form-item> -->

                                <el-form-item 
                                label="性别"   
                                prop="sex"  
                               
                                :rules="[
                                    { required: true, message: '请选择你的性别', trigger: 'blur' },
                                ]">
                                <el-radio v-model="member.sex"  @change="changeSex" :label="1">男</el-radio>
                                <el-radio v-model="member.sex"  @change="changeSex" :label="2">女</el-radio>
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
                                    <el-select v-model="member.education_background" placeholder="请选择" clearable>
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

                                <el-form-item label="小孩情况"    
                                prop="child_status"  
                                :rules="[
                                    { required: true, message: '请选择你的小孩情况', trigger: 'blur' },
                                ]">
                                    <el-select v-model="member.child_status" placeholder="请选择你的小孩情况">
                                    <el-option
                                        v-for="item in child_status_options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                    </el-select>
                                </el-form-item>
                                
                                <el-form-item label="身高">
                                    <el-select v-model="member.height" placeholder="请选择您的身高">
                                        <el-option
                                            v-for="item in height_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>      
                                </el-form-item>
                
                                <el-form-item label="体重">
                                    <el-select v-model="member.weight" placeholder="请选择您的体重">
                                        <el-option
                                            v-for="item in weight_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>      
                                </el-form-item>
            

                                <el-form-item label="体型">
                                    <el-select v-if="member.sex == 1" v-model="member.body_size" placeholder="请选择">
                                        <el-option
                                            v-for="item in body_boy_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-select v-if="member.sex == 2" v-model="member.body_size" placeholder="请选择">
                                        <el-option
                                            v-for="item in body_girl_options"
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
                                <el-input  v-model="member.brother_sister" style="width:190px;" placeholder="请填写你的兄弟姐妹情况"></el-input>
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
                                    <el-select style="width:100px;"  v-model="member.member_request.age_min_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in age_request_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span style="color:grey;"> 至 </span>
                                    <el-select style="width:100px;"  v-model="member.member_request.age_max_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in age_request_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="身高">
                                    <el-select v-model="member.member_request.height_min_request" style="width:100px;" placeholder="身高(起)" clearable size="small">
                                        <el-option
                                            v-for="item in height_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span style="color:grey;"> 至 </span>
                                    <el-select v-model="member.member_request.height_max_request" style="width:100px;"  placeholder="身高(止)" clearable size="small">
                                        <el-option
                                            v-for="item in height_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>


                                <el-form-item label="体重">
                                    <el-select v-model="member.member_request.weight_min_request" style="width:100px;" placeholder="身高(起)" clearable size="small">
                                        <el-option
                                            v-for="item in weight_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <span style="color:grey;"> 至 </span>
                                    <el-select v-model="member.member_request.weight_max_request" style="width:100px;"  placeholder="身高(止)" clearable size="small">
                                        <el-option
                                            v-for="item in weight_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>

                                <el-form-item label="体型">
                                    <el-select v-if="member.sex == 1" v-model="member.member_request.body_size_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in body_girl_request_options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <el-select v-if="member.sex == 2" v-model="member.member_request.body_size_request" placeholder="请选择">
                                        <el-option
                                            v-for="item in body_boy_request_options"
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
                                <!-- <el-form-item label="子女情况">
                                    <el-select v-model="member.member_request.child_status_request" placeholder="请选择">
                                    <el-option
                                        v-for="item in child_status_request_options"
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
                                    <el-input v-model="member.wechat_no"></el-input>
                                </el-form-item>
                                
                                <el-form-item label="邮箱">
                                    <el-input  v-model="member.email"></el-input>
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
            {label:"5w 以上",value:5},
            {label:"10w 以上",value:10},
            {label:"15w 以上",value:15},
            {label:"20w 以上",value:20},
            {label:"30w 以上",value:30},
            {label:"50w 以上",value:50},

            // {label:"不限",value:"不限"},
            // {label:"5w-10w",value:"5w-10w"},
            // {label:"10w-15w",value:"10w-15w"},
            // {label:"15w-20w",value:"15w-20w"},
            // {label:"20w-30w",value:"20w-30w"},
            // {label:"30w-50w",value:"30w-50w"},
            // {label:"50w以上",value:"50w以上"},
        ],
      car_options:[
            {label:"未购车",value:"未购车"},
            {label:"已购车",value:"已购车"}
        ],
      car_request_options:[
            {label:"不限",value:"不限"},
            {label:"未购车",value:"未购车"},
            {label:"已购车",value:"已购车"}
        ],
      house_options:[
            {label:"和家人同住",value:"和家人同住"},
            {label:"已购房",value:"已购房"},
            {label:"租房",value:"租房"},
            {label:"打算婚后购房",value:"打算婚后购房"},
            {label:"住在单位宿舍",value:"住在单位宿舍"},
        ],
      house_request_options:[
            {label:"不限",value:"不限"},
            {label:"和家人同住",value:"和家人同住"},
            {label:"已购房",value:"已购房"},
            {label:"租房",value:"租房"},
            {label:"打算婚后购房",value:"打算婚后购房"},
            {label:"住在单位宿舍",value:"住在单位宿舍"},
        ],
        child_status_options:[
            {label:"没有小孩",value:"没有小孩"},
            {label:"有小孩且住在一起",value:"有小孩且住在一起"},
            {label:"有小孩且偶尔会一起住",value:"有小孩且偶尔会一起住"},
            {label:"有小孩但不在身边",value:"有小孩但不在身边"},
        ],
        child_status_request_options:[
            {label:"不限",value:"不限"},
            {label:"没有小孩",value:"没有小孩"},
            {label:"有小孩且住在一起",value:"有小孩且住在一起"},
            {label:"有小孩且偶尔会一起住",value:"有小孩且偶尔会一起住"},
            {label:"有小孩但不在身边",value:"有小孩但不在身边"},
        ],
      education_background_options:[
            {label:"高中",value:"高中"},
            {label:"中专",value:"中专"},
            {label:"大专",value:"大专"},
            {label:"本科",value:"本科"},
            {label:"硕士",value:"硕士"},
            {label:"博士",value:"博士"},
            {label:"博士后",value:"博士后"}
        ],
      education_background_request_options:[
            {label:"不限",value:"不限"},
            {label:"高中",value:"高中"},
            {label:"中专",value:"中专"},
            {label:"大专",value:"大专"},
            {label:"本科",value:"本科"},
            {label:"硕士",value:"硕士"},
            {label:"博士",value:"博士"},
            {label:"博士后",value:"博士后"}
        ],
        body_options:[],
        body_boy_options:[
            {label:"一般",value:"一般"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"运动",value:"运动"},
            {label:"偏胖",value:"偏胖"},
            {label:"魁梧",value:"魁梧"},
            {label:"壮实",value:"壮实"}
        ],
        body_girl_options:[
            {label:"一般",value:"一般"},
            {label:"保密",value:"保密"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"苗条",value:"苗条"},
            {label:"运动",value:"运动"},
            {label:"丰满",value:"丰满"},
            {label:"偏胖",value:"偏胖"},
        ],
        body_boy_request_options:[
            {label:"不限",value:"不限"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"运动",value:"运动"},
            {label:"偏胖",value:"偏胖"},
            {label:"魁梧",value:"魁梧"},
            {label:"壮实",value:"壮实"}
        ],
        body_girl_request_options:[
            {label:"不限",value:"不限"},
            {label:"保密",value:"保密"},
            {label:"偏瘦",value:"偏瘦"},
            {label:"苗条",value:"苗条"},
            {label:"运动",value:"运动"},
            {label:"丰满",value:"丰满"},
            {label:"偏胖",value:"偏胖"},
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
            {label:"离异",value:"离异"},
            {label:"丧偶",value:"丧偶"},
        ],
      marital_status_request_options:[
            {label:"不限",value:"不限"},
            {label:"未婚",value:"未婚"},
            {label:"离异",value:"离异"},
            {label:"丧偶",value:"丧偶"},
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
            {label:"视情况而定",value:"视情况而定"},
            {label:"不想要孩子",value:"不想要孩子"},
        ],
      want_child_request_options:[
            {label:"不限",value:"不限"},
            {label:"想要孩子",value:"想要孩子"},
            {label:"视情况而定",value:"视情况而定"},
            {label:"不想要孩子",value:"不想要孩子"},
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
    //   age_request_options:[
    //         {label:"不限",value:"不限"},
    //         {label:"25岁以下",value:"25岁以下"},
    //         {label:"25岁-30岁",value:"25岁-30岁"},
    //         {label:"30岁-35岁",value:"30岁-35岁"},
    //         {label:"35岁-40岁",value:"35岁-40岁"},
    //         {label:"40岁以上",value:"40岁以上"},
    //     ],
        height_options:[
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
      weight_options:[
            {label:"35kg",value:35},
            {label:"36kg",value:36},
            {label:"37kg",value:37},
            {label:"38kg",value:38},
            {label:"39kg",value:39},
            {label:"40kg",value:40},
            {label:"41kg",value:41},
            {label:"42kg",value:42},
            {label:"43kg",value:43},
            {label:"44kg",value:44},
            {label:"45kg",value:45},
            {label:"46kg",value:46},
            {label:"47kg",value:47},
            {label:"48kg",value:48},
            {label:"49kg",value:49},
            {label:"50kg",value:50},
            {label:"51kg",value:51},
            {label:"52kg",value:52},
            {label:"53kg",value:53},
            {label:"54kg",value:54},
            {label:"55kg",value:55},
            {label:"56kg",value:56},
            {label:"57kg",value:57},
            {label:"58kg",value:58},
            {label:"59kg",value:59},
            {label:"60kg",value:60},
            {label:"61kg",value:61},
            {label:"62kg",value:62},
            {label:"63kg",value:63},
            {label:"64kg",value:64},
            {label:"65kg",value:65},
            {label:"66kg",value:66},
            {label:"67kg",value:67},
            {label:"68kg",value:68},
            {label:"69kg",value:69},
            {label:"70kg",value:70},
            {label:"71kg",value:71},
            {label:"72kg",value:72},
            {label:"73kg",value:73},
            {label:"74kg",value:74},
            {label:"75kg",value:75},
            {label:"76kg",value:76},
            {label:"77kg",value:77},
            {label:"78kg",value:78},
            {label:"79kg",value:79},
            {label:"80kg",value:80},
            {label:"81kg",value:81},
            {label:"82kg",value:82},
            {label:"83kg",value:83},
            {label:"84kg",value:84},
            {label:"85kg",value:85},
            {label:"86kg",value:86},
            {label:"87kg",value:87},
            {label:"88kg",value:88},
            {label:"89kg",value:89},
            {label:"90kg",value:90},
            {label:"91kg",value:91},
            {label:"92kg",value:92},
            {label:"93kg",value:93},
            {label:"94kg",value:94},
            {label:"95kg",value:95},
            {label:"96kg",value:96},
            {label:"97kg",value:97},
            {label:"98kg",value:98},
            {label:"99kg",value:99},
            {label:"100kg",value:100},
            {label:"101kg",value:101},
            {label:"102kg",value:102},
            {label:"103kg",value:103},
            {label:"104kg",value:104},
            {label:"105kg",value:105},
            {label:"106kg",value:106},
            {label:"107kg",value:107},
            {label:"108kg",value:108},
            {label:"109kg",value:109},
            {label:"110kg",value:110},
            {label:"111kg",value:111},
            {label:"112kg",value:112},
            {label:"113kg",value:113},
            {label:"114kg",value:114},
            {label:"115kg",value:115},
            {label:"116kg",value:116},
            {label:"117kg",value:117},
            {label:"118kg",value:118},
            {label:"119kg",value:119},
            {label:"120kg",value:120},
            {label:"121kg",value:121},
            {label:"122kg",value:122},
            {label:"123kg",value:123},
            {label:"124kg",value:124},
            {label:"125kg",value:125},
            {label:"126kg",value:126},
            {label:"127kg",value:127},
            {label:"128kg",value:128},
            {label:"130kg",value:130},
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
        
        //console.log('res',res);

        if (!res)
        {
          return false;
        }

        //console.log('保存 this.member param',this.member);

        let response = await reqUpdateMemberDetail({...this.member});

        if (response.status_code == 200) {
            
            this.$message({
                message: response.message,
                type: 'success',
                duration:1000
            }); 
            this.getData();   
        }else{
            if (response.message){
                this.$message({
                    message: response.message,
                    type: 'warning',
                    duration:2000
                });     
            }
                 
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
    },
    changeSex(v){
        console.log('changeSex');
        this.member.body_size = null;
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

.edit_area_form .title {
  margin-left:30%;
  margin-bottom:30px;
}

.member_basic_info .block_label {
  width:130px;
}
.member_basic_info .block_content {
  width:100%;
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
  .member_header .member_abstract{
  /* margin-top : 95px; */
  
    margin-top : 10px;
    margin-left : 10px;
  }
}
</style>
