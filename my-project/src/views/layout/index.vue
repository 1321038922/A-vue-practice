<template>
    <div class="container">
        <div class="header">
            <h1>我是头部</h1>
        </div>
        <div class="nav">
            
        </div>
        <div class="main-content"><router-view></router-view></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .header {
        padding-left: 200px;
        background-color: #f0f;
        text-align: center;
    }
    .nav {
        width: 200px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 998;
        background: #273647
    }
    .main-content {
        padding-left: 200px;
        background: #f0f;
    }
</style>