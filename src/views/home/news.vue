<template>
  <div class="newsCenter">
    <div class="newsCenter_inner">
      <div class="title wow fadeInLeft">
        新闻中心
      </div>
      <div class="more_news wow fadeInRight" @click="goNewsList()">
        更多新闻
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAALCAYAAACUPhZAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REUzQUNEMUQyRjYyMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REUzQUNEMUMyRjYyMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDQyYTQ3OS1iMTg2LTRjNDktYWQ1Mi1mYzU5MDE4ZmQxYmUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMjViOWNlZS0wMmY3LWQ0NDgtYTVhOC0yNWQyNzAzZWRiNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40jEdbAAAAmklEQVR42mL8//8/AyXAysrKBkhNBGL/Y8eOPUGWY2KgHNwEYjYgPgC0SIaqhgNd+xpIOQHxZyA+ArRAhZouh1ngAMQvoT4AW8AICnMgx4CBOoAHiCcDsSwQu7FABc8zUB8shhkuSCUDBYB4DRBLAnEgI6VJESlJigKpfUDMCQp/ULJkopXBVEktuAymVlJUB+If6AaDAECAAQAifDSWB8sPSgAAAABJRU5ErkJggg==">
      </div>
      <div class="news_main clearfix">
        <div class="news_left wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
          <ul>
            <li v-for="(item, index) in newsMenu" :key="index" :class="newsMenuIndex == item.id ? 'active' : ''"
              @click="selectNewsType(item)">{{ item.seriesName }}</li>
          </ul>
        </div>
        <div class="news_right wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
          <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :data-index="item.id" v-for="(item, index) in newsInfo ">
                <div class="news_info">
                  <div class="date">
                    <span>{{ item.dateOfDay }}</span>
                    /{{ item.dateOfMonth }}
                  </div>
                  <div class="news_title">{{ item.theme }}</div>
                  <div class="news_desc">
                    {{ item.introduce }}
                  </div>
                </div>
                <div class="image">
                  <div class="news_pic" :style="{ backgroundImage: 'url(' + item.pic + ')' }">
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="swiper-pagination swiper-pagination-fraction">
            <span class="swiper-pagination-current"></span>
            /
            <span class="swiper-pagination-total"></span>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-notification"></div>
        </div>

      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { fetchTypeList,fetchNewsByType } from '@/api/news';
//导入js
import Swiper from 'swiper';
//引入css
import "swiper/css/swiper.min.css";
export default Vue.extend({
  name: 'NewsView',
  data() {
    return {
      newsMenuIndex: 0,
      //新闻资讯 先捕獲菜單然后根据捕获来的菜单[0]获取该Type的新闻内容
      newsMenu:[],
      newsInfo:[],
    }
  },
  mounted() {
    let vm = this
    //新闻
    var news = new Swiper('.news_right .swiper-container', {
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
      slidesPerView: 4,
      observer:true, //启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      spaceBetween: 20,
      duration: 3000,
      slidesPerGroup: 4,
      pagination: {
        el: ".news_right .swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".news_right .swiper-button-next",
        prevEl: ".news_right .swiper-button-prev"
      },
    })
    news.on('click', function () {
      var clickedSlide = this.clickedSlide;
      var index = clickedSlide.getAttribute('data-index');
      vm.$router.push({ path: 'news/NewsDetail', query: { newsId: index } })
    });
  },
  created() {
    this.getNewsType()
  },
  methods: {
    getNewsType(){
      fetchTypeList( {keyword: '', pageSize: 8, pageNum: 1}).then(response => {
        this.newsMenu = response.data.list;
        this.newsMenuIndex=this.newsMenu[0].id;
        this.getNewsListByType(this.newsMenu[0].id)
    })
    },
    getNewsListByType(newsType){
      fetchNewsByType( {newsType: newsType, pageSize: 8, pageNum: 1}).then(response => {
        this.newsInfo = response.data.list;
    })    
    },
    selectNewsType(item) {
      this.newsMenuIndex = item.id
      this.getNewsListByType(item.id)
    },
    goNewsList() {
      this.$router.push({ path: 'news' })
    },
  }
})
</script>
<style>
.imain_m {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translate(0, -50%);
  z-index: 2;
}

.newsCenter .newsCenter_inner {
  margin: 30px 98.250px;
  font-size: 0;
  color: #333;

}

.newsCenter .newsCenter_inner .title {
  font-family: OPPOSans-M;
  font-size: 40px;
  line-height: 1;
  font-weight: 700;
  text-align: center;
  display: inline-block;
  margin: 126.081px 49px 30.882px 25px;
  position: relative;
}

.newsCenter .newsCenter_inner .more_news {
  font-family: OPPOSans-M;
  float: right;
  font-size: 14px;
  line-height: 1;
  color: #393939;
  position: relative;
  margin-top: 148px;
  cursor: pointer;
}

.newsCenter .newsCenter_inner .more_news:before {
  content: "";
  width: 25px;
  height: 1px;
  background: #000;
  position: absolute;
  left: 0;
  bottom: -10px;
}

.newsCenter .newsCenter_inner .more_news img {
  height: 9px;
  margin-left: 25px;
}

