<template>
  <div id="Login">
    <h4>Login From</h4>
    <!--    输入框-->
    <div class="userInput">
      <i class="el-icon-user-solid"></i>
      <el-input
          v-model="user"
          @blur="UserBlur"
          placeholder="Username"
          clearable>
      </el-input>
      <p ref="text" id="text"></p>
    </div>
    <!--    密码框-->
    <div class="pwdInput">
      <i class="el-icon-unlock"></i>
      <el-input
          v-model="pwd"
          placeholder="Password"
          @blur="PwdBlur"
          show-password>
      </el-input>
      <p ref="test2" id="text2"></p>
    </div>
    <!--    按钮-->
    <div class="btn">
      <el-button type="primary" @click="AcquireUser">Login</el-button>
      <el-button type="primary">二维码登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogIn",
  data() {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    AcquireUser() {
      if (this.user === localStorage.getItem('UserName') && this.pwd == localStorage.getItem('Pwd')) {
        // localStorage.setItem('UserName', this.user)
        // localStorage.setItem('Pwd', this.pwd)
        this.$router.push('/private/article')
      } else {
        alert('登录失败，请重新登录')
      }
      this.user = ''
      this.pwd = ''
    },
    UserBlur() {
      let user_regexp = /^[\w-]{4,16}$/
      if (user_regexp.test(this.user)) {
        this.$refs.text.innerHTML = '用户名正确';
        this.$refs.text.style.color = 'green';
      } else {
        this.$refs.text.innerHTML = '用户名不正确';
        this.$refs.text.style.color = 'red';
      }
    },
    PwdBlur() {
      let pwd_regexp = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
      if (pwd_regexp.test(this.pwd)) {
        this.$refs.test2.innerHTML = '密码正确';
        this.$refs.test2.style.color = 'green';
      } else {
        this.$refs.test2.innerHTML = '密码必须包括至少1个大学字母，1个小写字母，1个数字，1个特殊字符';
        this.$refs.test2.style.color = 'red';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#Login {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 809px;
  background-color: #2d3a4b;

  h4 {
    color: #fff;
    text-align: center;
    padding-top: 100px;
  }

  // 登录框
  .userInput,
  .pwdInput {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 232px;
    height: 30px;
    border-radius: 5px;
    margin: 20px auto;
    background-color: #283443;
    border: 1px solid #354150;

    .el-icon-user-solid,
    .el-icon-unlock {
      color: #83949e;
      margin-left: 10px;
    }

    ::v-deep .el-input {
      .el-input__inner {
        width: 202px;
        height: 30px;
        border-radius: 5px;
        background-color: #283443;
        color: #fff;
        border: none;
      }
    }
  }

  // 按钮
  .btn {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 232px;
    //height: 30px;
    margin: 30px auto;

    .el-button {
      width: 232px;
      height: 30px;
      border-radius: 5px;
      padding: 0;
      line-height: 0;
      margin: 0;
      margin-bottom: 20px;
    }
  }

  .userInput,
  .pwdInput {
    position: relative;

    #text,
    #text2 {
      position: absolute;
      top: 30px;
      left: 5px;
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>