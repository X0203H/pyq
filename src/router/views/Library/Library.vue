<template>
  <!--  父导航文库页-->
  <div class="Library">
    <Header></Header>
    <div class="main">
      <!--          左侧小导航-->
      <div class="LeftSideNav">
        <div class="content">
          <ul>
            <li>
              <router-link :to="{name:'salesmanwen',params:{name:this.a}}" active-class="active"><i
                  class="el-icon-s-order"></i><span>银保业务员版文库页</span>
              </router-link>
            </li>
            <li>
              <router-link to=""><i class="el-icon-video-camera-solid"></i><span>银保业务员版图库页</span>
              </router-link>
            </li>
            <li>
              <router-link to=""><i class="el-icon-picture"></i><span>银保业务员版首页</span>
              </router-link>
            </li>
            <li>
              <router-link to=""><i class="el-icon-picture"></i><span>银保银行版文库页</span>
              </router-link>
            </li>
            <li>
              <router-link to=""><i class="el-icon-picture"></i><span>银保银行版图库页</span>
              </router-link>
            </li>
            <li>
              <router-link to=""><i class="el-icon-picture"></i><span>银保银行版首页</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--          右侧导航展示的内容-->
      <!--      <router-view></router-view>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  name: "LibrAry",
  data() {
    return {
      a: "salesmanwen"
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.Library {
  width: 100%;
  //height: 618px;
  background-color: #eeeeee;

  .main {
    display: flex;
    width: 98%;
    //height: 545px;
    background-color: #fff;
    margin: 14px auto;

    //左侧小导航
    .LeftSideNav {
      //width: 100px;
      //height: 513px;
      padding: 16px 0;

      .content {
        //width: 99px;
        height: 100%;
        border-right: 1px solid #ddd;

        ul {
          .active {
            font-weight: bold;
          }

          li {
            display: flex;
            align-items: center;
            width: 100%;
            height: 50px;
            transition: all .3s;
            padding-right: 20px;

            a {
              &:hover {
                color: #4497fd;
              }
            }

            i {
              margin-left: 20px;
              margin-right: 5px;
            }

            span {
              font-size: 14px;
              cursor: pointer;
            }
          }
        }
      }
    }

    .box {
      width: 500px;
      height: 500px;
      background-color: pink;
    }
  }
}
</style>