.newsCenter .newsCenter_inner .news_main .news_left {
  float: left;
  width: 15%;
  height: 476.333px;
  margin-top: 168px;
}

.newsCenter .newsCenter_inner .news_main .news_left li.active {
  color: #49b24c;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.68s;
}

.newsCenter .newsCenter_inner .news_main .news_left li {
  font-family: OPPOSans-M;
  font-size: 15.8px;
  color: #1d1c1c;
  line-height: 1;
  padding-bottom: 30.07px;
  position: relative;
  text-align: center;
  cursor: pointer;
  list-style: none;
}

.newsCenter .newsCenter_inner .news_main .news_left li:before {
  content: "";
  position: absolute;
  left: 19%;
  top: 20%;
  margin-top: -1px;
  height: 2px;
  width: 18px;
  background: #999;
  transition: all 0.68s;
}

.newsCenter .newsCenter_inner .news_main .news_left li.active:before {
  content: "";
  position: absolute;
  left: 19%;
  top: 20%;
  width: 18px;
  transition: all 0.68s;
  background: #49b24c;
  height: 3px;
  margin-top: -1.5px;
}

/* .newsCenter .newsCenter_inner .news_main .news_left li.active:after {
  content: "";
  display: block;
  width: 11.08px;
  height: 5.54px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAHCAYAAAA4R3wZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTg0MTAzODQzMDI2MTFFQzk1NkJBMjBEQzk5NkYzN0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MENFMzAxOUMzMDIyMTFFQzk1NkJBMjBEQzk5NkYzN0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDQyYTQ3OS1iMTg2LTRjNDktYWQ1Mi1mYzU5MDE4ZmQxYmUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMjViOWNlZS0wMmY3LWQ0NDgtYTVhOC0yNWQyNzAzZWRiNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Xt/V+AAAAvElEQVR42mJsnXmk++/ff2sYGBhOMhAH2L79+J3OMnHFqYc/fv9dwMTAkAUU3E+ExtYPH7/bs4jyck759efvK6DAfAaI5m14NM0AYk0mBkYfJqjAKiDOAOJpQByJzXlAvByI5YHYG4hfMSFJ7gDiGCCuBuJ0JHEhIF4DZYcC8RcQgwXN5CNAHAt1Ei8QrwXi2UB8B4iLgPgbTCGjiH0vw/fffxmYUQ1QAeLJQCwDta0FiP/CJD99/M4AEGAA7aAz5v+MUVUAAAAASUVORK5CYII=) no-repeat 50%;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  bottom: 15.82px;
} */

