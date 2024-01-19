<template>
  <div>

    <Head></Head>
    <div class="zdInner_ban Inner_ban"
      style="background-image: url(http://www.assuretech.com.cn/uploadpic/166994845246.jpg);">
      <div class="zdInner_txt">
        <div class="ind-title-l">
          <p class="title-en f-48 wow fadeInUp">新闻资讯</p>
          <span class="wow fadeInUp"></span>
          <p class="title-cn f-18 wow fadeInUp">了解最新动态 &nbsp;掌握最新资讯</p>
        </div>
      </div>
    </div>
    <div class="subMenu">
      <div class="newsWrap">
        <div class="subMenu_dl">
          <dd :class="newsSubMenuIndex == index ? 'hover' : ''" v-for="(item, index) in newsMenuList" :key="index"
            @click="selectNewsMenu(item.id, index)">
            <a class="subMenu_a">
              <span>{{ item.seriesName }}</span>
              <em></em>
            </a>
          </dd>
        </div>
      </div>
    </div>
    <router-view :newsType="this.newsSubMenuIndex"></router-view>
  </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { WOW } from 'wowjs'
import { fetchTypeList } from '@/api/news';
import Head from "@/components/Head/index.vue";
export default Vue.extend({
  name: 'news',
  components: {
    Head
  },
  data() {
    return {
      newsMenuList: [],
      newsSubMenuIndex: 0,
    }
  },
  mounted() {
    /* aos动画初始化 */
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 40,
      mobile: true,
      live: true,
    })
    wow.init()
  },
  created() {
    this.getMenuList()
  },
  methods: {
    getMenuList() {
      fetchTypeList({ keyword: '', pageSize: 8, pageNum: 1 }).then(response => {
        this.newsMenuList = response.data.list;
        this.newsSubMenuIndex = this.newsMenuList[0].id;
      })
    },

    selectNewsMenu(id, index) {
      let newsNumber = document.getElementsByTagName("em") as HTMLCollectionOf<HTMLElement>
      for (let i = 0; i < newsNumber.length; i++) {
        if (index == i) {
          newsNumber[i].style.display = "block"
        } else {
          newsNumber[i].style.display = "none"
        }
      }
      this.newsSubMenuIndex = id
      if (this.$route.name != 'NewsList') {
        this.$router.push({ path: 'NewsList' })
      }
    },
  },
})
</script>
<style>
.subMenu {
  overflow: hidden;
  background: #fff;
  font-size: 0rem;
  text-align: center;
  border-bottom: 0.015rem solid #e5e5e5;
}

.newsWrap {
  clear: both;
  width: 18.75rem;
  margin: 0 auto;
}

.subMenu_dl {
  display: inline-block;
  overflow: hidden;
}

.subMenu_dl dd {
  float: left;
  display: inline;
  overflow: hidden;
  padding: 0rem 0.234rem;
}

.subMenu_a {
  display: block;
  overflow: hidden;
  font-size: 0.25rem;
  font-weight: bold;
  color: #393939;
  height: 1.015rem;
  line-height: 1.015rem;
  position: relative;
  padding: 0rem 0.156rem;
}

.subMenu_a span {
  font-family: OPPOSans-M;
}

.subMenu_a em {
  display: none;
  overflow: hidden;
  width: 100%;
  height: 0.031rem;
  background: #49b24c;
  position: absolute;
  left: 0rem;
  bottom: 0rem;
}

.subMenu_dl dd.hover .subMenu_a {
  color: #49b24c;
}
</style>