<template>
  <div class="conv3_wrap support-versionb">

    <Head></Head>
    <div class="search-banner-component">
      <div class="support-search-index v3 support-v4 lazy-box">
        <div class="banner-img-wrap"
          style="background-image: url('https://consumer.huawei.com/content/dam/huawei-cbg-site/greate-china/cn/support/support-v3/homepage/support-pc-new-kv.jpg'); background-position: center center; background-repeat: no-repeat; background-size: cover;">
        </div>
        <div class="banner-search-wrap">
          <div class="s-text wow fadeInUp" style="color:#fff">欢迎使用天一服务<p></p>
          </div>
          <div id="searchSustain" class="s-search-input " style="">
            <input @blur="blurSearchInput" @focus="focusSearchInput" class="search-banner-input"
              placeholder="请输入您想要了解的信息">
            <a class="go-search"> </a>
            <div class="s-search-recommend" style="display: none;">
              <div class="search-banner-quick-links" style="display: block;">
                <p>热门搜索</p>
                <div>
                  <ul>
                    <li v-for="(item, index) in quickLinksList" :key="index">
                      <router-link to="Solution">
                        <span>{{ item.question }}</span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- <div class="search-banner-hot-words" style="display: block;">
                <p>热门搜索</p>
                <div>
                  <ul>
                    <li>
                      <router-link class="a-support-common  "
                        to="AboutComponay"><span>碎屏险</span></router-link>
                    </li>
                    <li>
                      <a class="a-support-common  ">
                        <span>碎屏险</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-service ">
      <div class="service-item-list wow fadeInUp" data-wow-delay="0.5s">
        <a class="service-item">
          <img src="@/assets/img/icons/血型.png">
          <p>血型系列</p>
          <span>远程定位，查找设备</span>
        </a>
        <a class="service-item">
          <img src="@/assets/img/icons/维生素.png">
          <p>维生素系列</p>
          <span>远程定位，查找设备</span>
        </a>
        <a class="service-item">
          <img src="@/assets/img/icons/微生物.png">
          <p>微生物系列</p>
          <span>远程定位，查找设备</span>
        </a>
        <a class="service-item">
          <img src="@/assets/img/icons/血站.png">
          <p>血站系列</p>
          <span>远程定位，查找设备</span>
        </a>
        <a class="service-item">
          <img src="@/assets/img/icons/其它.png">
          <p>其它系列</p>
          <span>远程定位，查找设备</span>
        </a>
      </div>
    </div>

    <div id="main-self-service" class="main-self-service service arabic">
      <div class="main-self-service-wrapper main-self-service-four">
        <div class="main-self-service--title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">服务理念</div>
        <div class="main-self-service--subtitle wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">快速解决您的问题</div>
        <div class="main-self-service--list four-item">
          <div class="main-self-service--item wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s"
            v-for="(item, index) in serviceIdeas">
            <a>
              <div class="van-image">
                <img :src="item.iconUrl">
              </div>
              <span class="main-self-service--item_title">{{ item.title }}</span>
              <span class="main-self-service--item_subtitle">{{ item.serviceDesc }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="popularfaq parbase aem-GridColumn aem-GridColumn--default--12">
      <div id="oppo-service-faq" class="oppo-service-container arabic">
        <div class="sow_service_faq">
          <div class="faq_title">
            <p class="headline wow fadeInUp">常见问题</p>
            <p class="subtitle wow fadeInUp">查看故障排除和玩机技巧</p>
          </div>
          <div class="nav-box-faq wow fadeInUp">
            <el-tabs v-model="activeName" @tab-click="handleClick" :stretch=true>
              <el-tab-pane :label=item.seriesName :name=String(item.id) v-for="(item, index) in questionTabs">
              </el-tab-pane>
            </el-tabs>
          </div>
          <div class="core_content wow slideInLeft">
            <div class="question">
              <ul>
                <li v-for="(item, index) in questionDatas">
                  <router-link to="Solution">{{ item.question }}</router-link>
                  <router-link to="Solution">
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS43ODAzIDEyLjA2MDVMOC43ODAzMyAxOS4wNjA1TDcuNzE5NjcgMTcuOTk5OUwxNC4xODkzIDExLjUzMDJMNy43MTk2NyA1LjA2MDU1TDguNzgwMzMgMy45OTk4OUwxNS43ODAzIDEwLjk5OTlDMTYuMDczMiAxMS4yOTI4IDE2LjA3MzIgMTEuNzY3NyAxNS43ODAzIDEyLjA2MDVaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K">
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="main-service-center" class="main-service-center arabic">
      <div class="title wow fadeInUp">天一官方服务中心</div>
      <div class="intro-box">
        <img class="left-img wow slideInLeft"
          src="https://image.oppo.com/content/dam/oppo/cn/support/support/service-center-kv-new.webp">
        <div class="text-box wow slideInRight">
          <div class="desc ">为您提供贴心、便捷、专业的服务，包括维修、检测换机、升级、咨询等。</div>
          <div class="rights-box">
            <div class="right-item" v-for="(item, index) in ServiceTypeList" :key="index">
              <img :src="item.iconUrl">
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact-us-v2">
      <div class="contact-us-v2-container">
        <div class="contact-us-v2-wrap">
          <div class="contact-us-v2-left wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.5s">
            <div class="contact-us-v2-row">
              <div class="contact-us-v2-cnt">
                <div class="contact-us-v2-qr-code">
                  <img class="img-lazy show success-img" src="@/assets/img/icons/电话.png">
                </div>
                <div class="contact-us-v2-qr-code-tips">
                  <div class="contact-us-v2-tips-center">
                    <p class="title">联系电话：0551-62678113</p>
                    <span class="description">为消费者提供全天候服务</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="contact-us-v2-row">
              <div class="contact-us-v2-cnt">
                <div class="contact-us-v2-qr-code">
                  <img class="img-lazy show success-img"
                    src="https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg">
                </div>
                <div class="contact-us-v2-qr-code-tips">
                  <div class="contact-us-v2-tips-center">
                    <p class="title">扫一扫，关注天一终端服务微信公众号</p>
                    <span class="description">为消费者提供方便、快捷、贴心的服务</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Head from "@/components/Head/index.vue";
import { WOW } from 'wowjs';
import { fetchIdeaList } from '@/api/serve';
import { fetchSolutionSeriesList, fetchListByFirstLevel,getQuestionHot } from '@/api/question';
export default Vue.extend({
  name: 'Serve',
  components: {
    Head
  },
  data() {
    return {
      myTime: null,
      activeName: '0',
      quickLinksList: [],
      serviceIdeas: [],
      questionTabs: [],
      questionDatas: [],
      ServiceTypeList: [{ id: 0, title: '硬件维修', iconUrl: require('@/assets/img/icons/维修.png') }, { id: 1, title: '软件升级', iconUrl: require('@/assets/img/icons/升级.png') },
      { id: 2, title: '咨询解答', iconUrl: require('@/assets/img/icons/咨询.png') }, { id: 3, title: '定期维护', iconUrl: require('@/assets/img/icons/维护.png') },]
    }
  },
  created() {
    this.getServiceIdea()
    this.getQuestionTabs()
    this.fetchQuestionHot()
  },
  methods: {
    //获取服务理念
    getServiceIdea() {
      fetchIdeaList().then(response => {
        this.serviceIdeas = response.data
      })
    },
    //获取一级的问题类型
    getQuestionTabs() {
      fetchSolutionSeriesList().then(response => {
        this.questionTabs = response.data

        fetchListByFirstLevel({ firstLevel: this.questionTabs[0].id }).then(response => {
          this.questionDatas = response.data.list
        })
      })
    },

    //热门搜索问题
    fetchQuestionHot() {
      getQuestionHot().then(response=>{
        this.quickLinksList = response.data.list
      })
    },
    //点击一级列表获取该类型下前4个高频查看次数的问题
    handleClick() {
      fetchListByFirstLevel({ firstLevel: this.activeName }).then(response => {
        this.questionDatas = response.data.list
      })
    },

    //收起搜索框下的列表
    blurSearchInput() {
      //设置定时任务避免当失去焦点onblur和单击onclick冲突时解决方案
      this.myTime = setTimeout(function () {
        let searchInputDevelop = document.getElementsByClassName('s-search-input')[0] as HTMLElement;
        searchInputDevelop.style.borderBottomRightRadius = ''
        searchInputDevelop.style.borderBottomLeftRadius = ''
        let searchRecommendBox = document.getElementsByClassName('s-search-recommend')[0] as HTMLElement
        searchRecommendBox.style.display = 'none'
      }, 180)
    },
    //展开搜索框下的列表
    focusSearchInput() {
      clearTimeout(this.myTime)
      let searchInputDevelop = document.getElementsByClassName('s-search-input')[0] as HTMLElement;
      searchInputDevelop.style.borderBottomRightRadius = '0px'
      searchInputDevelop.style.borderBottomLeftRadius = '0px'

      let searchRecommendBox = document.getElementsByClassName('s-search-recommend')[0] as HTMLElement
      searchRecommendBox.style.display = 'block'
    }

  },
  mounted() {
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 40,
      mobile: true,
      live: true,
    })
    wow.init()

  },
})
</script>
<style>
.conv3_wrap {
  padding-top: 0 !important;
}

