<template>
  <div class="wrap">
    <div class="header">
      <div class="topbox">
        <!-- <div class="logo">
          <a href="/">
            <i></i>
          </a>
        </div> -->
        <div class="topnav">
          <ul>
            <li>
              <router-link to="AboutComponay">关于天一</router-link>
            </li>
            <li>
              <router-link to="Product">产品中心</router-link>
            </li>
            <li>
              <router-link to="news">新闻资讯</router-link>
            </li>
            <li>
              <router-link to="">
                <i></i>
              </router-link>
            </li>
            <li>
              <router-link to="Serve">技术支持</router-link>
            </li>
            <li>
              <router-link to="Contact">联系我们</router-link>
            </li>
            <li>
              <router-link to="Recruit">招贤纳士</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <full-page :options="options" ref="fullpage">
      <div id="content">
        <div class="section imain imain1" data-anchor="about">
          <History></History>
        </div>
        <div class="section imain imain4" data-anchor="paper">
          <AboutUs ref="aboutUs"></AboutUs>
        </div>
        <div class="section imain imain5" data-anchor="running">
          <Industrial></Industrial>
        </div>
        <div class="section imain imain3" data-anchor="news">
          <NewsView></NewsView>
        </div>
        <div class="section imain imain6" data-anchor="news">
          <Foot></Foot>
        </div>
      </div>
    </full-page>
    <!-- <div class="footer">
      <div class="footbox">
        <div class="footcopy">
          电话:0551-62678113&nbsp;&nbsp;&nbsp;&nbsp;邮箱:tianyi@hftysw.com
          <br>
          ©2016-2017 合肥天一生物技术研究所有限责任公司 版权所有
          <a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2021005420号-1</a>
        </div>
        <div class="footlink">
          <ul>
            <li>
              <img
                src="https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8%E5%BE%AE%E4%BF%A1%E4%BA%8C%E7%BB%B4%E7%A0%81.png">
            </li>
          </ul>
        </div>
      </div>
    </div> -->
    <div class="inav" id="inav">
      <ul>
        <li v-for="(item, index) in menuList" :class="index == menuIndex ? 'active' : ''" :key="index"
          @click="handleMove(index)" :data-menuanchor="item.value">
          <a :href="'#' + item.value">
            <i class="pageIcon"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { WOW } from 'wowjs'
import History from "@/views/home/history.vue";
import NewsView from "@/views/home/news.vue";
// import Paper from "@/views/home/Paper.vue";
import Industrial from "@/views/home/Industrial.vue";
import AboutUs from '../views/home/AboutUs.vue'
import Foot from './home/Foot.vue'
export default Vue.extend({
  name: 'HomeView',
  components: {
    History, NewsView, AboutUs, Industrial, Foot
  },
  data() {
    return {
      options: {
        // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        // 是否显示导航，默认为false

        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'], // 注意不带#
        menu: '#menu', // 绑
        recordHistory: true,
        afterLoad(anchorLink, page) {
          let pageIconNumber = document.getElementsByClassName("pageIcon") as HTMLCollectionOf<HTMLElement>
          for (let i = 0; i < pageIconNumber.length; i++) {
            if (page.index == i) {
              pageIconNumber[i].style.background = "#49b24c"
            } else {
              pageIconNumber[i].style.background = "transparent"
            }
          }
          if (page.index == 0) {
            document.getElementsByClassName('header')[0].classList.remove('header_c')
            document.getElementsByClassName('inav')[0].classList.remove('inav_c')
          } else if (page.index == 1) {
            document.getElementsByClassName('header')[0].classList.add('header_c')
            document.getElementsByClassName('inav')[0].classList.add('inav_c')
          }
          else if (page.index == 2) {
            document.getElementsByClassName('header')[0].classList.add('header_c')
            document.getElementsByClassName('inav')[0].classList.add('inav_c')
          }
          else if (page.index == 3) {
            document.getElementsByClassName('header')[0].classList.add('header_c')
            document.getElementsByClassName('inav')[0].classList.add('inav_c')
          } else if (page.index == 4) {
            document.getElementsByClassName('header')[0].classList.remove('header_c')
            document.getElementsByClassName('inav')[0].classList.remove('inav_c')
          }
        },
        scrollBar: true,
        afterRender: function () {
          var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 40,
            mobile: true,
            live: true,
          });
          wow.init();
        },
      },
      menuList: [
        { label: '首页', value: 'page1' },
        { label: '关于天一', value: 'page2' },
        { label: '产业布局', value: 'page3' },
        { label: '新闻中心', value: 'page4' },
        { label: '页脚', value: 'page5' },
      ],
      menuIndex: 0,
    }
  },
  mounted() {
    // this.$refs.fullpage.setLockAnchors(true)
  },

  methods: {
    handleMove(index: any) {
      this.menuIndex = index
      switch (index) {
        case 0:
          this.$refs.fullpage.api.moveTo(1, 0)
          break
        case 1:
          this.$refs.fullpage.api.moveTo(2, 1)
          break
        case 2:
          this.$refs.fullpage.api.moveTo(3, 2)
          break
        case 3:
          this.$refs.fullpage.api.moveTo(4, 3)
          break
      }
    },
  }
})
</script>
<style scoped>
/* //隐藏滚动条 */

