<template>
    <div>
        <div class="productDetialBox">
            <div class="left wow  fadeInLeft animated" data-wow-duration="1s" data-wow-delay="0s">
                <div class="swiper-container pro_img_container">
                    <div class="swiper-wrapper">
                        <div class="imgDisplay swiper-slide" v-for="(item, index) in prodInfo.albumPics">
                            <div class="img_con">
                                <img :src="item">
                            </div>
                        </div>
                    </div>
                    <div
                        class="swiper-pagination swiper-pagination-pro-img swiper-pagination-clickable swiper-pagination-bullets">
                    </div>
                </div>
            </div>
            <div class="fr textbox">
                <div class="title">
                    <h4>{{ prodInfo.prodName }}</h4>
                    <p>{{ prodInfo.principle }}</p>
                </div>
                <div class="shuom">
                    <div class="desone">{{ prodInfo.feature }}</div>
                    <div class="Rwbox">
                        {{ prodInfo.registerCard }}<br>
                        {{ prodInfo.model }}<br>
                        {{ prodInfo.expireDate }}<br>
                        {{ prodInfo.pack }}<br>
                    </div>
                </div>
                <div class="Anunbox">
                    <a>购买</a>
                    <a>下载说明书</a>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="section_wrapper">
                <div class="tabs">
                    <span class="tab_item"> 同类推荐 </span>
                </div>
                <div class="content_wrapper">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            <div class="swiper-slide" v-for="(item, index) in recommendProductList" :key="index">
                                <a class="recommend_item_link">
                                    <img :src="item.pic">
                                    <div class="recommend_item_info">
                                        <p class="name">{{ item.prodName }}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
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
import { getProdInfo,getRecommendProd } from '@/api/prod';
export default Vue.extend({
    name: 'ProductDetial',
    data() {
        return {
            prodInfo: {
                id: '',
                prodName: '',
                albumPics: [],
                principle: '',
                feature: '',
                registerCard: '',
                model: '',
                expireDate: '',
                pack: ''
            },
            recommendProductList: [],
        }
    },
    mounted() {
        var swiper1 = new Swiper('.left .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 80,
            observer: true,
            observeParents: true,
            direction: 'vertical',            
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.left .swiper-button-next',
                prevEl: '.left .swiper-button-prev',
            },
            pagination: {
                el: '.left .swiper-pagination',
                clickable: true,
            },
        });

        var swiper2 = new Swiper('.section_wrapper .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.section_wrapper .swiper-button-next',
                prevEl: '.section_wrapper .swiper-button-prev',
            },
        });
    },
    created() {
        this.getProd();
    },
    methods: {
        getProd() {
            getProdInfo(this.$route.query.prodId).then(response => {
                this.prodInfo.id = response.data.id
                this.prodInfo.prodName = response.data.prodName
                this.prodInfo.principle = response.data.principle
                this.prodInfo.feature = response.data.feature
                this.prodInfo.registerCard = response.data.registerCard
                this.prodInfo.model = response.data.model
                this.prodInfo.expireDate = response.data.expireDate
                this.prodInfo.pack = response.data.pack
                this.prodInfo.albumPics.push(response.data.pic)
                //相册有照片
                if (response.data.albumPics != '' && response.data.albumPics != null) {
                    const Arr = response.data.albumPics.split(',');
                    Arr.forEach(element => {
                        this.prodInfo.albumPics.push(element)
                    });
                }
                //获取推荐产品
                this.getRecommendProd(response.data.id,response.data.prodType)
            })
        },
        getRecommendProd(id:number,prodType:number){
            getRecommendProd({prodId:id,prodType:prodType}).then(response=>{
                this.recommendProductList=response.data.list
            })
        }
    },
})
</script>
<style>
.productDetialBox {
    width: 87%;
    height: 9.375rem;
    border-top: 0.015rem solid #eee;
    justify-content: space-between;
    align-items: center;
    padding: 0.781rem 0 0 0;
    margin-left: 3.906rem;
}

.textbox {
    width: 48%;
    padding-top: 2.773rem;
}

