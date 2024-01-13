<template>
  <div class="home">
    <h1> home page</h1>
    <div class="content"></div>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>



<!--          <h1> home page content</h1>-->
          <!--    <el-row>-->
          <!--      <el-button>默认按钮</el-button>-->
          <!--      <el-button type="primary">主要按钮</el-button>-->
          <!--      <el-button type="success">成功按钮</el-button>-->
          <!--      <el-button type="info">信息按钮</el-button>-->
          <!--      <el-button type="warning">警告按钮</el-button>-->
          <!--      <el-button type="danger">危险按钮</el-button>-->
          <!--    </el-row>-->
     
<!--      <TodoList :todos="todos" > </TodoList>-->
<!--      <div>-->
<!--          <router-link to="/home">主页</router-link>-->
<!--      </div>-->
<!--      <div>-->
<!--          <router-link to="/about">关于</router-link>-->
<!--      </div>-->
<!--      <div>-->
<!--          <div>-->
<!--              <router-view></router-view>-->
<!--          </div>-->
<!--      </div>-->
</template>

<script>
export default {
  name: 'TestPage',
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
