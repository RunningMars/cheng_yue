<!--单图上传组件/按钮-->
<template>
    <el-upload
      class="upload-demo"
      action="/api/uploadImage"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :on-success="uploaded"
      list-type="picture">
      <el-button size="small" type="primary">点击上传图片</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5MB</div>
    </el-upload>
</template>

<script>
  export default {
    name:"UploadSingleImageComponet",
    data() {
      return {
        fileList: [],
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      uploaded(response,file, fileList) {
        let img = '';
        fileList.forEach( i => {
          if (i.response.status_code == 200){
            img = i.response.result.url;
          }
          return true;
        });

        this.$bus.$emit('uploadedSingleImage',img)
      }
    }
  }
</script>