.productDetialBox .left {
    float: left;
    width: 46%;
    height: 100%;
    /* padding-top: 46%; */
    position: relative;
    background: url(http://www.tianjinmedan.com/public/template/zh/skin/images/Ai_bg.png) no-repeat center center;
    background-size: 100% 100% !important;
}

.pro_img_container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.imgDisplay {
    width: 100%;
    height: 100%;
    text-align: center;
}

.imgDisplay .img_con {
    width: 100%;
    height: 100%;
    text-align: center;
}

.img_con img {
    width: 55%;
    height: 50%;
    margin-top: 25%;
}

.fr {
    float: right;
}

.textbox .title {
    color: #333333;
    font-size: 0.341rem;
    line-height: 0.426rem;
    margin-bottom: 0.284rem;
}

.textbox h4 {
    font-family: OPPOSans-M;
    font-size: 0.426rem;
    color: #4fb46e;
    margin-bottom: 0.142rem;
}

.textbox .title p {
    font-family: OPPOSans-M;
    font-size: 0.255rem;
}

.textbox .shuom {
    font-size: 0.255rem;
    color: #666666;
}

.textbox .desone {
    font-size: 0.341rem;
    min-height: 0;
    font-family: OPPOSans-M;
    margin-bottom: 0.284rem;
    color: #333;
}

.textbox .Rwbox {
    line-height: 0.511rem;
    font-family: OPPOSans-M;
}

.Anunbox {
    margin-top: 0.568rem;
}

.Anunbox a {
    display: inline-block;
    min-width: 109.2px;
    line-height: 32.76px;
    border-radius: 27.3px;
    background: #4fb46e;
    color: #fff;
    text-align: center;
    margin-right: 0.568rem;
    font-size: 0.199rem;
}

.Anunbox a:last-child {
    margin-right: 0;
}

.pro_img_container .swiper-pagination-pro-img:before {
    width: 1px;
    height: calc(100% - 162px);
    background: #4fb46e;
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}



.pro_img_container .swiper-pagination-pro-img .swiper-pagination-bullet {
    margin: 20px 0;
    width: 15px;
    height: 15px;
    background: #fff;
    border: 1px solid #4fb46e;
    opacity: 1;
    z-index: 100;
    position: relative;
}

.pro_img_container .swiper-pagination-pro-img .swiper-pagination-bullet-active {
    background: #4fb46e;
}

.recommend {
    /* background-color: #f7f7f7; */
    height: 524px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.recommend .tabs {
    padding: 55px 0 10px 80px;
    font-size: 16px;
    color: #000;
    font-weight: 700;
    overflow: hidden;
}

.recommend .tabs .tab_item {
    cursor: pointer;
    display: inline-block;
    margin-right: 36px;
}

.section_wrapper .swiper-button-prev {
    background: url(https://www.oebiotech.com/static/default/images/about_l.png)no-repeat;
    background-size: cover;
    width: 54px;
    color: rgba(0, 0, 0, 0) !important;
    height: 54px;
    margin-top: 36px;
    left: 0;
    margin-left: 2px;
}

.section_wrapper .swiper-button-next {
    background: url(https://www.oebiotech.com/static/default/images/about_r.png)no-repeat;
    background-size: cover;
    width: 54px;
    height: 54px;
    color: rgba(0, 0, 0, 0) !important;
    margin-top: 36px;
    right: 0;
    margin-right: 2px;
}

.section_wrapper {
    padding-top: 50px;
    position: relative;
    width: 1200px;
    margin: 0 auto;
}

.recommend .section_wrapper .content_wrapper {
    width: 1008px;
    height: 290px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
}

.recommend .swiper-container .swiper-slide:hover {
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
    -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, .1);
    box-shadow: 0 0 30px rgba(0, 0, 0, .1)
}

.recommend .swiper-container .swiper-slide {
    width: 245px;
    height: 277px;
    text-align: center;
    background-color: #f7f7f7;
    display: inline-block;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}

.recommend .swiper-container .recommend_item_link {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.recommend .swiper-container .recommend_item_link img {
    width: 170px;
    height: 170px;
    margin-top: 16px;
}

.recommend .swiper-container .recommend_item_info {
    font-size: 14px;
}

.recommend .swiper-container .recommend_item_info .name {
    padding: 16px 30px 0;
    color: #333;
    line-height: 30px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>