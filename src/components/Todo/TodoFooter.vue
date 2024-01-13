<template>
  <div class="todo_footer">
    <span>{{ doneTotal }}已完成</span> <span></span><span></span><span></span><span></span>
    <span>{{ todos.length }}全部</span>
      <br/>
    <input type="checkbox" v-model="isAll" /><span>全选</span>


    <span></span> <span></span><span></span><span></span>
    <button  style="color:red" @click="handleClearAllDone"> 删除所有已完成</button>
  </div>
</template>

<script>
export default {
  name: 'TodoFooter',
  props:["todos"],
  methods:{
    handleClearAllDone(){
      if (confirm("确定删除吗?")){
        this.$bus.$emit('clearAllDone')
      }
    }
  },
  computed:{
    doneTotal(){
        return this.todos.reduce((pre,current)=>{
            return pre + (current.done ? 1 : 0)
        },0)
    },
    isAll:{
      get() {
        if (this.todos.length)
        {
          return this.doneTotal == this.todos.length
        }else{
          return false
        }
      },
      set(value) {
        this.$bus.$emit('triggerAllTodo',value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
