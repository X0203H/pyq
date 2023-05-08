<template>
  <!--  子导航文库页-->
  <div class="SalesmanWen">
    <!--    商品-->
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="name"
          label="页面名称"
          width="300">
      </el-table-column>
      <el-table-column
          prop="id"
          label="页面id"
          width="300">
      </el-table-column>
      <el-table-column
          prop="templateId"
          label="页面模板id"
          width="300">
      </el-table-column>
      <el-table-column
          label="操作"
          width="300">
        <template slot-scope="">
          <el-button class="switchTemp" type="primary">切换模板</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--    页面组件列表-->
    <div class="ComponentsList">
      <h1>页面组件列表</h1>
      <el-table
          id="Table1"
          :data="tableData1"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="组件名称"
            width="300">
          <template slot-scope="scope">
            <span @click.stop>
              <el-radio class="my-radio" v-model="myRadio" :label="scope.row.name"
                        @change="rowClick(scope.row.name)">
              </el-radio>
            </span>
          </template>
        </el-table-column>
        <el-table-column
            prop="id"
            label="组件id"
            width="300">
        </el-table-column>
        <el-table-column
            prop="componentsType"
            label="组件类型"
            width="300">
        </el-table-column>
        <el-table-column
            prop="introduction"
            label="组件简介"
            width="300">
        </el-table-column>
      </el-table>
    </div>
    <!--    栏目-->
    <div v-if="myRadio==='标签'" class="column">
      <div class="title">
        <h1>栏目</h1>
        <!--        上级栏目-->
        <div class="superiorColumn">
          <span>上级栏目</span>
          <Selec_t :text="'请选择'"></Selec_t>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </div>
        <el-input
            style="width: 300px;"
            popper-class="my-autocomplete"
            v-model="state"
            placeholder="请输入内容">
          <i
              class="el-icon-search el-input__icon"
              slot="suffix">
          </i>
        </el-input>
      </div>
      <!--      新建-->
      <div class="NewlyBuilt">
        <el-button style="float:right;margin:20px 0 20px 0;" type="primary" icon="el-icon-plus">新建</el-button>
      </div>
      <!--      数据-->
      <el-table
          :data="tableData2"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="栏目名称"
            width="100">
        </el-table-column>
        <el-table-column
            prop="icon"
            label="图标"
            width="100">
        </el-table-column>
        <el-table-column
            prop="id"
            label="栏目id"
            width="100">
        </el-table-column>
        <el-table-column
            prop="label"
            label="栏目标签"
            width="100">
        </el-table-column>
        <el-table-column
            prop="sort"
            label="排序"
            width="100">
        </el-table-column>
        <el-table-column
            prop="state"
            label="可见状态"
            width="100">
        </el-table-column>
        <el-table-column
            prop="SuperiorColumn"
            label="上级栏目"
            width="100">
        </el-table-column>
        <el-table-column
            prop="correlationCon"
            label="关联内容方式"
            width="110">
        </el-table-column>
        <el-table-column
            prop="updater"
            label="更新人"
            width="100">
        </el-table-column>
        <el-table-column
            prop="UpdateTime"
            label="更新时间"
            width="100">
        </el-table-column>
        <el-table-column
            label="操作"
            width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <span> | </span>
            <el-button type="text" size="small"> 删除</el-button>
          </template>
        </el-table-column>
        <el-table-column
            label="排序"
            width="100">
          <template slot-scope="">
            <el-button type="text" size="small" icon="el-icon-bottom" style="font-size: 30px"></el-button>
            <el-button type="text" size="small" icon="el-icon-top" style="font-size: 30px"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--    内容-->
    <div v-if="myRadio==='内容'" class="Content">
      <div class="title">
        <h1>内容</h1>
      </div>
      <!--      展示内容-->
      <div class="ShowContent">
        <div class="left">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="right">
          <!--          栏目名称-->
          <div class="Column-name">
            <span>栏目名称</span>
            <el-input
                style="width: 300px"
                placeholder="请输入内容"
                v-model="ColumnInput"
                :disabled="true">
            </el-input>
            <Multiple :w="'205px'" :one="'位置1'" :two="'位置2'"></Multiple>
          </div>
          <!--          内容列表-->
          <div class="ContentList">
            <div class="title">
              <span>内容列表</span>
              <div class="btn">
                <el-button type="primary">添加</el-button>
                <el-button>批量移除</el-button>
              </div>
            </div>
            <!--            数据-->
            <el-table
                :data="tableDate3.slice((currpage - 1) * pagesize, currpage * pagesize)"
                style="width: 100%">
              <el-table-column ref="state" class="state" type="selection" width="55"></el-table-column>
              <el-table-column
                  prop="name"
                  label="内容名称"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="thumbnail"
                  label="缩略图"
                  width="150">
                <template slot-scope="scope">
                  <img :src="tableDate3[scope.$index].thumbnail" alt="图片加载错误！" style="width: 80px;height: 80px">
                </template>
              </el-table-column>
              <el-table-column
                  prop="ContentState"
                  label="内容状态"
                  width="150">
                <template slot-scope="scope">
                  <span class="ColorState"></span>
                  <span>{{ tableDate3[scope.$index].ContentState }}</span>
                </template>
              </el-table-column>
              <el-table-column
                  prop="recordman"
                  label="收录人"
                  width="150">
              </el-table-column>
              <el-table-column
                  prop="recordItemr"
                  label="收录时间"
                  width="220">
              </el-table-column>
              <el-table-column
                  label="操作"
                  width="150">
                <template slot-scope="scope">
                  <el-button type="text" size="small">置顶</el-button>
                  <span> | </span>
                  <el-button @click="handleClick(tableDate3,scope.$index)" type="text" size="small">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <!--            分页器-->
            <el-pagination
                style="margin:20px 0;"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currpage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pagesize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableDate3.length">
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
    <!--    轮播图-->
    <div v-if="myRadio==='轮播图'" class="rotograph">
      <div class="title">
        <h1>轮播图</h1>
        <el-button type="primary" icon="el-icon-plus">新建</el-button>
      </div>
      <!--      数据-->
      <el-table
          :data="tableDate4.slice((currpage - 1) * pagesize, currpage * pagesize)"
          style="width: 100%">
        <el-table-column
            prop="name"
            label="序号"
            width="150">
        </el-table-column>
        <el-table-column
            prop="thumbnail"
            label="封面文章"
            width="150">
          <template slot-scope="scope">
            <img :src="tableDate4[scope.$index].thumbnail" alt="图片加载错误！" style="width: 80px;height: 80px">
          </template>
        </el-table-column>
        <el-table-column
            prop="ContentState"
            label="轮播图"
            width="150">
          <template slot-scope="scope">
            <span class="ColorState"></span>
            <span>{{ tableDate4[scope.$index].ContentState }}</span>
          </template>
        </el-table-column>
        <el-table-column
            prop="recordman"
            label="排序"
            width="150">
        </el-table-column>
        <el-table-column
            prop="recordItemr"
            label="跳转链接"
            width="220">
        </el-table-column>
        <el-table-column
            prop="recordItemr"
            label="创建人"
            width="220">
        </el-table-column>
        <el-table-column
            label="操作"
            fixed="right"
            width="150">
          <template slot-scope="scope">
            <el-button type="text" size="small">置顶</el-button>
            <span> | </span>
            <el-button @click="handleClick(tableDate4,scope.$index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--            分页器-->
      <el-pagination
          style="margin:20px 0;"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableDate4.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Selec_t from "@/components/Select/Selec_t.vue";
