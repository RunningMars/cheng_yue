<template>
  <div class="todo_list">
    <span>{{$store.state.user.name}}</span>
    <TodoHeader></TodoHeader>
    <ul>
      <TodoItem
              v-for="todo in todos"
              :key="todo.id"
              :todo="todo"
             >
      </TodoItem>
    </ul>
    <TodoFooter :todos="todos" ></TodoFooter>
  </div>
</template>

<script>
    import TodoHeader from "./TodoHeader"
    import TodoFooter from "./TodoFooter"
    import TodoItem from "./TodoItem"
    export default {
        name: 'TodoList',
        components:{
            TodoHeader,
            TodoItem,
            TodoFooter
        },
        props: ["todos"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
