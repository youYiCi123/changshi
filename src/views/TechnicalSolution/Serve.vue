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
  height: 7.5rem !important;
}

.support-search-index.v3 {
  height: 10rem;
  padding-left: 0;
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
}

.search-banner-component .banner-img-wrap {
  overflow-x: hidden;
  position: relative;
  height: 7.5rem !important;
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
  text-shadow: 0 0 0.156rem rgb(0 0 0 / 50%);
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
  font-size: 0.75rem;
  line-height: 1rem;
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
  font-size: 0.5rem;
  line-height: 1.5;
  margin-top: 0.375rem;
  text-align: center;
}

.search-banner-component .support-search-index.v3.support-v4 .s-search-input {
  width: 12.5rem;
  height: 0.875rem;
  background-color: white;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  border-radius: 0.437rem;
  margin-top: 1.375rem;
}

.support-search-index.v3.support-v4 .search-banner-input {
  height: 0.875rem;
  line-height: 0.875rem;
  width: 100%;
  left: auto;
  padding: 0 1.25rem 0 0.5rem;
  font-size: 0.25rem;
  font-weight: normal;
  background: transparent;
  position: absolute;
  outline: medium;
  border: none;
  letter-spacing: 0.013rem;
  cursor: pointer;
}

.search-banner-component .support-search-index.v3 .go-search {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1.25rem;
  float: right;
  display: block;
}

