<template>

  <!--    footer    -->
  <div id="footer" class="footer">

    <div>
      <ul class="footer_items_container">
          <li class="footer_item"> 
            <!-- <router-link to="/about"> -->
            Copyright ©2024 缘来网版权所有 
          <!-- </router-link> -->
          </li>
          <!-- <li class="footer_item "> <router-link to="/about">川ICP备2024030656 </router-link></li>
          <li class="footer_item "> <router-link to="/about">关于我们</router-link></li> -->
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
  margin: 0 auto;
  color:#4e6e8e;
  /* background-color: lightgray; */

  margin-top:10%;
  /*
    position: fixed;  将footer定位到屏幕底部
    left: 50%;  左边界与视口的中心对齐 
    bottom: 5%;  固定在底部 
    transform: translateX(-50%); 向左移动自身宽度的一半，使其水平居中 
  */


}
.footer .footer_items_container {
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
}
@media (max-width:789px){
  .footer_item {
    font-size:12px;
  }
}


</style>
