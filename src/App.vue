<template>
  <div id="app">
    <div class="content">
      <!--      左侧导航-->
      <LeftNav></LeftNav>
      <!--      右侧展示内容-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//引入重置样式
import '../public/css/base.css'
// 引入其余组件
import LeftNav from "@/components/LeftNav/LeftNav.vue";

export default {
  name: 'App',
  components: {
    LeftNav,
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: relative;
  //width: 1267px;
  //height: 618px;
  width: 100%;
  height: 100%;
  //margin: 20px auto;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
