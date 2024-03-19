<template>
  <div class="hello">

    <div style="margin-top:8px;margin-bottom:8px;">
      <el-button type="primary"  icon="el-icon-arrow-left" @click="$router.back()" size="small" round>返回</el-button>
    </div>
    <div style="margin-left:5%;text-align:center;">
      <h3> 红娘联系方式  </h3>
      <h4> 微信: 13666288348  </h4>
      <h4> 手机: 13666288348  </h4>
    </div>

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
