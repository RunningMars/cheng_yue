<!--单图上传组件/按钮-->
<template>
    <el-upload
      class="upload-demo"
      action="/api/uploadImage"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="uploaded"
      multiple
      :limit="5"
      list-type="picture">
      <el-button size="small" type="primary">点击上传图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</template>

<script>
  export default {
    name:"UploadMultiImageComponet",
    data() {
      return {
        // fileList: [],
      };
    },
    props: ["fileList"],
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
        this.$bus.$emit('uploadedImages',fileList)
      },
      handlePreview(file) {
        console.log(file);
      },
      uploaded(response,file, fileList) {
        console.log(file, fileList);
        fileList.forEach((i)=>{
          // console.log(i.response)
          if (i.response && i.response.result.url)
          {
            i.url = i.response.result.url
          }
        });
        this.$bus.$emit('uploadedImages',fileList)
        // let imgs = [];
        // fileList.forEach( i => {
        //   if (i.response.status_code == 200){
        //     imgs.push(i.response.result.url);
        //   }
        //   return true;
        // });

        // this.$bus.$emit('uploadedImages',imgs)
      }
    },
    mounted(){
      console.log('fileList001',this.fileList);
    }
  }
</script>