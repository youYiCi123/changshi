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
    padding: 1.875rem 0 0.312rem;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: cover;
}

.about-develop .contain {
    width: 20.312rem;
    margin: 0 auto;
}

.common-title.center {
    text-align: center;
}

.common-title {
    width: 100%;
}

.common-title h2 {
    font-size: 0.5rem;
    color: #444;
    font-weight: 700;
}

.about-item {
    width: 100%;
    margin-top: 0.531rem;
    position: relative;
    padding-top: 0.843rem;
}

.about-num {
    position: absolute;
    font-family: Arial;
    top: -0.187rem;
    left: 50%;
    transform: translateX(-50%);
    color: #e8eee8;
    font-size: 4.875rem;
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
    padding: 0.187rem 0;
}

.about-year-link {
    width: 100%;
    text-align: center;
    height: 2.234rem;
    position: relative;
    cursor: pointer;
}

.about-year-link::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 0.093rem;
    background: linear-gradient(to left, rgb(73 183 67 / 80%), rgba(255, 255, 255, 1));
    right: 50%;
    top: 50%;
    margin-top: -0.046rem;
}

.about-year-link i {
    width: 2.234rem;
    height: 2.234rem;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 3;
    margin-left: -1.109rem;
}

.about-year-link i:before {
    position: absolute;
    width: 0.312rem;
    height: 0.312rem;
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
    font-size: 0.312rem;
    color: #444444;
    z-index: 4;
    transition: all .4s ease;
    font-family: Arial;
    width: 100%;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0.781rem;
}

.swiper-slide-active .about-year-link p {
    color: #fff;
    font-size: 0.625rem;
    margin: 0 !important;
}

.about-year-link:after {
    content: "";
    opacity: 0;
    position: absolute;
    width: 2.234rem;
    height: 2.171rem;
    left: 50%;
    margin-left: -1.109rem;
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
    margin-top: 0.437rem;
    height: 1.875rem;
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
    max-width: 9.125rem;
    margin: 0 auto;
    transition: all 4s ease;
    opacity: 0;
}
.about-wd p {
    font-size: 0.234rem;
    color: #444;
    line-height: 0.562rem;
}

.about-tagyear {
    width: 100%;
    margin-top: 2.625rem;
    position: relative;
}

.about-tagyear ul {
    width: 100%;
    display: flex;
    justify-content: center;
}



.about-prev,
.about-next {
    width: 0.656rem;
    height: 0.656rem;
    position: absolute;
    border-radius: 50%;
    background: #fff url(http://www.aikang-medical.com/template/default/images/common/arrow_dlH..svg) no-repeat center/24px;
    z-index: 4;
    top: 50%;
    transform: rotate(90deg);
    margin-top: -0.328rem;
    cursor: pointer;
    transition: all .4s ease;
    box-shadow: 0 0 0.171rem rgba(0, 0, 0, 0.11);
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
    margin-right: 1rem;
}

.about-tagyear li span {
    font-size: 0.265rem;
    color: #777;
    padding-bottom: 0.187rem;
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
    height: 0.046rem;
    background-color: #0df02b;
    position: absolute;
    right: 0;
    bottom: 0;
    transition: all .2s ease;
}

.about-year .swiper-slide:nth-child(2n+1) .about-year-link p {
    margin-top: -0.781rem;
}

@keyframes aboMs {
    0% {
        opacity: 0;
        transform: translateY(0.312rem);
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