.header {
  height: .781rem;
  position: fixed;
  left: 0;
  top: .843rem;
  right: 0;
  z-index: 9999;
  transition: all 300ms ease;
}

/* .topnav ul {
  display: flex;
  justify-content: space-around;
} */

.header_c .topnav ul li:before {
  background: #000;
}

.header_c .topnav ul li a {
  color: #000;
}

.header_c .topnav ul li a:hover {
  color: #006cd0;
}

.header_c .topnav ul li a i {
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/7b310adc2464da114d8e2a787b00ca9.png) center center no-repeat;
  background-size: 100% auto;
}

.inav_c ul li a i {
  border: .015rem #000 solid;
}

.inav_c ul li.active a i {
  background: #000;
}


.topbox .logo {
  display: none;
  position: absolute;
  left: .156rem;
  top: 0;
  padding: .125rem 0;
}

.topbox .logo a {
  display: block;
}

.topbox .logo i {
  display: block;
  height: .531rem;
  width: 2.125rem;
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8logo%E7%99%BD.png) center center no-repeat;
  background-size: auto .5rem;
  transition: all 200ms ease;
}

.topnav {
  text-align: center;
  line-height: .781rem;
  font-size: 0;
  line-height: 0;
}

.topnav ul li {
  display: inline-block;
  position: relative;
  vertical-align: top;
}

.topnav ul li a {
  font-family: OPPOSans-M;
  font-weight: 900;
  display: block;
  text-align: center;
  padding: 0 .781rem;
  font-size: .25rem;
  height: .781rem;
  line-height: .781rem;
  color: #fff;
  transition: all 200ms ease;
}

.topnav ul li:nth-child(1):before {
  display: block;
}

/* .topnav ul li:before {
  display: none;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.5;
  background: #fff;
  position: absolute;
  right: -2px;
  top: 50%;
  margin-top: -2px;
  transition: all 200ms ease;
} */

.topnav ul li a i {
  display: block;
  height: .781rem;
  width: 4.687rem;
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/da7ce7a2e24618568d6070004b5c40a.png) center no-repeat;
  background-size: 100% auto;
  transition: all 200ms ease;
}

.topnav ul li:nth-child(4):before {
  display: block;
}

.imain1 {
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/honor/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230327123709.jpg) center center no-repeat;
  background-size: cover;
}

.imain2 {
  background: url(https://www.yili.com/uploads/2023-01-09/7aecf55a-559e-4191-92e1-c7705bf2dbd21673199267994.png) center center no-repeat;
  background-size: cover;
}

.imain {
  position: relative;
}

.imain3 {
  background: url(https://www.cstnet.cn/static/assets/img/index/bg2.png) center center no-repeat;
  background-size: cover;
}

.imain6 {
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/honor/%E5%85%AC%E5%8F%B8%E5%9B%BE%E7%89%87/Snipaste_2023-03-20_16-02-18.png)no-repeat center;
  background-size: cover;

}

/* .imain4 {
  background: url(https://www.yili.com/uploads/2023-01-09/7aecf55a-559e-4191-92e1-c7705bf2dbd21673199267994.png) center center no-repeat;
  background-size: cover;
} */

.imain5 {
  background: url(http://www.assuretech.com.cn/images/index3-bg.jpg) center center no-repeat;
  background-size: cover;
}

.inav {
  position: fixed;
  left: .656rem;
  top: 50%;
  margin-top: -1.031rem;
  z-index: 9999;
}

.inav ul li {
  padding: .093rem 0;
  list-style: none;
}

.inav ul li a {
  display: block;
}

.inav ul li a i {
  display: block;
  width: .125rem;
  height:.125rem;
  border-radius: 50%;
  border: .015rem #fff solid;
  margin: .015rem;
  transition: all 200ms ease;
}

/* ul li.active a i {
  background: #49b24c;
} */

.footer {
  position: fixed;
  left: 0;
  bottom: .562rem;
  right: 0;
  color: rgba(255, 255, 255, 0.4);
  z-index: 9999;
  transition: all 200ms ease;
}

.footbox {
  padding: 0 .656rem;
  height: .906rem;
}

.footcopy {
  float: left;
  font-size: .187rem;
  line-height: 2;
  padding: .078rem 0;
}

.footer_c {
  color: #999;
}

.footer_c a {
  color: #999;
}

.footer_c a:hover {
  color: #006cd0;
}

.footer a {
  color: rgba(255, 255, 255, 0.4);
  transition: all 200ms ease;
}

.footlink {
  float: right;
}

.footlink ul li {
  float: left;
  margin-left: .312rem;
}

.footlink ul li img {
  display: block;
  height: .906rem;
}
</style>

