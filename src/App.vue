<template>
  <div id="app" >

    <div id='overlay' v-if='httpCount!=0'>
      <img src="./img/animal.gif" alt="">
    </div>
    <div id='container'>
      <header class='userName'></header>
      <div class='headerContainer'>
        <!-- <ul class="headerBreadcrumb" v-if="breadcrumb">
          <li v-for="(item, $index) in breadcrumb " track-by="$index">{{item}}<i v-if="$index+1!=breadcrumb.length" class="el-icon-arrow-right"></i></li>
        </ul> -->
        <div class="userInfo">
          你好, 旅行者
        </div>
      </div>
      <main>
        <!-- <header></header> -->
        <div class='viewContainer'>
          <router-view></router-view>
        </div>
      </main>
      <nav id="sidebar" >
        <header>
          <a class='logo'><i class='sprite sprite-house'></i></a>
          <span class="sys_title">Dylan的小屋</span>
        </header>
        <div class='sourceSearch'>
              <div class='searchContainer'>
                <input type="text" placeholder="搜索菜单">
              </div>
        </div>
          <el-menu @open="handleOpen" @close="handleClose" @select="handleNodeClick" class='menu_tree'>
              <el-menu-item index="/user" ><i class='sprite sprite-Pokeball'></i>个人中心</el-menu-item>
              <el-submenu index="css" >
                <template slot="title"><i class="sprite sprite-css"></i>CSS</template>
                <el-menu-item index="/columns" >
                  css3 columns
                </el-menu-item>
              </el-submenu>
              <el-submenu index="webAssembly" >
                <template slot="title"><i class="sprite sprite-rocket"></i>WebAssembly</template>
                <el-menu-item index="/webAssemblyCartoon" >
                  A cartoon intro
                </el-menu-item>
                <el-menu-item index="/JITCompilers" >
                  JIT Compilers
                </el-menu-item>
              </el-submenu>
          </el-menu>
      </nav>
    </div>
  </div>
</template>
<script>

import store from './store'

export default {
  name: 'app',
  data () {
    return {
      user:{
        name:"Dylan"
      }
    }
  },
  created(){
    //get user info

  },
  methods: {
    /*handleNodeClick(data) {
      if(data.url){
        this.$router.push(data.url)
      }
    },*/
    handleNodeClick(url) {
      if(url){
        this.$router.push(url)
      }
    },
    checkPermission(rightAccess){
      return this.userPermissions.indexOf(rightAccess)!=-1;
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  store,
  computed:{
    httpCount(){
      return this.$store.state.httpRequestCount;
    },
    userPermissions(){
      return this.$store.state.permission;
    },
    breadcrumb(){
      return this.$store.state.breadcrumb;
    },
    currentRoute(){
      return this.$store.state.currentRoute;
    },
    duoshuourl(){
      return 'baredylan.com/#'+this.currentRoute.path;
    }
  },
  mounted(){
    this.$router.push("/user");
  }
}
</script>
<style>
  @import 'css/main.css';

  @import './css/font-awesome/css/font-awesome.min.css';

  @import 'css/iconSet.css';
  
</style>
<style scoped lang='less'>
  .menu_tree{
    i{
      display: inline-block;
      position: relative;
      left: -13px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
