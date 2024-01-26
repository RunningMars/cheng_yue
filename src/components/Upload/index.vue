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
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
</template>

<script>
  export default {
    name:"UploadImageComponet",
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
        let imgs = [];
        fileList.forEach( i => {
          if (i.response.status_code == 200){
            imgs.push(i.response.result.url);
          }
          return true;
        });

        this.$bus.$emit('uploadedImages',imgs)
      }
    }
  }
</script>