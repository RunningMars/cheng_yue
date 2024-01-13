<template>

  <!--    footer    -->
  <div class="footer">

    <div>
      <ul class="footer_items">
          <li class="footer_item "> <router-link to="/about">联系方式</router-link></li>
          <li class="footer_item "> <router-link to="/about">备案</router-link></li>
          <li class="footer_item "> <router-link to="/about">关于我们</router-link></li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  name: 'FooterComponent',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  width:1190px;
  margin: 0 auto;
  margin-top:100px;
  margin-bottom:10px;
  background-color: lightgray;
}
.footer .footer_items {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
}
</style>
