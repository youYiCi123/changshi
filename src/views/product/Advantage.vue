<template>
    <div class="advantage">
        <div class="advantage_inner">
            <div class="advantage_lunbo wow fadeInUp">
                <div class="part2">
                    <div class="con-l">
                        <div class="product-title-swiper swiper-container-vertical wow fadeInLeft"
                            style="visibility: visible; animation-name: fadeInLeft;">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, index) in businessDataList" :key="index">
                                    <a class="title">{{ item.title }}</a>
                                    <ul class="list">
                                        <li v-for="(itemChild, index) in item.list">
                                            {{ itemChild }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="con-r">
                        <div class="product-swiper swiper-container-horizontal wow fadeInRight"
                            style="visibility: visible; animation-name: fadeInRight;">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" style="width: 957px;" v-for="(item, index) in businessDataList"
                                    :key="index">
                                    <div class="tit">{{ item.title }}</div>
                                    <a class="pic" :style="{ backgroundImage: 'url(' + item.picUrl + ')' }"></a>
                                </div>
                            </div>
                            <div class="btn prev-btn"></div>
                            <div class="btn next-btn"></div>
                        </div>
                    </div>
                    <div class="product-number"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
//导入js
import Swiper from 'swiper';
//引入css
import "swiper/css/swiper.min.css";

export default Vue.extend({
    name: 'Advantage',
    data() {
        return {
            //双swiper产品介绍
            businessDataList: [{
                id: 0, title: '真菌检测', picUrl: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230315164135.jpg',
                list: ['电光转换效率高', '输出光纤长度可定制', '1免维护运行', '宽调制频率范围']
            },
            {
                id: 1, title: '真菌检测', picUrl: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230315164135.jpg',
                list: ['电光转换效率高', '输出光纤长度可定制', '2免维护运行', '宽调制频率范围']
            },
            {
                id: 2, title: '真菌检测', picUrl: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230315164135.jpg',
                list: ['电光转换效率高', '输出光纤长度可定制', '3免维护运行', '宽调制频率范围']
            },
            {
                id: 3, title: '多模组连续光纤激光器4', picUrl: 'https://www.raycuslaser.com/upload/20210330/1f20djt6016i914adb.png',
                list: ['电光转换效率高', '输出光纤长度可定制', '4免维护运行', '宽调制频率范围']
            },],
        }
       
    },
    mounted() {
          //产品标题
    var productTitleSwiper = new Swiper('.product-title-swiper', {
      direction: 'vertical',
      slidesPerView: 'auto',
      centeredSlides: true,
      speed: 1000,
      slideToClickedSlide: true,
      on: {
        slideChange: function () {
          var i = productTitleSwiper.activeIndex;
          productSwiper.slideTo(i);
          let productNumber = document.getElementsByClassName("product-number")[0] as HTMLElement
          productNumber.innerText = '0' + (i + 1)
        }
      }
    })
    //产品轮播
    var productSwiper = new Swiper('.product-swiper', {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      speed: 1000,
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      on: {
        slideChange: function () {
          var i = productSwiper.activeIndex;
          productTitleSwiper.slideTo(i);
        }
      }
    })
    }
})
</script>
<style>

.advantage {
  width: 100%;
  /* height: 9.28rem; */
  background-size: auto 5.84rem;
  background: #f5f7fc;
}

.advantage .advantage_inner {
  margin: 0 285px;
}

fieldset,
img {
  border: 0;
} 

.advantage .advantage_inner .advantage_lunbo .lunbo_preview {
  width: 100%;
  height: 7rem;
  border-top-left-radius: 0.1rem;
  border-top-right-radius: 0.1rem;
  overflow: hidden;
  position: relative;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview img {
  width: 100%;
  height: 100%;
  -webkit-transition: .3s linear;
  transition: .3s linear;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .img_mask {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .3);
}


.advantage .advantage_inner .advantage_lunbo .lunbo_preview.active .preview_txt {
  -webkit-animation-name: advPreviewText;
  animation-name: advPreviewText;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt {
  position: absolute;
  width: 6.54rem;
  left: 1.8rem;
  top: 1.72rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt h3 {
  font-size: .36rem;
  line-height: .5rem;
  color: #fff;
  letter-spacing: .1rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt h4 {
  font-size: .18rem;
  color: hsla(0, 0%, 100%, .5);
  line-height: .38rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt .myTxt p {
  font-size: .18rem;
  margin-top: 0.48rem;
  line-height: .3rem;
  color: #fff;
  min-height: 1.65rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt .more_desc {
  width: 1.9rem;
  height: 0.6rem;
  line-height: .6rem;
  margin-top: 0.2rem;
  text-align: center;
  border: 1px solid #fff;
  border-bottom-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  font-size: .18rem;
  color: #fff;
  cursor: pointer;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview .preview_txt .more_desc img {
  width: 0.22rem;
  margin-left: 0.3rem;
  height: 0.11rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_preview img {
  width: 100%;
  height: 100%;
  -webkit-transition: .3s linear;
  transition: .3s linear;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list {
  margin-top: 0.1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

ol,
ul {
  list-style: none;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list li:first-child {
  border-bottom-left-radius: 0.1rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list li {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 0.1rem;
  background: #eceef1;
  text-align: center;
  height: 1.24rem;
  cursor: pointer;
  -webkit-transition: .2s linear;
  transition: .2s linear;
}

a,
button,
li,
span {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -moz-user-focus: none;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list li .icon {
  width: 0.46rem;
  height: 0.46rem;
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
  margin: 0.22rem auto 0.18rem;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list li .title {
  font-size: .2rem;
  line-height: 1;
  color: #264994;
  -webkit-transition: .3;
  transition: .3;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list .checkAd {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAB8CAYAAACVF3m1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4NpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5OWIyN2U4Yi1iMWE1LTQ1OWQtYjkxZC1mOGQzYWQ5MjUwODkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTJCOTEwMkEyRjY0MTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzBGODM4ODgyRjYzMTFFQ0I3QTBCNDNCNzU4NzZBMDciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MDQyYTQ3OS1iMTg2LTRjNDktYWQ1Mi1mYzU5MDE4ZmQxYmUiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozMjViOWNlZS0wMmY3LWQ0NDgtYTVhOC0y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) #264994 no-repeat 50%;
  background-size: auto 100%;
}

.advantage .advantage_inner .advantage_lunbo .lunbo_list .checkAd .title {
  color: #fff;
}


.product-title-swiper {
  width: 400px;
  height: 400px;
  overflow: hidden;
}

.product-title-swiper .swiper-slide {
  height: auto;
  transform: scale(.6);
  opacity: .1;
  transition: 0.5s;
}


.product-title-swiper .swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}

.product-title-swiper .swiper-slide .title {
  display: block;
  font-size: 32px;
  line-height: 40px;
  font-weight: bold;
  cursor: pointer;
}



.part2>.con-l {
  float: left;
  width: 30%;
  padding-top: 8%;
}

.product-title-swiper .swiper-slide .list {
  overflow: hidden;
  height: 0;
  padding: 10px 0;
  transform: scaleY(0);
  transition: 1s;
}


.product-title-swiper .swiper-slide-active .list {
  height: auto;
  transform: scaleY(1);
}



.product-title-swiper .swiper-slide .list li:before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 4px;
  height: 4px;
  background-color: #333;
  border-radius: 50%;
}

.product-title-swiper .swiper-slide .list li {
  position: relative;
  float: left;
  width: 40%;
  padding-left: 15px;
  margin: 10px 0;
  font-size: 16px;
  line-height: 20px;
}


.product-swiper {
  position: relative;
  padding: 50px 0;
  overflow: hidden;
}

.product-swiper .swiper-slide {
  overflow: hidden;
}

.product-swiper .swiper-slide .tit {
  display: none;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
}

.product-swiper .swiper-slide .pic {
  display: block;
  padding-top: 60%;
  margin: 0 15%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}

.product-swiper .btn {
  z-index: 1;
  position: absolute;
  bottom: 20px;
  width: 40px;
  height: 40px;
  color: #999;
  cursor: pointer;
  transition: 0.3s;
}

.product-swiper .prev-btn {
  right: 50%;
  transform: translateX(-50%);
}

.product-swiper .prev-btn:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  background-color: currentColor;
}

.product-swiper .prev-btn:after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 12px;
  height: 12px;
  border-top: 2px solid currentColor;
  border-left: 2px solid currentColor;
  transform: translate(0, -50%) rotate(-45deg);
}

.product-swiper .next-btn {
  left: 50%;
  transform: translateX(50%);
}

.product-swiper .next-btn:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 2px;
  margin-top: -1px;
  background-color: currentColor;
}


.product-swiper .next-btn:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  width: 12px;
  height: 12px;
  border-top: 2px solid currentColor;
  border-right: 2px solid currentColor;
  transform: translate(-10%, -50%) rotate(45deg);
}

/* 产品展示2 */
.part2 {
  z-index: 1;
  position: relative;
  padding: 0 0 0 10%;
  overflow: hidden;
}

.part2>.con-l {
  float: left;
  width: 30%;
  padding-top: 8%;
}


.part2>.con-r {
  margin-left: 30%;
}


.part2 .product-number {
  z-index: -1;
  position: absolute;
  left: -20px;
  bottom: -20px;
  font-family: Arial;
  font-size: 400px;
  line-height: 300px;
  font-weight: bold;
  color: #e0e6f6;
}
</style>