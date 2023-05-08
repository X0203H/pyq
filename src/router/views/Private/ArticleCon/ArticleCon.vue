<template>
  <!--  子导航文章-->
  <div class="ArticleCon">
    <!--            搜索框-->
    <div class="searchBox">
      <div class="search">
        <h4>搜索</h4>
        <div class="search-content">
          <Input :width="'327px'"></Input>
          <span>搜索</span>
        </div>
      </div>
    </div>
    <!--            产品-->
    <div class="itemBox">
      <div class="CreationMode">
        <span>创建方式：</span>
        <el-button size="mini">全部</el-button>
        <el-button size="mini">管理端上传</el-button>
        <el-button size="mini">用户端上传</el-button>
      </div>
      <div class="HasRecord">
        <span>已收录：</span>
        <ul>
          <li><span>页面</span>
            <Multiple :one="'银保业务员文库页'"
                      :two="'银保业务员文库页'" :three="'银保业务版首页'" :four="'银保业务版首页'"
                      :five="'银保银行办首页'">
            </Multiple>
          </li>
          <li><span>一级栏目</span>
            <Multiple :one="'银保业务员文库页'"
                      :two="'银保业务员文库页'" :three="'银保业务版首页'" :four="'银保业务版首页'"
                      :five="'银保银行办首页'">
            </Multiple>
          </li>
          <li><span>二级栏目</span>
            <Multiple :one="'银保业务员文库页'"
                      :two="'银保业务员文库页'" :three="'银保业务版首页'" :four="'银保业务版首页'"
                      :five="'银保银行办首页'">
            </Multiple>
          </li>
        </ul>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </div>
      <div class="label">
        <span>标签：</span>
        <!--                后期改下拉框实现效果-->
        <el-input
            popper-class="my-autocomplete"
            v-model="stateVal"
            placeholder="请输入内容">
          <i
              class="el-icon-search el-input__icon"
              slot="suffix">
          </i>
        </el-input>
      </div>
      <!--              产品列表-->
      <div class="ItemList">
        <!--                按钮-->
        <div class="btn">
          <el-button type="primary" icon="el-icon-plus">
            <span @click="ChangeNewly">新建</span>
            <el-dialog title="新建" :visible.sync="NewlyVisible2" width="30%" center>
              <!--              标题单选按钮-->
              <div class="title">
                <el-radio v-model="radio" label="1">在现有版本上基础上编辑</el-radio>
                <el-radio v-model="radio" label="2">重新导入微信文章，覆盖原文章</el-radio>
              </div>
              <!--              富文本框-->
              <quill-editor></quill-editor>
              <!--              封面摘要-->
              <div class="cover">
                <h4>封面摘要：</h4>
                <div class="upload">
                  <el-upload action="/file/Upload?module=EQ" accept="image/jpeg,image/jpg,image/png" :limit="1"
                             :on-change="handleLimit" list-type="picture-card"
                             :on-success="handleSuccess" :on-remove="handleRemove">
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-input
                      type="textarea"
                      v-model="textarea"
                      autosize
                      placeholder="请输入内容">
                  </el-input>
                </div>
              </div>
              <!--              代理人分享文案-->
              <div class="copywriting">
                <h4>代理人分享文案：</h4>
                <el-input
                    type="textarea"
                    v-model="textarea1"
                    autosize
                    placeholder="请输入内容">
                </el-input>
              </div>
              <!--              创建按钮-->
              <div class="createBtn">
                <el-button @click="ChangeNewlyFalse">取消</el-button>
                <el-button type="primary" @click="ChangeNewlyFalse">创建</el-button>
              </div>
            </el-dialog>
          </el-button>
          <el-button>
            <span @click="centerDialogVisible = true">批量收录</span>
            <!--                    批量收录对话框-->
            <el-dialog title="批货收录" :visible.sync="centerDialogVisible" width="30%" center>
              <!--              <span>需要注意的是内容是默认不居中的</span>-->
              <el-tabs tab-position="left" style="text-align: left;">
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版文库页</span>
                  <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版图库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版首页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版文库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版图库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版首页</span>
                  <span>我的行程</span>
                </el-tab-pane>
              </el-tabs>
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </el-button>
          <el-button>
            <span @click="centerDialogVisible4 = true">批量删除收录</span>
            <el-dialog title="批货收录" :visible.sync="centerDialogVisible4" width="30%" center>
              <!--              <span>需要注意的是内容是默认不居中的</span>-->
              <el-tabs tab-position="left" style="text-align: left;">
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版文库页</span>
                  <el-tree :data="data" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版图库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保业务局版首页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版文库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版图库页</span>
                  <span>我的行程</span>
                </el-tab-pane>
                <el-tab-pane>
                  <span slot="label"><i class="el-icon-s-marketing"></i> 银保银行版首页</span>
                  <span>我的行程</span>
                </el-tab-pane>
              </el-tabs>
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible4 = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible4 = false">确 定</el-button>
              </span>
            </el-dialog>
          </el-button>
          <el-button>
            <span @click="centerDialogVisible1 = true">批量添加标签</span>
            <!--                    批量添加标签对话框-->
            <el-dialog title="批货添加收录" :visible.sync="centerDialogVisible1" width="30%" center>
              <span>已选择10篇文章</span>
              <span style="display: block;margin: 30px 0 20px 40px">设置标签：</span>
              <div style="padding: 0 0 20px 0">
                <el-link type="primary" style="float: right;">标签库</el-link>
              </div>
              <div style="border: 1px dashed #ccc; height: 40px; padding: 40px 0; text-align: center;">
                试一试滑动加载更多标签哟！
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible1 = false">批货添加标签</el-button>
              </span>
            </el-dialog>
          </el-button>
          <el-button>
            <span @click="centerDialogVisible3 = true">批量移除标签</span>
            <!--                    批量移出收录对话框-->
            <el-dialog title="批量移除标签" :visible.sync="centerDialogVisible3" width="30%" center>
              <span>已选择0篇文章</span>
              <span style="display: block;margin: 30px 0 20px 40px">选择要移除的标签</span>
              <div style="border: 1px dashed #ccc; height: 40px; padding: 40px 0; text-align: center;">
                试一试滑动加载更多标签哟！
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible3 = false">取 消</el-button>
                <el-button type="primary" @click="centerDialogVisible3 = false">批量移除标签</el-button>
              </span>
            </el-dialog>
          </el-button>
          <el-button><span>批量删除</span></el-button>
          <el-button>...</el-button>
        </div>
        <!--        清空-->
        <Tabl_e :tableData="tableData"></Tabl_e>
      </div>
    </div>
  </div>