.support-search-index.support-v4 .go-search:after {
  content: "";
  background: url(https://consumer.huawei.com/etc/designs/huawei-cbg-site/clientlib-support-v2/asset/img/first-screen-icon.svg) -22px -353px;
  display: block;
  position: absolute;
  left: 0.375rem;
  opacity: .8;
  top: 50%;
  transform: translateY(-40%) scale(1);
  width: 0.562rem;
  height: 0.562rem;
  background-position: -20px -353px;

}

.search-banner-component .support-search-index.v3.support-v4 .s-search-recommend {
  border: 0.015rem solid rgba(0, 0, 0, 0.20);
  border-top-color: #fff;
  border-radius: 0 0 0.437rem 0.437rem;
  width: calc(100% + 0.031rem);
  margin-left: -0.015rem;
  top: 0.859rem;
  background: #fff;
  position: absolute;
  z-index: 2;
  box-shadow: none;
  padding: 0.5rem 0 0.25rem 0;
}

.search-banner-component .support-search-index.v3.support-v4 .s-search-recommend::before {
  position: absolute;
  content: "";
  height: 0.015rem;
  background: #57b75b;
  opacity: .4;
  top: 0;
  left: 0.375rem;
  width: calc(100% - 0.75rem);
}

.support-search-index.v3.support-v4 .s-search-recommend p {
  font-size: 0.218rem;
  line-height: 0.312rem;
  color: #000;
  font-weight: bold;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
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
  font-size: 0.281rem;
  line-height: 0.312rem;
  font-weight: normal;
  color: rgba(0, 0, 0, .5);
  padding: 0.25rem 0 0.25rem 1rem;
  letter-spacing: 0;
  display: block;
}


.page-service {
  max-width: 18.75rem;
  margin: 0 auto;
}

.page-service .service-item-list {
  position: relative;
  box-shadow: 0.046rem 0.125rem 0.343rem rgb(89 100 92 / 18%);
  padding: 0.187rem 0 0.171rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 0.375rem;
  -moz-border-radius:  0.375rem;
  border-radius:  0.375rem;
  overflow: hidden;
  margin-top: -1.718rem;
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
  height: 2.937rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  padding-bottom: 0.375rem;
  display: block;
}

.page-service .service-item-list .service-item:nth-of-type(-n+5):before {
  top: auto;
  bottom: 0;
}

.page-service .service-item-list .service-item:before {
  content: "";
  position: absolute;
  width: 0.015rem;
  height: 2.578rem;
  background-color: #f5f7fa;
  right: 0;
  top: 0;
}

.page-service .service-item-list .service-item img {
  display: inline-block;
  height: 1.187rem;
  padding-top: 0.375rem;
  margin-bottom: 0.25rem;
  -webkit-transition: all .3s;
  -o-transition: all .3s;
  -moz-transition: all .3s;
  transition: all .3s;
  border: 0;
}

.page-service .service-item-list .service-item p {
  font-size: 0.281rem;
  line-height: 0.281rem;
  margin-bottom: 0.093rem;
  color: #242933;
  font-family: VIVO-FONT-WEB-BOLD, VIVO-FONT-NAV-BOLD, sans-serif;
  overflow: hidden;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}

.page-service .service-item-list .service-item span {
  font-size: 0.218rem;
  line-height: 0.281rem;
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
  margin: 0 auto 1.190rem;
  padding-top: 1.065rem;
  padding-bottom: 0.14rem;
}

.main-self-service-four {
  width: 22.306rem;
  margin: 0 auto;
}

.main-self-service--title {
  font-size: 0.491rem;
  line-height: 2.2;
  margin-bottom: 0.026rem;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

.main-self-service--subtitle {
  font-size: 0.191rem;
  font-family: OPPOSans-M;
  line-height: 0.5;
  opacity: 0.4;
  margin-bottom: 0.827rem;
}

.main-self-service--list.four-item {
  margin-left: 1.592rem;
}

.main-self-service--list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.main-self-service--item {
  width: 4.531rem;
  padding: 0.525rem 0.162rem 0.416rem;
  height: 3.796rem;
  line-height: 1.69;
  background: #f9fafc;
  margin: 0 0.115rem 0.225rem;
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
  width: 0.75rem;
  height: 0.75rem;
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
  font-size: 0.278rem;
  margin: 0.185rem auto 0.158rem;
  line-height: 155%;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

.main-self-service--item_subtitle {
  font-size: 0.222rem;
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
  width: 7.812rem;
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
  font-size: 0.265rem;
}

.nav-box-faq .el-tabs__active-bar {
  background-color: #12fd04;
}

.oppo-service-container {
  margin: 0 auto;
  text-align: center;
}

.oppo-service-container {
  width: 11.25rem;
  padding: 0.525rem 0;
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
  width: 2.812rem;
  text-align: center;
  color: #000;
}

.faq_title .headline {
  height: 0.775rem;
  font-size: 0.483rem;
  line-height: 1.2;
  letter-spacing: 0.014rem;
  margin: auto;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
  font-weight: 500;
}

.faq_title .subtitle {
  height: 0.855rem;
  font-family: OPPOSans-M;
  font-size: 0.226rem;
  line-height: 1.5;
  letter-spacing: -0.0004rem;
  opacity: .4;
  margin: 0.052rem auto 0;
}

.nav-box-faq ul {
  position: relative;
  display: flex;
  width: 8.458rem;
  margin: 0.253rem auto 0;
  text-align: right;
  justify-content: center;
  list-style: none;
}

.nav-box-faq ul .underlinefaq {
  position: absolute;
  bottom: 0;
  height: 0.02rem;
  background: #000;
  transition: left .5s;
}

.nav-box-faq li {
  position: relative;
  font-size: 0.288rem;
  letter-spacing: -0.0004rem;
  margin-right: 0.384rem;
  cursor: pointer;
}

.nav-box-faq li.active {
  color: #222;
}

.core_content {
  margin-top: 0.392rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

.core_content .question {
  width: 9.687rem;
  max-width: 9.687rem;
}

.core_content .question ul {
  border-top: 0.035rem solid #eaeaea;
  list-style: none;
}

.core_content .question ul li {
  height: 1.562rem;
  text-align: left;
  border-bottom: 0.035rem solid #eaeaea;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.core_content .question ul li>a:first-child {
  font-family: OPPOSans-M;
  margin-right: 0.070rem;
  font-size: 0.312rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.core_content .question ul li a {
  font-size: 0.078rem;
  line-height: 0.468rem;
  letter-spacing: -0.0005rem;
  color: #000;
  font-family: OPPOSans-Ver2-Medium;
  font-variation-settings: "wght" 750;
}

.popularfaq {
  padding-bottom: 1.562rem;
}

#main-service-center {
  position: relative;
  text-align: center;
  overflow: hidden;
}

#main-service-center .title {
  margin-top: 0.2rem;
  font-size: 0.484rem;
  font-weight: 500;
  font-family: OPPOSans-M;
  font-variation-settings: "wght" 750;
}

#main-service-center .intro-box {
  display: flex;
  width: 80%;
  height: 7.031rem;
  margin: 0.793rem auto 0.478rem;
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
  margin-top: 2.728rem;
  /* width: 120px; */
  font-size: 0.234rem;
  letter-spacing: -0.0003rem;
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
  margin: 0.734rem auto 0;
  width: 80%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
}

#main-service-center .intro-box .text-box .rights-box .right-item {
  width: 23%;
  margin-right: 0.191rem;
}

#main-service-center .intro-box .text-box .rights-box .right-item img {
  width: 0.468rem;
  height: 0.468rem;
}

#main-service-center .intro-box .text-box .rights-box .right-item span {
  margin-top: 0.025rem;
  display: block;
  width: 100%;
  font-size: 0.043rem;
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
  max-width: 19.843rem;
  margin: 0 auto;
  padding: 1.296rem 0.625rem;
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
  margin: 0 -0.312rem;
}

.contact-us-v2 .contact-us-v2-row {
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 50%;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0.187rem 0.312rem;
}

.contact-us-v2 .contact-us-v2-row .contact-us-v2-cnt {
  background: #f9fafc;
  border-radius: 0.375rem;
  min-height: 3.281rem;
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
  margin-right: 0.5rem;
}

.contact-us-v2 .contact-us-v2-qr-code img {
  width: 1.75rem;
}

.img-lazy.show {
  visibility: visible;
}

.contact-us-v2 .contact-us-v2-qr-code-tips {
  padding: 0.703rem 0;
}

.contact-us-v2 .contact-us-v2-qr-code-tips .title {
  font-size: 0.25rem;
  color: #000;
  line-height: 0.375rem;
  font-weight: 700;
  padding: 0.125rem 0;
}

.contact-us-v2 .contact-us-v2-qr-code-tips .description {
  display: block;
  font-size: 0.218rem;
  color: #585858;
  line-height: 0.312rem;
  padding: 0.125rem 0;
}</style>