.newsCenter .newsCenter_inner .news_main .news_right {
  background: #fff;
  float: right;
  width: 85%;
  position: relative;
  border-radius: 7.9125px;
  padding: 47.475px 31.65px;
  box-shadow: -1px -1px 20px 12px rgba(0, 0, 0, .11)
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition-property: -webkit-transform;
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide {
  width: 100%;
  border-radius: 7.9125px;
  overflow: hidden;
  cursor: pointer;
}


.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_info {
  height: 213.637px;
  position: relative;
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide:hover .news_info .date {
  color: #49b24c
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide:hover .news_info .date span {
  color: #49b24c
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_info .date {
  height: 67.26px;
  line-height: 1;
  font-size: 12.66px;
  color: #999;
}


.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_info .date span {
  font-size: 36.40px;
  color: #393939;
  margin-right: 7.9125px;
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide:hover .news_info .news_title {
  color: #49b24c
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_info .news_title {
  font-size: 17.408px;
  height: 56px;
  line-height: 28.49px;
  font-family: OPPOSans-M;
  color: #393939;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}


.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_info .news_desc {
  font-size: 12.66px;
  font-family: OPPOSans-M;
  opacity: .8;
  line-height: 21.36px;
  color: #666;
  margin-top: 14.24px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .image {
  width: 100%;
  height: 166.16px;
  border-radius: 7.9125px;
  /* overflow: hidden;
  position: relative; */
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide:hover .news_pic {
  transform: scale(1.1);
}

.newsCenter .newsCenter_inner .news_main .news_right .swiper-container .swiper-wrapper .swiper-slide .news_pic {
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(1);
  transition: transform .6s ease;
}

.news_right .swiper-pagination {
  display: inline-block;
  position: absolute;
  left: inherit;
  right: 0;
  bottom: -45.899px;
  width: auto;
  font-size: 14.245px;
  color: #333333;
  padding-left: 14.245px;
}

.news_right .swiper-pagination.swiper-pagination-current {
  font-size: 23.737px;
}

.news_right .swiper-button-prev {
  position: absolute;
  top: inherit;
  left: 0;
  bottom: -68.899px;
  width: 121.852px;
  height: 63.3px;
  background-color: #e9ecf0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAJCAYAAADQHRcxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA21pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTVDNkFGQUEyRjlGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1RDNEOUUyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRkU0RjVFMTJGOEYxMUVDQjdBMEI0M0I3NTg3NkEwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRkU0RjVFMjJGOEYxMUVDQjdBMEI0M0I3NTg3NkEwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pmaesi8AAACWSURBVHjaYjx69CgDGogB4sdAfJCBRMCExk8E4qlAzM1ABkA2LBOI+4C4AIi3kWMYC5TOAOJaIE4F4jUMZAKQYVVA3ArEu4FYEYgbgJiRRHNA6r+DDFOGCggDsToQ85MZXJ9ZoGH1BYhtgHgiEF8m15sgE38BcSkQnwLinUBsTEmYMUANzAHi/0C8EYj9gPgcqYYBBBgA7tcYiFMlrMoAAAAASUVORK5CYII=);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 17.407px 8.703px;
  border-top-left-radius: 7.9125px;
  border-bottom-left-radius: 7.9125px;
}

.news_right .swiper-button-prev:after {
  content: "";
  width: 1px;
  height: 15.82px;
  background: #c5c5c5;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.news_right .swiper-button-next {
  position: absolute;
  top: inherit;
  left: 121.852px;
  bottom: -68.899px;
  width: 121.852px;
  height: 63.3px;
  background-color: #e9ecf0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAKCAYAAABWiWWfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA21pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1RDNEOUIyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1RDNEOUEyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDQzM0RTZFMzJGODkxMUVDQjdBMEI0M0I3NTg3NkEwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDQzM0RTZFNDJGODkxMUVDQjdBMEI0M0I3NTg3NkEwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psi91MAAAACgSURBVHjaYjx69CgDGcAUiMWAeCuyIBMDeUAfiDcAcRqyIAuZhi0FYl0gngnE7EA8mRLDvgNxPhD/AeJJQMwIokGGxQKxEBD/JdHA30B8G4hPAfFEUBiCDIsGYiWoJKngKxBLQdlxIMO8yfQqyCcyQLwRyg9hIcN7MCAJTRoCQOwBxFfITRrKQLwXiHmhPrtCSWwGADE/ELvDDAIBgAADALZuGsBMn/04AAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 17.408px 8.703px;
  border-top-right-radius: 7.9125px;
  border-bottom-right-radius: 7.9125px;
}

.news_right .swiper-button-prev:hover {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAJCAYAAADQHRcxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEZFNEY1RTYyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEZFNEY1RTUyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDQyYTQ3OS1iMTg2LTRjNDktYWQ1Mi1mYzU5MDE4ZmQxYmUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMjViOWNlZS0wMmY3LWQ0NDgtYTVhOC0yNWQyNzAzZWRiNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7c2YXFAAABIElEQVR42mL8//8/AwxsP3qfYePBuzG8XGyPGzOtDnKxszCQBECGgfDxi88YxDxnJjKY9X1kMO31evfpB1yOWAwmzl1/xcDnPj2Tw3HKe3GPmYmnrrwg2SAQZjl34xWDc/76DGZGhtofv/6mTi1wWKMkw8/w4OlHhv8k+JCJiZGBUcJ7dtXfv39bGRkZdzMyMuz++PMv9+8//4Bc4g369+8/oyQfx3eWrz9/K3OwMIHEhIEmqP/49Yef4ecfBgaSTPvP9ImN5TPjjDWX2DL69nWLC3DZvPz8I6E9yfKylqIQw8cvv4g2DxT2HGzMkAiYs+EyG4PlhOm8LtOeuWavNX759htZEQBnzFl/mZnBZuI0IH6iHrrA6PO3nyQbBhBgABDyEpp/YCTrAAAAAElFTkSuQmCC);
}


.news_right .swiper-button-next:hover {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAJCAYAAADQHRcxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTc1RDNEOTcyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTc1RDNEOTYyRjhGMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDQyYTQ3OS1iMTg2LTRjNDktYWQ1Mi1mYzU5MDE4ZmQxYmUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMjViOWNlZS0wMmY3LWQ0NDgtYTVhOC0yNWQyNzAzZWRiNDQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6bRU/HAAABGklEQVR42mL8//8/A6lg4eZrYievPo+WEOKeU5dm8RkmzsJABth0+O73dduvRTDwc9p++/knqiPX5gdYAuQyUvHff/8ZfAs2KHI7Tz3LYDNxQ9XUo/wgccY3H74zvPv0g4GFiZFolzEzMTH8+vuXwatgg/ibLz/Xvf/841VtrFkiY+WUI57tc447swhwfiXRt/8FOVh/MzIyiAJx3ssXn4+x/Pr9V5zh6y/dP+wsn0gOPA6WXwwMjByMQMDw+68k45mrLxku3HrFwM5GfFyAwkeIn4Mhr/8A25fvv/tfffhm6muumEBWBIBw8+yTLGKeM5cz2Ey65pW/QePzt1/kxWbZpMMsDOZ9y5jsJl/zyF2n9vv3X7A4QIABAI6b6wkXl/k3AAAAAElFTkSuQmCC);
}

.news_right .swiper-button-next:after,
.swiper-container-rtl .swiper-button-prev:after {
  content: '';
}

.news_right:after {
  position: absolute;
  left: 0;
  bottom: -37.899px;
  display: block;
  content: "";
  width: 95%;
  height: 1px;
  background: #49b24c;
}
</style>