<template>

  <div id="app" class="app_container">

    <HeaderComponent></HeaderComponent>

     <div  class="router-view">
        <router-view :key="$route.path"></router-view>
     </div>

    <FooterComponent></FooterComponent>

  </div>

</template>

<script>
import HeaderComponent from "./components/Header"
import FooterComponent from "./components/Footer"
import  './assets/css/clear.css';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  },
  data(){
    return {
    }
  },
  methods:{
  },
  mounted() {
    // console.log('mounted');
    // this.$bus.$on('editTodo',this.editTodo)
  }
  // ,
  // beforeDestroy() {
  //   this.$bus.$off('editTodo')
  // }
}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin: 0;
	position: absolute;
  top:0;
  right: 0;
  bottom: 0;
  left: 0;
  

}
.app_container {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}
.router-view {
  flex: 1;
}

</style>
