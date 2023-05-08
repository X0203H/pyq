<template>
  <div class="Table">
    <div class="empty"><span>已选择 <a href="javascript:" ref="item">0</a> 项</span><span
        @click="toggleSelection()">清空</span>
    </div>
    <div class="list">
      <el-table
          ref="multipleTable"
          :data="tableData1.slice((currpage - 1) * pagesize, currpage * pagesize)"
          border
          @select-all="selectionLineChangeHandle"
          @select="selectionLineChangeHandle"
          style="width: 100%">
        <el-table-column ref="state" class="state" type="selection" width="55"></el-table-column>
        <el-table-column
            prop="name"
            label="名称"
            width="100">
        </el-table-column>
        <el-table-column
            prop="pic"
            label="绘略图"
            width="120">
          <template slot-scope="scope">
            <img :src="tableData1[scope.$index].pic" alt="图片加载错误" style="width: 100px;height: 100px">
          </template>
        </el-table-column>
        <el-table-column
            prop="record"
            label="收录页面"
            width="120">
        </el-table-column>
        <el-table-column
            prop="correlation"
            label="关联产品"
            width="220">
        </el-table-column>
        <el-table-column
            prop="First_column"
            label="一级栏目"
            width="120">
        </el-table-column>
        <el-table-column
            prop="second_column"
            label="二级栏目"
            width="120">
        </el-table-column>
        <el-table-column
            prop="label"
            label="标签"
            width="120">
        </el-table-column>
        <el-table-column
            prop="Page_views"
            label="浏览量"
            width="120">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.$index,tableData1)" type="text" size="small">删除</el-button>
            <el-button type="text" size="small" @click.native="ChangeNewly">编辑</el-button>
            <el-button type="text" size="small" @click.native="centerDialogVisible1 = true">标签管理</el-button>
            <el-button type="text" size="small">消息推送</el-button>
            <el-button type="text" size="small">关联信息</el-button>
            <el-button type="text" size="small">文章链接</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--      标签管理对话框(未完善)-->
      <el-dialog title="单素材标签管理" :visible.sync="centerDialogVisible1" width="50%" center
                 @open="ObtainData">
        <p style="margin: 0 0 20px 130px"><span>内容id：</span><span>{{ ComId }}</span></p>
        <p style="margin: 0 0 20px 130px"><span>内容名称：</span><span>{{ ComName }}</span>
        </p>
        <p style="margin: 0 0 20px 130px"><span>内容类型：</span><span>文章</span></p>
        <div class="thumbnail" style="display: flex;align-items: center;margin: 0 0 20px 130px">
          <span>缩略图：</span><img
            :src="ComPic" alt="图片加载出错!"></div>
        <div style="display: flex;align-items: center;margin: 0 0 20px 130px"><span>设置标签：</span>
          <el-input v-model="ComInput" placeholder="请输入内容"></el-input>
        </div>
        <div style="padding: 0 0 20px 0;margin-bottom: 20px">
          <el-link type="primary" style="float: right;">标签库</el-link>
        </div>
        <!--        新增标签-->
        <div
            style="border: 1px dashed #ccc; height: 40px; padding: 40px 0; text-align: center;position: relative">
          <el-button type="primary" round icon="el-icon-plus" style="position: absolute;top: 10px;left: 10px">
            新增标签
          </el-button>
          <span>试一试滑动加载更多标签哟！</span>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible1 = false">保存</el-button>
        </span>
      </el-dialog>
      <!--      分页器-->
      <div class="pager">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currpage"
            :page-sizes="[5,4,3,2,1]"
            :page-size="pagesize"
            background
            layout=" prev, pager, next, jumper"
            :total="tableData1.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabl_e",
  props: {
    tableData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      data: null,
      tableData1: [],
      // tableData2: [],
      // 默认第几页
      currentPage3: 1,
      // 每页条数
      pagesize: 15,
      currpage: 1,
      // 对话框开关
      centerDialogVisible1: false,
      // 每一个商品的数据
      ComId: '',
      ComName: '',
      ComPic: '',
      ComInput: '',
    }
  },
  // 这样是无法把props的值传递给data里面，因为data()只会运行一次，所以要用watch来进行监听props里面内容的变化，然后对data里面进行赋值
  watch: {
    tableData(news) {
      this.tableData1 = news
    }
  },
  methods: {
    ObtainData() {
      this.tableData.forEach((item, index) => {
        console.log(item, index)
        this.ComId = item.id;
        this.ComPic = item.pic;
        this.ComName = item.name;
        this.ComInput = item.label
      })
    },
    // 删除
    handleClick(index, row) {
      console.log(index, row);
      row.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currpage = val
      // 当当前页发生改变时，将已选项清零
      this.$refs.item.innerText = 0
    },
    // TwoTableData() {
    //   axios.get('/json/private_two.json').then(res => {
    //     this.tableData2 = res.data.list;
    //     this.data = this.tableData2
    //     // console.log(this.tableData2)
    //   })
    // },
    // 当表格的复选框改变后触发
    selectionLineChangeHandle(selection) {
      // console.log(selection.length, this.$store.state.a)
      this.$store.state.a.innerText = selection.length;
      // console.log(row.state = !row.state)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
          this.selectionLineChangeHandle()
        });
      } else {
        this.$refs.multipleTable.clearSelection();
        this.$store.state.a.innerText = 0;
      }
    },
    ChangeNewly() {
      this.$store.dispatch('changenewly', true)
    }
  },
  mounted() {
    // console.log(this.$refs.item)
    this.$store.dispatch('Item', this.$refs.item)
  },
}
</script>

<style lang="scss" scoped>
//清空
.empty {
  width: 100%;
  height: 30px;
  background-color: #fdf6ea;
  border: 1px solid #f5bb64;
  line-height: 30px;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 5px;

  span {
    margin-left: 20px;

    a {
      color: #f3ad59;
    }

    &:nth-of-type(2) {
      color: #58a9fc;
      cursor: pointer;
    }
  }
}

//产品列表
.list {
  width: 100%;
  //height: 253px;
  //overflow-y: scroll;
  margin-top: 10px;
}

.pager {
  //margin-top: 20px;
  margin: 20px 0;
}
</style>