<template>
  <div class="todo_item">
    <li>
      <label>
        <input
                type="checkbox"
                :checked="todo.done"
                @change="triggerHandler(todo.id)"
        />
        <span  v-show="!todo.isEdit" >{{ todo.title }}</span>
        <input
                type="text"
                ref="editTodoInput"
                v-show="todo.isEdit"
                :value="todo.title"
                @blur="handleBlur(todo,$event)"
        />
      </label>
      <button v-show="!todo.isEdit" @click="handleEditTodo(todo)">编辑</button>
      <button @click="handleDeleteTodo(todo.id)">删除</button>
    <li/>
  </div>

</template>

<script>
export default {
  name: 'TodoItem',
  props: ["todo"],
  methods:{
    triggerHandler(id){
      this.$bus.$emit('triggerDone',id)
    },
    handleDeleteTodo(id){
      if (confirm("确定删除吗?")){
        this.$bus.$emit('deleteTodo',id)
      }
    },
    handleEditTodo(todo)
    {
      if(todo.hasOwnProperty.call('isEdit')) {
        todo.isEdit = true
      }else{
        this.$set(todo,'isEdit',true)
      }
      this.$nextTick(function(){
        this.$refs.editTodoInput.focus()
      })
    },
    handleBlur(todo,event)
    {
      if(!event.target.value)
      {
        alert('输入不能为空!')
        todo.isEdit = false
        return true
      }
      this.$bus.$emit('editTodo',todo.id,event.target.value)
      todo.isEdit = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
