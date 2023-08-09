<template>
    <div class="about-develop">
        <div class="contain">
            <div class="common-title center">
                <h2>发展历程</h2>
            </div>
            <div class="about-item wow fadeInUp">
                <div class="about-year">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(item,index) in historyYear">
                                <div class="about-year-link">
                                    <i></i>
                                    <p>{{ item.year }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="about-wdbox">
                    <ul>
                        <li v-for="(item,index) in historyList">
                            <div class="about-wd" >
                                <p v-for="(childItem,childIndex) in item.historyContentList">{{ childItem }}</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="about-tagyear">
                    <ul>
                        <li v-for="(item,index) in tabYear" :key="index" @click="shiftSwiper(index)">
                            <span>{{ item.year }}</span>
                        </li>
                    </ul>
                    <div class="about-prev swiper-button-disabled"></div>
                    <div class="about-next"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
//导入js
import Swiper from 'swiper';
//引入css
import "swiper/css/swiper.min.css";
import { fetchHistoryList} from '@/api/aboutUs';
export default Vue.extend({
    name: 'EnterpriseHistory',
    data() {
        return {
            historyYear:[],
            historyList:[],//年份详情信息
            tabYear:[],//底部栏年份
            aboutSwiper:null,
        }
    },
    mounted() {
        this.aboutSwiper = new Swiper('.about-year .swiper-container', {
            speed: 800,
            autoplayDisableOnInteraction: false,
            observer:true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: '.about-next',
                prevEl: '.about-prev',
            },
            slideToClickedSlide: true,
            breakpoints: {
                1000: {
                    slidesPerView: 3,
                },
                640: {
                    slidesPerView: 1,
                },
            },
            on: {
                // slideChangeTransitionEnd   会慢
                slideChange: function () {
                    //文字描述：具体历史事件
                    let parentSwiperContiner = document.getElementsByClassName("about-wdbox")[0].getElementsByTagName("ul")[0] as HTMLElement
                    let AllSwipers = parentSwiperContiner.children
                    for (var index = 0; index < AllSwipers.length; index++) {
                        if (index == this.activeIndex) {
                            AllSwipers[index].classList.add('ontrue')
                            //底部栏年份
                            document.getElementsByClassName("about-tagyear")[0].getElementsByTagName("li")[index].classList.add('active')
                        } else {
                            AllSwipers[index].classList.remove('ontrue')
                            //底部栏年份
                            document.getElementsByClassName("about-tagyear")[0].getElementsByTagName("li")[index].classList.remove('active')
                        }
                    }

                }
            },
        });
    },
    created() {
        this.getHistory()
    },
    methods: {
        shiftSwiper(index){
            this.aboutSwiper.slideTo(index);
        },
        getHistory(){
            fetchHistoryList().then(response => {
                let Histories = response.data.list
                Histories.forEach(el => {
                    const Arr = el.yearDesc.split(';')
                    let i=1;
                    let historyDescList=[]
                    Arr.forEach(el=>{
                        historyDescList.push(i+'、'+el);
                        i++;
                    })
                    this.historyList.push({id:el.id,historyContentList:historyDescList})
                    this.historyYear.push({id:el.id,year:el.enterpriseYear})
                    this.tabYear.push({id:el.id,year:el.enterpriseYear})
                })
            })
        }
    }
})
</script>
<style>
.about-develop {
    width: 100%;
    padding: 120px 0 20px;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
}

.about-develop .contain {
    width: 1300px;
    margin: 0 auto;
}

.common-title.center {
    text-align: center;
}

.common-title {
    width: 100%;
}

.common-title h2 {
    font-size: 32px;
    color: #444;
    font-weight: 700;
}

.about-item {
    width: 100%;
    margin-top: 34px;
    position: relative;
    padding-top: 54px;
}

