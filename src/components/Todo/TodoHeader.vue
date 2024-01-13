<template>
  <div class="todo_add">
    <input type="text" @keyup.enter="addTodo" v-model='new_title' placeholder="请输入.."/>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name: 'TodoHeader',
    data(){
      return {
        new_title:""
      }
    },
    methods:{
      addTodo()
      {
        //console.log('addTodo...',this.new_title)
        if (!this.new_title)
        {
          return
        }
        const todo = {
          id:nanoid(),
          title:this.new_title,
          done:false
        }

        //console.log(this)

        this.$parent.todos.unshift(todo)

        this.new_title = ""
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 0;
  color: #42b983;
}
</style>
