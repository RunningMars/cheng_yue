<template>
  <div class="stu">
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
    <h1>address:{{ address }}</h1>

    <h1>vuex address:{{ $store.state.user.address }}</h1>
    <h1>vuex name:{{ $store.state.user.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'StudentComponent',
  props: {
    name: String,
    age: String,
    address: String
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
