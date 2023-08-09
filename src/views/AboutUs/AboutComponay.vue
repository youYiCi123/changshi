<template>
    <div class="wrap">
        <!-- <div class="zdInner_ban Inner_ban"
        style="background-image: url(http://www.assuretech.com.cn/uploadpic/166994845246.jpg);">
        <div class="zdInner_txt">
            <div class="ind-title-l">
                <p class="title-en f-48 wow fadeInUp">新闻资讯</p>
                <span class="wow fadeInUp"></span>
                <p class="title-cn f-18 wow fadeInUp">了解最新动态 &nbsp;掌握最新资讯</p>
            </div>
        </div>
    </div> -->
    <Head></Head>
        <full-page :options="options" ref="fullpage">
            <div id="content">
                <div class="section imain">
                    <CompanyProfile></CompanyProfile>
                </div>
                <div class="section imain">
                    <Culture></Culture>
                </div>
                <div class="section imain imaiTo2">
                    <EnterpriseHistory></EnterpriseHistory>
                </div>
                <div class="section imain">
                    <Sell></Sell>
                </div>
                <div class="section imain">
                    <Paper></Paper>
                </div>
            </div>
        </full-page>    
    </div>
</template>
<script  lang="ts">
import Vue from 'vue';
import { WOW } from 'wowjs'
import Sell from "@/views/AboutUs/Sell.vue";
import Head from "@/components/Head/index.vue";
import Culture from "@/views/AboutUs/Culture.vue";
import CompanyProfile from "@/views/AboutUs/CompanyProfile.vue";
import Paper from "@/views/AboutUs/Paper.vue";
import EnterpriseHistory from '@/views/AboutUs/EnterpriseHistory.vue';
export default Vue.extend({
    name: 'AboutComponay',
    components: {
        Sell, Paper, EnterpriseHistory, Culture,Head,CompanyProfile
    },
    data() {
        return {
            options: {
                // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                // 是否显示导航，默认为false

                anchors: ['CompanyProfile','Culture', 'EnterpriseHistory', 'Sell', 'Paper'], // 注意不带#
                menu: '#menu', // 绑
                recordHistory: true,
                // afterLoad(anchorLink, page) {
                //     let pageIconNumber = document.getElementsByClassName("pageIcon") as HTMLCollectionOf<HTMLElement>
                //     for (let i = 0; i < pageIconNumber.length; i++) {
                //      if(page.index==i){
                //       pageIconNumber[i].style.background="#49b24c"
                //      }else{
                //       pageIconNumber[i].style.background="transparent"
                //      }
                //     }
                //   if (page.index == 0) {
                //     document.getElementsByClassName('header')[0].classList.remove('header_c')
                //    document.getElementsByClassName('inav')[0].classList.remove('inav_c')
                //   }else if(page.index == 1){
                //     document.getElementsByClassName('header')[0].classList.add('header_c')
                //    document.getElementsByClassName('inav')[0].classList.add('inav_c')
                //   }
                //   else if(page.index == 2){
                //     document.getElementsByClassName('header')[0].classList.add('header_c')
                //    document.getElementsByClassName('inav')[0].classList.add('inav_c')
                //   }
                //   else if(page.index == 3){
                //     document.getElementsByClassName('header')[0].classList.add('header_c')
                //    document.getElementsByClassName('inav')[0].classList.add('inav_c')
                //   }else if(page.index == 4){
                //     document.getElementsByClassName('header')[0].classList.remove('header_c')
                //    document.getElementsByClassName('inav')[0].classList.remove('inav_c')
                //   }
                // },
                scrollBar: true,
                afterRender: function () {
                    var wow = new WOW({
                        boxClass: 'wow',
                        animateClass: 'animated',
                        offset: 40,
                        mobile: true,
                        live: true,
                    });
                    wow.init();
                },
            },
        }
    },

})
</script>
<style>
.imain {
  position: relative;
}
.imaiTo2{
    background: url(http://www.aikang-medical.com/template/default/images/pages/developBj.png) center center no-repeat;
  background-size: cover;
}
</style>