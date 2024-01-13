<template>

  <div id="app">

    <HeaderComponent></HeaderComponent>

     <div>
        <router-view :key="$route.path"></router-view>
     </div>

    <FooterComponent></FooterComponent>

  </div>

</template>

<!-- <TodoList :todos="todos" > </TodoList> -->

<script>
import HeaderComponent from "./components/Header"
import FooterComponent from "./components/Footer"
import  './assets/css/clear.css';
//import  './assets/css/home.css';
// import TodoList from './components/todo/TodoList.vue'
// import Student from "@/components/Student";
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

    // addTodo(todo){
    //   this.todos.unshift(todo)
    // },
    // triggerDone(id){
    //   this.todos.forEach((i)=>{
    //     if(i.id == id){
    //       i.done = !i.done
    //     }
    //   })
    // },
    // deleteTodo(id){
    //   this.todos = this.todos.filter( i=> i.id != id )
    // },
    // triggerAllTodo(value){
    //   this.todos.forEach( i => i.done = value )
    // },
    // editTodo(id,value){
    //   this.todos.forEach( i => {
    //       if(i.id == id){
    //           i.title = value
    //       }
    //   })
    // },
    // clearAllDone(){
    //   this.todos = this.todos.filter( i=> !i.done )
    // },
  },
  mounted() {
    // console.log('mounted');
    // this.handleCurrentChange(1);
    // this.$bus.$on('addTodo',this.addTodo)
    // this.$bus.$on('triggerDone',this.triggerDone)
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    // this.$bus.$on('triggerAllTodo',this.triggerAllTodo)
    // this.$bus.$on('clearAllDone',this.clearAllDone)
    // this.$bus.$on('editTodo',this.editTodo)
  }
  // ,
  // beforeDestroy() {
  //   this.$bus.$off('addTodo')
  //   this.$bus.$off('triggerDone')
  //   this.$bus.$off('deleteTodo')
  //   this.$bus.$off('triggerAllTodo')
  //   this.$bus.$off('clearAllDone')
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
}

</style>