.about-num {
    position: absolute;
    font-family: Arial;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    color: #e8eee8;
    font-size: 312px;
    line-height: .8em;
    background: linear-gradient(to bottom, #f0f0f0, #fff);
    background: -ms-linear-gradient(to bottom, #f0f0f0, #fff);
    background: -moz-linear-gradient(to bottom, #f0f0f0, #fff);
    background: -webkit-linear-gradient(to bottom, #f0f0f0, #fff);
    background: -o-linear-gradient(to bottom, #f0f0f0, #fff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.about-year {
    width: 100%;
    position: relative;
}

.about-year .swiper-container {
    z-index: 3;
    padding: 12px 0;
}

.about-year-link {
    width: 100%;
    text-align: center;
    height: 143px;
    position: relative;
    cursor: pointer;
}

.about-year-link::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 6px;
    background: linear-gradient(to left, rgb(73 183 67 / 80%), rgba(255, 255, 255, 1));
    right: 50%;
    top: 50%;
    margin-top: -3px;
}

.about-year-link i {
    width: 143px;
    height: 143px;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 3;
    margin-left: -71px;
}

.about-year-link i:before {
    position: absolute;
    width: 20px;
    height: 20px;
    content: "";
    background: #45d01e;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

.swiper-slide-active .about-year-link i:before {
    opacity: 0;
}

.swiper-slide-active .about-year-link i:after {
    transform: scale(1);
    opacity: 1;
}

.about-year-link i:after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8%E5%8E%86%E7%A8%8B.png) no-repeat center;
    background-size: 100%;
    top: 0;
    left: 0;
    transition: all .6s ease;
    transform: scale(0);
    opacity: 0;
}

.about-year-link p {
    font-size: 20px;
    color: #444444;
    z-index: 4;
    transition: all .4s ease;
    font-family: Arial;
    width: 100%;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 50px;
}

.swiper-slide-active .about-year-link p {
    color: #fff;
    font-size: 40px;
    margin: 0 !important;
}

.about-year-link:after {
    content: "";
    opacity: 0;
    position: absolute;
    width: 143px;
    height: 139px;
    left: 50%;
    margin-left: -71px;
    top: 0;
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8%E5%8E%86%E7%A8%8B1.png) no-repeat center;
    background-size: 100%;
    animation: aboQq 3s linear infinite;
}

.swiper-slide-active .about-year-link:after {
    opacity: 1;
    transition: all .4s ease .4s;
}

.about-wdbox {
    width: 100%;
    margin-top: 28px;
    height: 120px;
}

.about-wdbox li.ontrue {
    display: block;
}

.about-wdbox li {
    width: 100%;
    display: none;
}

.about-wdbox li.ontrue .about-wd {
    animation: aboMs 1s ease both .2s;
}

.about-wd {
    max-width: 584px;
    margin: 0 auto;
    transition: all 4s ease;
    opacity: 0;
}
.about-wd p {
    font-size: 15px;
    color: #444;
    line-height: 36px;
}

.about-tagyear {
    width: 100%;
    margin-top: 168px;
    position: relative;
}

.about-tagyear ul {
    width: 100%;
    display: flex;
    justify-content: center;
}



.about-prev,
.about-next {
    width: 42px;
    height: 42px;
    position: absolute;
    border-radius: 50%;
    background: #fff url(http://www.aikang-medical.com/template/default/images/common/arrow_dlH..svg) no-repeat center/24px;
    z-index: 4;
    top: 50%;
    transform: rotate(90deg);
    margin-top: -21px;
    cursor: pointer;
    transition: all .4s ease;
    box-shadow: 0 0 11px rgba(0, 0, 0, 0.11);
}

.about-prev {
    left: 6%;
}

.about-next {
    right: 6%;
    transform: rotate(270deg);
}

.about-tagyear li {
    list-style-type: none;
    float: left;
    margin-right: 64px;
}

.about-tagyear li span {
    font-size: 17px;
    color: #777;
    padding-bottom: 12px;
    position: relative;
    cursor: pointer;
}

.about-tagyear li.active span::after {
    width: 100%;
    left: 0;
    right: auto;
}

.about-tagyear li span::after {
    content: '';
    width: 0%;
    height: 3px;
    background-color: #0df02b;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: all .2s ease;
}

.about-year .swiper-slide:nth-child(2n+1) .about-year-link p {
    margin-top: -50px;
}

@keyframes aboMs {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes aboQq {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>