.conv3_wrap .search-banner-component {
  padding-top: 0;
  border-bottom: 0;
}

.search-banner-component {
  position: relative;
}

.support-search-index.lazy-box {
  position: relative;
}

.search-banner-component .support-search-index.v3.support-v4 {
  height: 480px !important;
}

.support-search-index.v3 {
  height: 640px;
  padding-left: 0;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}

.search-banner-component .banner-img-wrap {
  overflow-x: hidden;
  position: relative;
  height: 480px !important;
}

.search-banner-component .support-search-index.v3 .banner-search-wrap {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  z-index: 10;
}

.search-banner-component .support-search-index.v3.support-v4 div.s-text {
  text-shadow: 0 0 10px rgb(0 0 0 / 50%);
}

.support-search-index.v3.support-v4 .search-banner-quick-links li:hover,
.support-search-index.v3.support-v4 .search-banner-hot-words li:hover,
.support-search-index.v3.support-v4 .search-banner-suggest-words li:hover {
  background: #f4f4f4
}

.support-search-index.v3.support-v4 .search-banner-quick-links li:hover a,
.support-search-index.v3.support-v4 .search-banner-hot-words li:hover a,
.support-search-index.v3.support-v4 .search-banner-suggest-words li:hover a {
  color: #57b75b;
}

