<template>
  <div>
    <h1>我是关于</h1>
    {{$route.params.id}}
    <h1>
      我是动态路由参数{{$route.params.id}}
    </h1>
  </div>
</template>

<script>
  export default {
    name: "about",
    created() {
      console.log(this.$router)
      console.log(this.$route.params.id)
    }
  }
</script>

<style scoped>

</style>