import Multiple from "@/components/Multiple/Multiple.vue";

export default {
  name: "SalesmanWen",
  components: {Selec_t, Multiple},
  data() {
    return {
      myRadio: '标签',
      state: null,
      tableData: [
        {
          id: 5,
          templateId: 2,
          name: "银保业务员版文库页",
        }
      ],
      tableData1: [
        {
          id: 1,
          componentsType: 1,
          introduction: "页面栏目组件",
          name: "标签",
        },
        {
          id: 2,
          componentsType: 3,
          introduction: "页面内容组件",
          name: "内容",
        },
        {
          id: 3,
          componentsType: 2,
          introduction: "页面轮播图组件",
          name: "轮播图",
        }
      ],
      tableData2: [
        {
          id: 1,
          name: '全部',
          icon: '',
          label: '',
          sort: 1,
          state: '可见',
          SuperiorColumn: '',
          correlationCon: '栏目直接关联内容',
          updater: '银保业务员版',
          UpdateTime: '2023-04-20 00:34:41',
        },
        {
          id: 2,
          name: '全部',
          icon: '',
          label: '',
          sort: 1,
          state: '可见',
          SuperiorColumn: '',
          correlationCon: '栏目直接关联内容',
          updater: '银保业务员版',
          UpdateTime: '2023-04-20 00:34:41',
        },
        {
          id: 3,
          name: '全部',
          icon: '',
          label: '',
          sort: 1,
          state: '可见',
          SuperiorColumn: '',
          correlationCon: '栏目直接关联内容',
          updater: '银保业务员版',
          UpdateTime: '2023-04-20 00:34:41',
        },
        {
          id: 4,
          name: '全部',
          icon: '',
          label: '',
          sort: 1,
          state: '可见',
          SuperiorColumn: '',
          correlationCon: '栏目直接关联内容',
          updater: '银保业务员版',
          UpdateTime: '2023-04-20 00:34:41',
        }
      ],
      tableDate3: [],
      // 轮播图数据
      tableDate4: [],
      // 内容部分的左侧树形控件数据
      data: [
        {
          label: '全部',
        },
        {
          label: '小白课堂',
        },
        {
          label: '李晓杨一级',
          children: [{
            label: '全部',
          }, {
            label: '李晓杨二级',
          }, {
            label: '李晓杨三级',
          }]
        },
        {
          label: '增员选材',
          children: [{
            label: '全部',
          }, {
            label: '基本法',
          }, {
            label: '招募工具',
          }]
        },
        {
          label: '基础管理',
          children: [{
            label: '全部',
          }, {
            label: '重点推荐',
          }, {
            label: '招募工具',
          }]
        },
        {
          label: '销售支持',
          children: [{
            label: '全部',
          }, {
            label: '客户积累',
          }, {
            label: '产品',
          }]
        },
        {
          label: '基础知识',
          children: [{
            label: '全部',
          }, {
            label: '行业',
          }, {
            label: '公司',
          }, {
            label: '保险理念',
          }]
        },
        {
          label: '典藏版',
          children: [{
            label: '全部',
          }, {
            label: '典藏版1',
          }]
        },
        {
          label: '中介测试1'
        },
        {
          label: '华夏时讯',
          children: [{
            label: '全部',
          }, {
            label: '财富',
          }]
        },
        {
          label: '捐赠保险1',
          children: [{
            label: '全部',
          }, {
            label: '海报',
          }]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 栏目名称输入框value
      ColumnInput: '',
      //   分页器默认显示哪页
      currentPage4: 1,
      // 分页器跟表格连接
      pagesize: 10,
      currpage: 1,
    }
  },
  methods: {
    // 选择角色
    rowClick(name) {
      console.log('选中：', name);
      this.myRadio = name;
    },
    handleClick(row, index) {
      console.log(row, index);
      row.splice(index, 1);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    // 分页器函数
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    axios.get('/json/SalesmanWen.json').then(res => {
      this.tableDate3 = res.data.data;
      // console.log(this.tableDate3)
    })
  }
}
</script>

<style lang="scss" scoped>
.SalesmanWen {
  width: 86%;
  margin: 0 auto;
  //height: 545px;
  //background-color: pink;
  .switchTemp {
    height: 30px;
    line-height: 0;
  }

  .ComponentsList {
    margin: 100px 0 0 0;

    #Table1 {
      margin-top: 20px;
    }
  }

  //栏目
  .column {
    width: 100%;
    margin: 70px 0 0 0;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      //上级栏目
      .superiorColumn {
        width: 400px;
        height: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .el-button {
          height: 30px;
          line-height: 0;
        }

        span {
          font-weight: bold;
        }
      }
    }
  }

  //内容
  .Content {
    width: 100%;
    margin: 70px 0 0 0;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .ShowContent {
      display: flex;

      .left {
        width: 190px;
      }

      .right {
        width: 100%;
        //栏目名称
        .Column-name {
          display: flex;
          //width: 100%;
          height: 40px;

          span {
            margin: 8px 10px 0 0;
          }

          ::v-deep .el-input__inner {
            height: 40px;
          }
        }

        //  内容列表
        .ContentList {
          //width: 100%;
          margin: 20px 0;

          .title {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            span {
              margin-right: 10px;
            }
          }

          //内容状态对应的颜色
          .ColorState {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #868686;
            margin-right: 5px;
          }
        }
      }
    }
  }

  //  轮播图
  .rotograph {
    width: 100%;
    margin: 70px 0 0 0;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    ::v-deep .el-table {
      .is-leaf {
        background: rgb(238, 241, 246);
      }
    }
  }
}
</style>