.support-search-index.v3.support-v4 div.s-text {
  font-family: OPPOSans-M;
  font-size: 48px;
  line-height: 64px;
  width: 80%;
  padding-bottom: 0;
  text-align: center;
  margin: 0 auto;
  font-weight: bold;
}

.search-banner-component .banner-search-wrap .s-text {
  padding-top: 0 !important;
}

.support-search-index.v3 div.s-text p {
  font-size: 32px;
  line-height: 1.5;
  margin-top: 24px;
  text-align: center;
}

.search-banner-component .support-search-index.v3.support-v4 .s-search-input {
  width: 800px;
  height: 56px;
  background-color: white;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  border-radius: 28px;
  margin-top: 88px;
}

.support-search-index.v3.support-v4 .search-banner-input {
  height: 56px;
  line-height: 56px;
  width: 100%;
  left: auto;
  padding: 0 80px 0 32px;
  font-size: 16px;
  font-weight: normal;
  background: transparent;
  position: absolute;
  outline: medium;
  border: none;
  letter-spacing: .89px;
  cursor: pointer;
}

.search-banner-component .support-search-index.v3 .go-search {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 80px;
  float: right;
  display: block;
}

.support-search-index.support-v4 .go-search:after {
  content: "";
  background: url(https://consumer.huawei.com/etc/designs/huawei-cbg-site/clientlib-support-v2/asset/img/first-screen-icon.svg) -22px -353px;
  display: block;
  position: absolute;
  left: 24px;
  opacity: .8;
  top: 50%;
  transform: translateY(-40%) scale(1);
  width: 36px;
  height: 36px;
  background-position: -20px -353px;

}

.search-banner-component .support-search-index.v3.support-v4 .s-search-recommend {
  border: 1px solid rgba(0, 0, 0, 0.20);
  border-top-color: #fff;
  border-radius: 0 0 28px 28px;
  width: calc(100% + 2px);
  margin-left: -1px;
  top: 55px;
  background: #fff;
  position: absolute;
  z-index: 2;
  box-shadow: none;
  padding: 32px 0 16px 0;
}

.search-banner-component .support-search-index.v3.support-v4 .s-search-recommend::before {
  position: absolute;
  content: "";
  height: 1px;
  background: #57b75b;
  opacity: .4;
  top: 0;
  left: 24px;
  width: calc(100% - 48px);
}

.support-search-index.v3.support-v4 .s-search-recommend p {
  font-size: 14px;
  line-height: 20px;
  color: #000;
  font-weight: bold;
  padding-bottom: 16px;
  padding-left: 32px;
  letter-spacing: 0;
}

.search-banner-quick-links ul,
.search-banner-hot-words ul {
  list-style: none;
}

.search-banner-quick-links ul a span {
  font-family: OPPOSans-M;
}

.support-search-index.v3.support-v4 .search-banner-quick-links li {
  transition: all .3s ease;
  padding: 0 !important;
  margin-left: 0;
}

.support-search-index.v3.support-v4 .s-search-recommend a {
  font-size: 18px;
  line-height: 20px;
  font-weight: normal;
  color: rgba(0, 0, 0, .5);
  padding: 16px 0 16px 64px;
  letter-spacing: 0;
  display: block;
}


.page-service {
  max-width: 1200px;
  margin: 0 auto;
}

.page-service .service-item-list {
  position: relative;
  box-shadow: 3px 8px 22px rgb(89 100 92 / 18%);
  padding: 12px 0 11px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 24px;
  -moz-border-radius: 24px;
  border-radius: 24px;
  overflow: hidden;
  margin-top: -110px;
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: -moz-box;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}

.page-service .service-item-list .service-item {
  width: 20%;
  position: relative;
  height: 188px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  padding-bottom: 24px;
  display: block;
}

.page-service .service-item-list .service-item:nth-of-type(-n+5):before {
  top: auto;
  bottom: 0;
}

.page-service .service-item-list .service-item:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 165px;
  background-color: #f5f7fa;
  right: 0;
  top: 0;
}

