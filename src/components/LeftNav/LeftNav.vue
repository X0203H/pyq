<template>
  <div class="left-content" :style="widths">
    <div class="title">
      <div class="logo"><img src="/image/private/logo.png" alt=""></div>
      <span v-if="text">朋友圈助手</span>
    </div>
    <!--        侧边栏-->
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
            default-active="/private"
            class="el-menu-vertical-demo"
            :router='true'
            @open="handleOpen"
            :collapse="isColl"
            @close="handleClose">
          <el-menu-item index="/private">
            <i class="el-icon-s-cooperation"></i>
            <span slot="title">私有素材库</span>
          </el-menu-item>
          <el-menu-item index="/library">
            <i class="el-icon-s-grid"></i>
            <span slot="title">页面管理-文库页</span>
          </el-menu-item>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>报表</span>
            </template>
            <!--            子导航-->
            <el-menu-item-group>
              <el-menu-item index="1-1">文章使用统计报表</el-menu-item>
              <el-menu-item index="1-2">机构使用统计报表</el-menu-item>
              <el-menu-item index="1-3">业务人员使用统计报表</el-menu-item>
              <el-menu-item index="1-4">导出报表列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import EventBus from "@/eventBus";

export default {
  name: "LeftNav",
  data() {
    return {
      isColl: '',
      widths: {
        width: ''
      },
      // 文字开关
      text: '',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {
    EventBus.$on('coll', (value, wid, text) => {
      this.isColl = value;
      this.widths.width = wid
      this.text = text
      // console.log(this.isColl, this.widths, this.text)
    })
  }
}
</script>

<style lang="scss" scoped>
.left-content {
  width: 240px;
  //width: 64px;
  //height: 618px;
  background-color: #304156;
  transition: all .4s;

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .title {
    display: flex;
    align-items: center;
    width: 240px;
    height: 42px;
    background-color: #2b2f3a;

    img {
      margin-right: 5px;
      margin-left: 20px;
    }

    span {
      font-size: 16px;
      font-weight: bold;
      color: #fff;
    }
  }

  ::v-deep .el-col {
    //width: 169px;
    background-color: #304156;

    .el-menu-vertical-demo {
      background-color: #304156;

      .el-menu {
        background-color: #304156;

        li {
          color: #bfcbd9;
          //min-width: 240px;
        }
      }

      .active {
        color: #409eff !important;
      }

      li {
        span {
          color: #bfcbd9;
        }
      }
    }
  }
}
</style>