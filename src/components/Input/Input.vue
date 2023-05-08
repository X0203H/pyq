<template>
  <input type="text" v-model="val" id="input" :placeholder="value" :style=Class>
</template>

<script>
export default {
  name: "Inpu_t",
  props: ['value', 'width', 'bor'],
  data() {
    return {
      val: '',
      Class: {
        width: this.width,
        border: this.bor
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#input {
  display: block;
  width: 100px;
  height: 30px;
  border: 1px solid #999999;
  border-radius: 5px;
  padding-left: 3px;
  margin-right: 10px;
}


</style>