.page-service .service-item-list .service-item img {
  display: inline-block;
  height: 76px;
  padding-top: 24px;
  margin-bottom: 16px;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  border: 0;
}

.page-service .service-item-list .service-item p {
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 6px;
  color: #242933;
  font-family: VIVO-FONT-WEB-BOLD, VIVO-FONT-NAV-BOLD, sans-serif;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.page-service .service-item-list .service-item span {
  font-size: 14px;
  line-height: 18px;
  color: #575c66;
}

.page-service .service-item-list .service-item:nth-of-type(1):after {
  left: auto;
  right: 0;
}

.page-service .service-item-list .service-item:nth-of-type(1):after,
.page-service .service-item-list .service-item:nth-of-type(5):after {
  width: 83%;
}


.main-self-service {
  text-align: center;
  margin: 0 auto 76.2px;
  padding-top: 68.2px;
  padding-bottom: 8.96px;
}

.main-self-service-four {
  width: 1427.6px;
  margin: 0 auto;
}

.main-self-service--title {
  font-size: 31.48px;
  line-height: 2.2;
  margin-bottom: 1.68px;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

.main-self-service--subtitle {
  font-size: 12.24px;
  font-family: OPPOSans-M;
  line-height: 0.5;
  opacity: 0.4;
  margin-bottom: 52.96px;
}

.main-self-service--list.four-item {
  margin-left: 101.9px;
}

.main-self-service--list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.main-self-service--item {
  width: 290px;
  padding: 33.62px 10.4px 26.64px;
  height: 243px;
  line-height: 1.69;
  background: #f9fafc;
  margin: 0 7.4px 14.4px;
}

.main-self-service--item a {
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.main-self-service--item .van-image,
.main-self-service--item .van-image__img {
  width: 48px;
  height: 48px;
}

.main-self-service--item .van-image img {
  width: 100%;
  height: 100%;
}

.van-image {
  position: relative;
  display: inline-block;
}

.van-image__error,
.van-image__img,
.van-image__loading {
  display: block;
  width: 100%;
  height: 100%;
}

.main-self-service--item_title {
  font-size: 17.8px;
  margin: 11.94px auto 10.12px;
  line-height: 155%;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

.main-self-service--item_subtitle {
  font-size: 14.24px;
  opacity: .4;
  overflow: hidden;
  font-family: OPPOSans-M;
  -moz-box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  display: -moz-box;
  display: -webkit-box;
}


.nav-box-faq {
  width: 500px;
  margin: 0 auto;
}

.nav-box-faq .el-tabs__nav-wrap::after {
  position: initial;
}

.nav-box-faq .el-tabs__item.is-active {
  color: #57b75b;
}

.nav-box-faq .el-tabs__item:hover {
  color: #57b75b;
}

.nav-box-faq .el-tabs__item {
  font-size: 17px;
}

.nav-box-faq .el-tabs__active-bar {
  background-color: #12fd04;
}

.oppo-service-container {
  margin: 0 auto;
  text-align: center;
}

.oppo-service-container {
  width: 720px;
  padding: 33.6px 0;
}

.oppo-service-container {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

.faq_title {
  text-align: center;
}

.faq_title .headline,
.faq_title .subtitle {
  width: 180px;
  text-align: center;
  color: #000;
}

.faq_title .headline {
  height: 49.64px;
  font-size: 30.96px;
  line-height: 1.2;
  letter-spacing: 0.944px;
  margin: auto;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
  font-weight: 500;
}

.faq_title .subtitle {
  height: 54.72px;
  font-family: OPPOSans-M;
  font-size: 14.48px;
  line-height: 1.5;
  letter-spacing: -0.028px;
  opacity: .4;
  margin: 3.36px auto 0;
}

.nav-box-faq ul {
  position: relative;
  display: flex;
  width: 541.36px;
  margin: 16.2px auto 0;
  text-align: right;
  justify-content: center;
  list-style: none;
}

.nav-box-faq ul .underlinefaq {
  position: absolute;
  bottom: 0;
  height: 1.28px;
  background: #000;
  transition: left .5s;
}

.nav-box-faq li {
  position: relative;
  font-size: 18.48px;
  letter-spacing: -0.028px;
  margin-right: 24.6px;
  cursor: pointer;
}

.nav-box-faq li.active {
  color: #222;
}

.core_content {
  margin-top: 25.12px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.core_content .question {
  width: 620px;
  max-width: 620px;
}

.core_content .question ul {
  border-top: 2.28px solid #eaeaea;
  list-style: none;
}

.core_content .question ul li {
  height: 100px;
  text-align: left;
  border-bottom: 2.28px solid #eaeaea;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.core_content .question ul li>a:first-child {
  font-family: OPPOSans-M;
  margin-right: 4.5px;
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.core_content .question ul li a {
  font-size: 5px;
  line-height: 30px;
  letter-spacing: -0.0336px;
  color: #000;
  font-family: OPPOSans-Ver2-Medium;
  font-variation-settings: "wght" 750;
}

.popularfaq {
  padding-bottom: 100px;
}

#main-service-center {
  position: relative;
  text-align: center;
  overflow: hidden;
}

#main-service-center .title {
  margin-top: 12.8px;
  font-size: 31px;
  font-weight: 500;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

#main-service-center .intro-box {
  display: flex;
  width: 80%;
  height: 450px;
  margin: 50.8px auto 30.6px;
  background-color: #f9fafc;

}

#main-service-center .intro-box img.left-img {
  display: block;
  width: 50%;
  height: 100%;
}

#main-service-center .intro-box .text-box {
  position: relative;
  width: 45%;
  margin: 0 auto;
}

#main-service-center .intro-box .text-box .desc {
  margin-top: 174.6px;
  /* width: 120px; */
  font-size: 15px;
  letter-spacing: -.024px;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
  -webkit-line-clamp: 3;
}

#main-service-center .intro-box .text-box .desc {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

#main-service-center .intro-box .text-box .rights-box {
  margin: 47px auto 0;
  width: 80%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

#main-service-center .intro-box .text-box .rights-box .right-item {
  width: 23%;
  margin-right: 12.24px;
}

#main-service-center .intro-box .text-box .rights-box .right-item img {
  width: 30px;
  height: 30px;
}

