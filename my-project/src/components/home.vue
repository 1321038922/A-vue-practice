<template>
    <div>
        <h1>我是首页</h1>
        <button @click="handleGetdate">发送数据</button>
        <button @click="GetJsonp">发送jsonp数据</button>
        <button @click="getJsonp2">用插件发送</button>
        <button @click="getNoSimple">post非简单请求</button>
    </div> 
</template>

<script>
import axios from "axios";
export default {
  name: "home",
  methods: {
    handleGetdate() {
      axios.get("http://localhost:3000/getMsg",{
          withCredentials:true
      }
      ).then(res => {
          console.log(res);
        }).catch(err => {
          console.log("err", err);
        });
    },
    GetJsonp() {
    let script = document.createElement("script");
    let body = document.body;
    script.src = "http://localhost:3000/getJsonp?callback=getData";
    body.appendChild(script);
    },
    getJsonp2() {
        jsonp('http://localhost:3000/getJsonp',{
            param:'callback',
            name:'getData'
        },function getData(res){
            console.log(res)
        })
    },
    getNoSimple(){
        axios.post('http://localhost:3000/nosimple',{username:'yao'},{withCredentials:true}).then(res=>{
            console.log(res)
        })
    }
  }
};
</script>

<style scoped>
</style>
