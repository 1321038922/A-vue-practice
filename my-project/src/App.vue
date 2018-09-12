<template>
  <div id="app">
    <div>
      <ul>
        <li><router-link :to="{name:'home'}">首页</router-link></li>
        <li><router-link :to="{name:'about',params:{id:'我叫参数'}}">关于</router-link></li>
        <li>
          <a href="/about/998">关于</a>
        </li>
        <li><router-link :to="{name:'login'}">登录</router-link></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