#main-service-center .intro-box .text-box .rights-box .right-item span {
  margin-top: 1.6px;
  display: block;
  width: 100%;
  font-size: 2.8px;
  line-height: 173%;
  letter-spacing: -.0006rem;
  font-family: OPPOSans-M;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.contact-us-v2 .contact-us-v2-container {
  max-width: 1270px;
  margin: 0 auto;
  padding: 83px 40px;
}

.contact-us-v2 .contact-us-v2-wrap {
  overflow: hidden;
}

.contact-us-v2,
.contact-us-v2 * {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}

.contact-us-v2 .contact-us-v2-left {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -20px;
}

.contact-us-v2 .contact-us-v2-row {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 12px 20px;
}

.contact-us-v2 .contact-us-v2-row .contact-us-v2-cnt {
  background: #f9fafc;
  border-radius: 24px;
  min-height: 210px;
  padding: 0 3.75vw;
  position: relative;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.contact-us-v2 .contact-us-v2-qr-code {
  margin-right: 32px;
}

.contact-us-v2 .contact-us-v2-qr-code img {
  width: 112px;
}

.img-lazy.show {
  visibility: visible;
}

.contact-us-v2 .contact-us-v2-qr-code-tips {
  padding: 45px 0;
}

.contact-us-v2 .contact-us-v2-qr-code-tips .title {
  font-size: 16px;
  color: #000;
  line-height: 24px;
  font-weight: 700;
  padding: 8px 0;
}

.contact-us-v2 .contact-us-v2-qr-code-tips .description {
  display: block;
  font-size: 14px;
  color: #585858;
  line-height: 20px;
  padding: 8px 0;
}</style>
