<template>
  <div class="header">
    <div class="left">
      <!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <i class="el-icon-s-fold" style="margin-left: 5px" @click="show" v-if="!showicon"></i>
      <i class="el-icon-s-unfold" style="margin-left: 5px" @click="show" v-else></i>
      <!--      </el-radio-group>-->
      <!--      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
      <!--        <el-radio-button :label="false">展开</el-radio-button>-->
      <!--        <el-radio-button :label="true">收起</el-radio-button>-->
      <!--      </el-radio-group>-->
    </div>
    <ul class="right">
      <li><i class="el-icon-search"></i></li>
      <li><i class="el-icon-close-notification"></i></li>
      <li><img src="/image/private/pic01.png" alt=""><span>银保业务员版</span></li>
      <li><span @click="Exit">退出</span></li>
    </ul>
  </div>
</template>

<script>
import EventBus from "@/eventBus";

export default {
  name: "HeaDer",
  data() {
    return {
      // 控制侧边栏按钮
      isCollapse: false,
      // 控制图标的显示
      showicon: false,
      // 发送过去的侧边栏宽度
      wid: '64px',
      // logo文字的显示与隐藏
      textNone: true
    }
  },
  methods: {
    show() {
      this.isCollapse = !this.isCollapse
      this.showicon = !this.showicon
      this.textNone = !this.textNone
      if (this.isCollapse == true) {
        this.wid = '64px'
      }
      if (this.isCollapse == false) {
        this.wid = '240px'
      }
      EventBus.$emit('coll', this.isCollapse, this.wid, this.textNone)
    },
    // 退出
    Exit() {
      if (confirm('确认退出?') == true) {
        this.$router.push('/login')
      }
    }
  },
  mounted() {
    EventBus.$emit('coll', this.isCollapse, null, this.textNone)
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: #fff;

  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    height: 25px;

    li {
      display: flex;
      align-items: center;

      span {
        font-size: 14px;
        margin: 0 5px;
        cursor: pointer;
      }
    }
  }
}
</style>