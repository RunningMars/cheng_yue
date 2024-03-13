<template>
  <div class="hello">

    <div style="margin-top:8px;margin-bottom:8px;">
      <el-button type="primary"  icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
    </div>
    <h3> About page  </h3>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
