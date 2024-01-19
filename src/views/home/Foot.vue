<template>
  
        <div class="sbox">

            <div class="s_bt f-center wow fadeInUp">
                <p class="f-38">联系我们</p>
                <h3 class="f-38">Contact Us</h3>
            </div>
            <p class="contact-text f-center wow fadeInUp" style="margin-top: 0%; opacity: 1;"  data-wow-duration="1s" data-wow-delay="0.8s">
                如您对天一生物有任何问题，可以通过下面的联系方式咨询我们的工作人员，我们将很高兴为您解答。</p>
            <div class="ilx_b">
                <div class="ilx_l white">
                    <div class="ilx_l-in">
                        <img class="wow bounceInLeft" data-wow-duration="1s" data-wow-delay="0.4s" src="https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/da7ce7a2e24618568d6070004b5c40a.png"
                            style="background-size: 100% auto;width: 300px;" alt="">
                        <div class="footL_t mt-30 mb-60 wow bounceInLeft"  data-wow-duration="1s" data-wow-delay="0.8s">
                            <i class="f-24">快速获取产品信息通道：</i>
                            <p style="border-bottom: 1px solid #eee;padding-bottom: 5px">
                                <span> 
                                    <router-link to="Product">血型产品</router-link>
                                </span>
                                <span> 
                                    <router-link to="Product">维生素产品</router-link>
                                </span>
                                <span> 
                                    <router-link to="Product">微生物产品</router-link>
                                </span>
                                <span> 
                                    <router-link to="Product">采血机构耗材产品</router-link>
                                </span>
                            </p>
                        </div>
                    <div class=" wow fadeInUp"  data-wow-duration="1s" data-wow-delay="0.8s">
                        <p>地址：安徽省合肥市高新区创新大道106号明珠产业园一期1#</p>
                        <p>电话：0551-62678113</p>
                        <p>邮箱：tianyi@hftysw.com</p>
                    </div>
                    </div>
                </div>

                <div class="ilx_r">
                    <div class="ilx_rmiddle">

                    </div>

                    <div class="ilx_rdt wow bounceInRight" data-wow-duration="1s" data-wow-delay="0.8s">
                        <h3 class="mb-30 f-24">网站地图</h3>
                        <router-link class="white" to="AboutComponay">关于天一</router-link>
                        <router-link class="white" to="Product">产品中心</router-link>
                        <router-link class="white" to="news">新闻资讯</router-link>
                        <router-link class="white" to="">技术支持</router-link>
                        <router-link class="white" to="Contact">联系我们</router-link>
                        <router-link class="white" to="Recruit">招贤纳士</router-link>
                    </div>
                </div>
            </div>

            <div class="ilx_d">
                <p class="ilx_dleft">©2016-2017 合肥天一生物技术研究所有限责任公司 All Rights Reserved. <a style="color: #888"
                        href="http://beian.miit.gov.cn">皖ICP备2021005420号-1</a>
                    <!--技术支持：杭州畅邮-->
                </p>
            </div>

        </div>
  
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Foot',
})
</script>
<style>
.sbox {
    width: 81%;
    height: 98%;
    position: relative;
    margin: 0 auto;
    overflow: hidden;
}

.f-center {
    text-align: center;
}

.s_bt p {
    color: #fff;
    line-height: 1.5em;
}

.s_bt {
    margin-bottom: 2%;
    margin-top: 11%;
    color: #fff;
}

.f-38 {
    font-size: .593rem;
}

.s_bt h3 {
    color: #fff;
    line-height: 1em;
    font-family: OPPOSans-M;
}

.contact-text {
    color: #aeaeae;
    width: 50%;
    margin: 0 auto;
    line-height: 1.4;
    margin-top: 10%;
    font-size: .203rem;
}

.ilx_b {
    width: 100%;
    color: #aeaeae;
    position: absolute;
    overflow: hidden;
}

.ilx_b .ilx_l {
    width: 41%;
    float: left;
    margin-top: .625rem;
}

.white {
    color: #fff;
}

.ilx_b .ilx_l .ilx_l-in {
    margin-top: 8%;
}

.ilx_b .ilx_r .ilx_rdt a:hover {
    color: #c1c1c1;
    margin-left: .078rem;
    transition: 0.45s;
}

.mb-60 {
    margin-bottom: .718rem;
}

.mt-30 {
    margin-top: .156rem;
}

.f-24 {
    font-size: .375rem;
    font-family: OPPOSans-M;
}

.footL_t i {
    font-family: OPPOSans-M;
    font-style: inherit;
    display: block;
    margin-bottom: .218rem;
    color: #fff;
}

.footL_t p {
    font-family: OPPOSans-M;
    margin-top: .218rem;
    color: #fff;
}

.footL_t span {
    font-family: OPPOSans-M;
    display: inline-block;
    margin-right: .781rem;
    font-weight: 300;
}

.ilx_b .ilx_l p {
    font-family: OPPOSans-M;
    font-size: .218rem;
    line-height: .343rem;
}

.ilx_b .ilx_r {
    width: 59%;
    margin-top: 1.093rem;
    float: right;
    overflow: hidden;
}

.ilx_b .ilx_r .ilx_rdt {
    float: right;
    width: 35%;
    margin-top: 2%;
    opacity: 1;
}

.ilx_b .ilx_r .ilx_rdt h3 {
    color: #fff;
    font-weight: bold;
}

.mb-30 {
    margin-bottom: .468rem;
}

.f-24 {
    font-family: OPPOSans-M;
    font-size: .375rem;
}

.ilx_b .ilx_r .ilx_rdt a {
    font-family: OPPOSans-M;
    display: block;
    font-size: .218rem;
    line-height: 3em;
}

.ilx_d {
    font-family: OPPOSans-M;
    position: absolute;
    height: .781rem;
    width: 100%;
    bottom: 0px;
    line-height: .781rem;
    color: #999;
    font-size: .218rem;
    overflow: hidden;
    font-family: 'CenturyGothic';
}

.ilx_d .ilx_dleft {
    float: left;
}</style>