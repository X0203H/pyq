<template>
  <!--  父导航私有-->
  <div class="Private">
    <Header></Header>
    <div class="main">
      <!--          左侧小导航-->
      <div class="LeftSideNav">
        <div class="content">
          <ul>
            <li>
              <router-link :to="{name:'article',params:{name:this.a}}" active-class="active"><i
                  class="el-icon-s-order"></i><span>文章</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'video',params:{name:this.v}}" active-class="active"><i
                  class="el-icon-video-camera-solid"></i><span>视频</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{name:'poster',params:{name:this.p}}" active-class="active"><i
                  class="el-icon-picture"></i><span>海报</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <!--          右侧导航展示的内容-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header/Header.vue";

export default {
  name: "PriVate",
  data() {
    return {
      // 文章
      a: "article",
      // 视频
      v: 'video',
      // 海报
      p: 'poster'
    }
  },
  components: {
    Header,
  }
}
</script>

<style lang="scss" scoped>
.Private {
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
  }
}
</style>