</template>

<script>
import Tabl_e from "@/components/Table/Table.vue";
import Input from "@/components/Input/Input.vue";
import Multiple from "@/components/Multiple/Multiple.vue";
import axios from "axios";

export default {
  name: "ArticleCon",
  components: {
    Tabl_e,
    Input,
    Multiple
  },
  computed: {
    // 将新建功能的数据放到vuex里面保管，后面有一个编辑需要用到
    NewlyVisible2() {
      return this.$store.state.centerDialogVisible2
    }
  },
  created() {
    // 获取数据
    axios.get('/json/private.json').then(res => {
      this.tableData = res.data.list;
      // this.data = this.tableData
      // console.log(this.tableData)
    })
  },
  data() {
    return {
      tableData: [],
      textarea: '',
      textarea1: '',
      radio: '1',
      stateVal: '',
      // 弹出对话框
      centerDialogVisible: false,
      centerDialogVisible1: false,
      centerDialogVisible3: false,
      centerDialogVisible4: false,
      data: [{
        label: '全部',
        children: [{
          label: '二级 1-1',
        }]
      }, {
        label: '捐赠保险',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '李晓阳一级',
        children: [{
          label: '三级 2-1-1'
        }]
      }, {
        label: '增援选材',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '基础管理',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '销售支持',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '基础知识',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '典藏版',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '华夏时讯',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '中介测试',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }, {
        label: '小白课堂',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    handleClick(row) {
      console.log(row);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 上传图片的事件
    handleLimit(file, fileList) {
      if (fileList.length >= 1) {
        this.eqObj.uploadDisabled = true;
        this.$set(this.eqObj, 'uploadDisabled', true);
      } else {
        this.eqObj.uploadDisabled = false;
        this.$set(this.eqObj, 'uploadDisabled', false);
      }
      this.$forceUpdate();
    },
    handleSuccess(response) {
      if (response.success) {
        this.eqForm.image = response.filepath;
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.eqObj.uploadDisabled = false;
      this.$forceUpdate();
    },
    // 新建的显示与隐藏
    ChangeNewly() {
      this.$store.dispatch('changenewly', true)
    },
    ChangeNewlyFalse() {
      this.$store.dispatch('changenewly', false)
    }
  },
}
</script>

<style lang="scss" scoped>
// 右侧内容
.ArticleCon {
  width: 100%;
  //height: 545px;
  //background-color: pink;
  // 搜索框
  .searchBox {
    width: 96%;
    height: 63px;
    border-bottom: 1px solid #ddd;
    margin: 0 auto;

    .search {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 50%;
      height: 100%;

      .search-content {
        display: flex;
        //width: 376px;
        align-items: center;

        span {
          width: 48px;
          height: 30px;
          color: #fff;
          line-height: 30px;
          border-radius: 5px;
          background-color: #409eff;
          font-size: 14px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }

  //  产品
  .itemBox {
    width: 96%;
    //height: 100%;
    margin: 0 auto;
    //创建方式
    .CreationMode {
      padding-top: 10px;
      font-size: 14px;

      .el-button {
        height: 20px;
        line-height: 0;
      }
    }

    //已收录
    .HasRecord {
      display: flex;
      align-items: center;
      height: 30px;
      font-size: 14px;
      margin-top: 20px;

      ul {
        display: flex;
        align-items: center;
        height: 30px;
        margin-left: 10px;

        li {
          display: flex;
          align-items: center;
          height: 30px;
          margin-right: 10px;

          span {
            margin: 0 5px;
          }
        }
      }

      .el-button {
        height: 30px;
        line-height: 0;
      }
    }

    //标签
    .label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 285px;
      height: 22px;
      font-size: 14px;
      margin-top: 20px;

      ::v-deep .el-input__icon {
        line-height: normal;
      }

      .el-input {
        width: 213px;

        ::v-deep .el-input__inner {
          height: 22px;
          line-height: 22px;
        }
      }
    }

    //产品列表
    .ItemList {
      margin-top: 20px;

      .title {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin: 20px auto;
      }

      // 上传封面样式
      .disabled .el-upload.el-upload--picture-card {
        display: none !important;
      }

      .disabled .el-button--success.is-plain {
        display: none !important;
      }

      // 封面
      .cover {
        margin: 20px auto;

        h4 {
          margin: 20px 0;
        }

        .el-textarea {
          margin: 20px 0;
        }
      }

      // 代理人分享文案
      .copywriting {
        h4 {
          margin: 20px 0;
        }
      }

      //创建按钮
      .createBtn {
        display: flex;
        justify-content: center;
        margin: 20px auto;
      }


      ::v-deep .el-dialog__body {
        //width: 100%;
        .ql-toolbar {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-between;
        }
      }

      ::v-deep .is-left {
        text-align: left;
      }

      .el-tab-pane {
        line-height: 30px;
      }

      //按钮
      .btn {
        .el-button {
          height: 22px;
          line-height: 0;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>