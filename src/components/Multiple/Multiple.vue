<template>
  <!--  多选框-->
  <div class="Multiple" :style="Styles">
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "MultiPle",
  props: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'w'],
  data() {
    return {
      options: [{
        value: '选项1',
        label: this.one
      }, {
        value: '选项2',
        label: this.two
      }, {
        value: '选项3',
        label: this.three
      }, {
        value: '选项4',
        label: this.four
      }, {
        value: '选项5',
        label: this.five
      }],
      value: '',
      Styles: {
        // 拿到props传过来的值，用this
        width: this.w,
        height: this.h
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Multiple {
  width: 95px;
  height: 32px;

  ::v-deep .el-input__inner {
    height: 32px;
  }

  ::v-deep .el-select__caret {
    line-height: 32px;
  }
}
</style>