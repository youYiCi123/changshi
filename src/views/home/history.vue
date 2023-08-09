<template>
    <div class="fp-tableCell" style="height: 690px;">
        <div class="imain_m">
            <div class="mainbox">
                <div class="iabout ">
                    <div class="tit  wow fadeInUp">合肥天一生物简介</div>
                    <div class="con  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
                        {{ companyIntroduce }}
                    </div>
                </div>
                <div class="ihistory_box">
                    <div class="ihistory swiper-container-horizontal">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style="width: 290px;" v-for="(item, index) in companyProfileList"
                                :key="index">
                                <div class="item">
                                    <div class="tit">{{ item.year }}</div>
                                    <div class="con">
                                        <ul>
                                            <li v-for="(itemChild, index) in item.progressList">{{ itemChild }}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="idown">向下滑动</div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
//导入js
import Swiper from 'swiper';
//引入css
import "swiper/css/swiper.min.css";
import { fetchHistoryList, fetchCompanyIntro } from '@/api/aboutUs';

export default Vue.extend({
    name: 'History',
    data() {
        return {
            //swiper公司介绍
            companyIntroduce: "",
            companyProfileList: [],
        }
    },
    created() {
        this.getCompanyIntro()
        this.getHistoryList()
    },
    methods: {
        getCompanyIntro() {
            fetchCompanyIntro().then(response => {
                this.companyIntroduce = response.data.introduce
            })
        },
        getHistoryList() {
            fetchHistoryList().then(response => {
                let Histories = response.data.list
                Histories.forEach(el => {
                    const Arr = el.yearDesc.split(';')
                    this.companyProfileList.push({
                        year: el.enterpriseYear,
                        progressList: Arr
                    });
                })
            })
        }
    },
    mounted() {
        //公司历史
        var mySwiper1 = new Swiper('.ihistory', {
            loop: true,
            slidesPerView: 4,
            observer: true,
            spaceBetween: 0,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.ihistory_box .swiper-button-next',
                prevEl: '.ihistory_box .swiper-button-prev',
            },
            breakpoints: {
                999: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                }
            }
        })
    },
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

.mainbox {
    width: 1400px;
    margin: 0 auto;
}

.iabout .tit {
    text-align: center;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
    line-height: 42px;
    font-family: OPPOSans-L;
    margin-bottom: 32px;
    letter-spacing: 1px;
}

.iabout .con {
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(10px);
    text-shadow: 0 5px 25px rgba(0, 0, 0, .1);
    box-shadow: 0 5px 25px rgba(0 0 0/20%);
    border-radius: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .1);
    border-right: 1px solid rgba(255, 255, 255, .1);

    font-family: OPPOSans-L;
    text-align: center;
    font-size: 14px;
    color: #f7f7f7;
    line-height: 26px;
    padding: 10px 50px;
}

.ihistory_box {
    height: 290px;
    padding: 0 120px;
    position: relative;
}

.ihistory {
    overflow: hidden;
    height: 290px;
    position: relative;
}

.ihistory .swiper-slide {
    height: 290px;
}

.ihistory .item {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0 40px 0 18px;
}

.ihistory .item .tit {
    font-size: 16px;
    line-height: 38px;
    color: #fff;
    font-weight: bold;
    padding-left: 10px;
}

.ihistory .item .con {
    font-size: 12px;
    font-family: OPPOSans-L;
    line-height: 18px;
    color: #b9bbc0;
    padding-bottom: 30px;
}



.ihistory .item .con ul li:before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #b9bbc0;
}

.ihistory .item .con ul li {
    margin-bottom: 6px;
    padding-left: 10px;
    position: relative;
    color: #979eaa;
    list-style: none
}

.ihistory:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: 5px;
    right: 0;
    height: 2px;
    background: #fff;
}

.ihistory .item:after {
    display: block;
    content: '';
    position: absolute;
    left: 28px;
    bottom: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #031c4b;
    border: 2px #fff solid;
}

.ihistory_box .swiper-button-prev,
.ihistory_box .swiper-button-next {
    top: 180px;
}


.ihistory .item .con {
    font-size: 12px;
    line-height: 18px;
    color: #b9bbc0;
    padding-bottom: 30px;
}

.idown {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
    padding-bottom: 50px;
    bottom: 0;
}

.idown:after {
    display: block;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: 42px;
    background: #fff;
    opacity: 0.5;
}
</style>