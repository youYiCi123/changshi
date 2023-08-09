<template>
    <div class="patentbg pd" id="j3">
   
        <div class="honor w12">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in honorList" :key="index">
                        <div class="img">
                            <img :src="item">
                        </div>
                        <div class="tit">{{ item.title }}</div>
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="patent w12">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in patentList" :key="index">
                        <div class="img">
                            <img :src="item">
                        </div>
                        <!-- <div class="tit">{{ item.title }}</div> -->
                    </div>
                </div>
            </div>
            <div class="swiper-button-prev" ></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { fetchCompanyIntro } from '@/api/aboutUs';
//导入js
import Swiper from 'swiper';
//引入css
import "swiper/css/swiper.min.css";
export default Vue.extend({
    name: 'Paper',
    data() {
        return {
            honorList:[],
            patentList:[]
        }
    },
    mounted() {

        var swiper1 = new Swiper('.honor .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 40,
            observer:true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.honor .swiper-button-next',
                prevEl: '.honor .swiper-button-prev',
            },
            pagination: {
                el: '.honor .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                820: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                }
            }
        });

        var swiper2 = new Swiper('.patent .swiper-container', {
            slidesPerView: 5,
            spaceBetween: 40,
            observer:true,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.patent .swiper-button-next',
                prevEl: '.patent .swiper-button-prev',
            },
            pagination: {
                el: '.patent .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                820: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                }
            }
        });

    },
    created() {
        this. getCompanyPaper()
    },
    methods: {
        getCompanyPaper(){
            fetchCompanyIntro().then(response=>{
                let honorPics=response.data.honorPics.split(',')
                honorPics.forEach(el=>{
                    this.honorList.push(el)
                })
                let patentPics=response.data.patentPics.split(',')
                patentPics.forEach(el=>{
                    this.patentList.push(el)
                })
            })
        }
    },
})
</script>
<style>
.pd {
    margin-top: 95px;
    padding: 88px 0 80px 0;
}
.about_tit {
    font-size: 30px;
    color: #333;
    text-align: center;
    line-height: 1;
    margin-bottom: 36px;
}
.about_tit:after {
    content: '';
    display: block;
    width: 54px;
    height: 3px;
    background: #333;
    margin: 15px auto 0;
}
.honor {
    position: relative;
    margin-top: 60px;
}
.w12 {
    max-width: 1200px;
    margin: 0 auto;
    color: #666666;
}
.honor .img {
    border: 1px solid #efefef;
}
.honor .img img {
    display: block;
    width: 100%;
}
.honor .tit {
    text-align: center;
    line-height: 1;
    font-size: 16px;
    color: #333;
    padding-top: 20px;
}
.patent {
    position: relative;
    margin-top: 60px;
}
.patent .img {
    border: 1px solid #efefef;
}
.patent .img img {
    display: block;
    width: 100%;
    /* height: 390px; */
}
.patent .tit {
    text-align: center;
    line-height: 1;
    font-size: 16px;
    color: #333;
    padding-top: 20px;
}
.honor .swiper-button-prev {
    background: url(https://www.oebiotech.com/static/default/images/about_l.png)no-repeat;
    background-size: cover;
    width: 64px;
    color: rgba(0, 0, 0, 0)!important;
    height: 64px;
    margin-top: -32px;
    left: 0;
    margin-left: -95px;
}
.honor .swiper-button-next {
    background: url(https://www.oebiotech.com/static/default/images/about_r.png)no-repeat;
    background-size: cover;
    width: 64px;
    height: 64px;
    color: rgba(0, 0, 0, 0)!important;
    margin-top: -32px;
    right: 0;
    margin-right: -95px;
}
.patent .swiper-button-prev {
    background: url(https://www.oebiotech.com/static/default/images/about_l.png)no-repeat;
    background-size: cover;
    width: 64px;
    color: rgba(0, 0, 0, 0)!important;
    height: 64px;
    margin-top: -32px;
    left: 0;
    margin-left: -95px;
}
.patent .swiper-button-next {
    background: url(https://www.oebiotech.com/static/default/images/about_r.png)no-repeat;
    background-size: cover;
    width: 64px;
    height: 64px;
    color: rgba(0, 0, 0, 0)!important;
    margin-top: -32px;
    right: 0;
    margin-right: -95px;
}
</style>