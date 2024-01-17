<template>
    <div>
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
    width: 21.875rem;
    margin: 0 auto;
}

.iabout .tit {
    text-align: center;
    font-size: .625rem;
    color: #fff;
    font-weight: bold;
    line-height: .656rem;
    font-family: OPPOSans-L;
    margin-bottom: .5rem;
    letter-spacing: .015rem;
}

.iabout .con {
    background: rgba(255, 255, 255, .1);
    backdrop-filter: blur(10px);
    text-shadow: 0 .078rem .390rem rgba(0, 0, 0, .1);
    box-shadow: 0 .078rem .390rem rgba(0 0 0/20%);
    border-radius: .156rem;
    border-bottom: .015rem solid rgba(255, 255, 255, .1);
    border-right: .015rem solid rgba(255, 255, 255, .1);

    font-family: OPPOSans-L;
    text-align: center;
    font-size: .218rem;
    color: #f7f7f7;
    line-height: .406rem;
    padding: 0.156rem 0.781rem;
}

.ihistory_box {
    height: 4.531rem;
    padding: 0 1.875rem;
    position: relative;
}

.ihistory {
    overflow: hidden;
    height: 4.531rem;
    position: relative;
}

.ihistory .swiper-slide {
    height: 4.531rem;
}

.ihistory .item {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0 .625rem 0 .281rem;
}

.ihistory .item .tit {
    font-size: .25rem;
    line-height: .593rem;
    color: #fff;
    font-weight: bold;
    padding-left: .156rem;
}

.ihistory .item .con {
    font-size: .187rem;
    font-family: OPPOSans-L;
    line-height: .281rem;
    color: #b9bbc0;
    padding-bottom: .468rem;
}



.ihistory .item .con ul li:before {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: .125rem;
    width: .046rem;
    height: .046rem;
    border-radius: 50%;
    background: #b9bbc0;
}

.ihistory .item .con ul li {
    margin-bottom: .093rem;
    padding-left: .156rem;
    position: relative;
    color: #979eaa;
    list-style: none
}

.ihistory:after {
    display: block;
    content: '';
    position: absolute;
    left: 0;
    bottom: .078rem;
    right: 0;
    height: .031rem;
    background: #fff;
}

.ihistory .item:after {
    display: block;
    content: '';
    position: absolute;
    left: .437rem;
    bottom: 0;
    width: .125rem;
    height: .125rem;
    border-radius: 50%;
    background: #031c4b;
    border: .031rem #fff solid;
}

.ihistory_box .swiper-button-prev,
.ihistory_box .swiper-button-next {
    top: 2.812rem;
}


.ihistory .item .con {
    font-size: .187rem;
    line-height: .281rem;
    color: #b9bbc0;
    padding-bottom: .468rem;
}

.idown {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    font-size: .187rem;
    line-height: .312rem;
    color: #fff;
    padding-bottom: .781rem;
    bottom: 0;
}

.idown:after {
    display: block;
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 1px;
    height: .656rem;
    background: #fff;
    opacity: 0.5;
}
</style>