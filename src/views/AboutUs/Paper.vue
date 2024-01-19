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
    margin-top: 1.484rem;
    padding: 1.375rem 0 1.25rem 0;
}
.about_tit {
    font-size: 0.468rem;
    color: #333;
    text-align: center;
    line-height: 1;
    margin-bottom: 0.562rem;
}
.about_tit:after {
    content: '';
    display: block;
    width: 0.843rem;
    height: 0.046rem;
    background: #333;
    margin: 0.234rem auto 0;
}
.honor {
    position: relative;
    margin-top: 0.937rem;
}
.w12 {
    max-width: 18.75rem;
    margin: 0 auto;
    color: #666666;
}
.honor .img {
    border: 0.015rem solid #efefef;
}
.honor .img img {
    display: block;
    width: 100%;
}
.honor .tit {
    text-align: center;
    line-height: 1;
    font-size: 0.25rem;
    color: #333;
    padding-top: 0.312rem;
}
.patent {
    position: relative;
    margin-top: 0.937rem;
}
.patent .img {
    border: 0.015rem solid #efefef;
}
.patent .img img {
    display: block;
    width: 100%;
    /* height: 390px; */
}
.patent .tit {
    text-align: center;
    line-height: 1;
    font-size: 0.25rem;
    color: #333;
    padding-top: 0.312rem;
}
.honor .swiper-button-prev {
    background: url(https://www.oebiotech.com/static/default/images/about_l.png)no-repeat;
    background-size: cover;
    width: 1rem;
    color: rgba(0, 0, 0, 0)!important;
    height: 1rem;
    margin-top: -0.5rem;
    left: 0;
    margin-left: -1.484rem;
}
.honor .swiper-button-next {
    background: url(https://www.oebiotech.com/static/default/images/about_r.png)no-repeat;
    background-size: cover;
    width: 1rem;
    height: 1rem;
    color: rgba(0, 0, 0, 0)!important;
    margin-top: -0.5rem;
    right: 0;
    margin-right: -1.484rem;
}
.patent .swiper-button-prev {
    background: url(https://www.oebiotech.com/static/default/images/about_l.png)no-repeat;
    background-size: cover;
    width: 1rem;
    color: rgba(0, 0, 0, 0)!important;
    height: 1rem;
    margin-top: -0.5rem;
    left: 0;
    margin-left: -1.484rem;
}
.patent .swiper-button-next {
    background: url(https://www.oebiotech.com/static/default/images/about_r.png)no-repeat;
    background-size: cover;
    width: 1rem;
    height: 1rem;
    color: rgba(0, 0, 0, 0)!important;
    margin-top: -0.5rem;
    right: 0;
    margin-right: -1.484rem;
}
</style>