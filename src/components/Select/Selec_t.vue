<template>
  <el-row class="block-col-2">
    <el-col :span="12">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link" :style="WidObj">
        {{ msg }}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ this.one }}</el-dropdown-item>
          <el-dropdown-item>{{ this.two }}</el-dropdown-item>
          <el-dropdown-item>{{ this.three }}</el-dropdown-item>
          <el-dropdown-item>{{ this.four }}</el-dropdown-item>
          <el-dropdown-item>{{ this.five }}</el-dropdown-item>
          <el-dropdown-item>{{ this.six }}</el-dropdown-item>
          <el-dropdown-item>{{ this.seven }}</el-dropdown-item>
          <el-dropdown-item>{{ this.eight }}</el-dropdown-item>
          <el-dropdown-item>{{ this.nine }}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Selec_t",
  props: ['text', 'width', 'mgr', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
  data() {
    return {
      msg: this.text,
      WidObj: {
        width: this.width,
        marginRight: this.mgr
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-dropdown-link {
  display: block;
  width: 103px;
  height: 30px;
  border: 1px solid #999999;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  cursor: pointer;
  color: #999999;
  margin-right: 20px;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>