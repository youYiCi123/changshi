<template>
    <div class="sbox">
        <div class="s_bt01  wow slideInDown">
            <p class="f-38" style="margin-top: 0%; opacity: 1;">产业布局</p>
            <h3 class="f-38" style="margin-top: 0%; opacity: 1;">
                <strong>Industrial</strong>
                layout
            </h3>
        </div>
        <div class="sec03_box">
            <div class="sc3_cen">
                <div class="sc3_c01 sc3_c00"></div>
                <div class="sc3_c02 sc3_c00"></div>
                <div class="sc3_c03 sc3_c00"></div>
                <div class="sc3_c04 sc3_c00"></div>
            </div>
            <div class="sc3_l sc3_lb wow slideInLeft" style="left: 0px;"  data-wow-duration="1s" data-wow-delay="0.5s">
                <div :class="'sc3_l0'+(index+2)" v-for="(item,index) in prodLList" >
                    <router-link to="Product">
                        <h3>
                            <i>0{{index+1 }}/ &nbsp;</i>
                            <p>{{ item.seriesName }}</p>
                        </h3>
                        <p>{{ item.englishName }}</p>
                        <span></span>
                    </router-link>
                </div>
            </div>
            <div class="sc3_r sc3_lb wow slideInRight" style="right: 0px;"  data-wow-duration="1s" data-wow-delay="0.5s">
                <div :class="'sc3_l0'+(index+4)"  v-for="(item,index) in prodRList" >
                    <router-link to="Product">
                        <h3>
                            <i>&nbsp;/0{{ index+3 }}</i>
                            <p>{{ item.seriesName }}</p>
                        </h3>
                        <p>{{ item.englishName }}</p>
                        <span></span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { fetchTypeList } from '@/api/prod';
export default Vue.extend({
    name: 'Industrial',
    data() {
        return {
            prodLList:[],
            prodRList:[],
            prodCursor:0 //放入数组的游标
        }
    },
    created() {
        this.getProdType()
    },
    methods: {
        getProdType(){
            fetchTypeList().then(response => {
                response.data.forEach(element => {
                    if(this.prodCursor%2==0){
                        this.prodLList.push(element)
                    }else{
                        this.prodRList.push(element)
                    }
                    this.prodCursor++
                });
            })
        },
    },
})
</script>
<style>
.sbox {
    position: relative;
    z-index: 5;
    height: 81%;
}

.s_bt01 {
    color: #fff;
    /* margin-bottom: 2%;
    margin-top: 3%; */
    padding-top: 1.875rem;
}

.s_bt01 p {
    line-height: 1.5;
    text-align: center;
    color: #000;
    opacity: 0;
    margin-top: 3%;
}

.f-38 {
    font-family: OPPOSans-M;
    font-size: .593rem;
}

.s_bt01 h3 {
    line-height: 1em;
    text-align: center;
    color: #000;
    opacity: 0;
    margin-top: 3%;
    font-family: 'CenturyGothic';
}

.s_bt01 h3 strong {
    color: #49b24c;
    font-weight: normal;
}

.sec03_box {
    width: 17.187rem;
    margin: 0 auto;
    height: 8.281rem;
    position: relative;
    overflow: hidden;
}

.sc3_cen {
    width: 7.531rem;
    height: 7.531rem;
    position: absolute;
    top: 55%;
    margin-top: -3.765rem;
    left: 50%;
    margin-left: -3.765rem;
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230314162810.png) no-repeat;
    background-position-x: 2.187rem;
    background-position-y: 2.187rem;
    background-size: 3.125rem 3.125rem;
    animation: myBreath 2s linear infinite;
}

.sc3_c00 {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}

.sc3_c01 {
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/df4a6c9086bc749d4bfaf12781eb673.png);
    background-size: cover;
    animation: nq 55s linear infinite;
    -webkit-animation: nq 55s linear infinite;
}

.sc3_c02 {
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/4437f91968e4708d8fbf98443a26484.png);
    background-size: cover;
    animation: wq 55s linear infinite;
    -webkit-animation: wq 55s linear infinite;
}

.sc3_c03 {
    background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/7f02667916bb5c89884dec02095578e.png);
    background-size: cover;
    animation: nq 55s linear infinite;
    -webkit-animation: nq 55s linear infinite;
}

.sc3_c04 {
    background: url(http://www.assuretech.com.cn/images/zl04.png);
    background-size: cover;
    animation: wq 55s linear infinite;
    -webkit-animation: wq 55s linear infinite;
}

.sc3_l {
    position: absolute;
    left: -7.812rem;
    top: 0px;
    
}

.sc3_r {
    position: absolute;
    right: -7.812rem;
    top: 1.562rem;
}

.sc3_l div {
    border-left: .187rem solid rgba(20, 156, 135, 0);
    padding-left: .390rem;
}

.sc3_lb div {
    height: 1.187rem;
    position: absolute;
}

.sc3_lb div h3 {
    display: block;
    overflow: hidden;
    line-height: .562rem;
    height: .562rem;
}
.sc3_l div:hover {
    border-left: .187rem solid #49b24c;
    margin-left: 8px;
    transition: .3s linear;
}
.sc3_r div:hover {
    border-right: .187rem solid #49b24c;
    margin-right: .125rem;
    transition: .4s linear;
}
.sc3_lb div h3 i {
    float: left;
    font-family: Arial;
    color: #49b24c;
    font-size: .562rem;
}

.sc3_lb div h3 p {
    font-family: OPPOSans-M;
    font-size: .375rem;
    color: #000000;
    font-weight: 600;
}
.sc3_r div h3 i {
    float: right;
}
.sc3_lb div p {
    color: #333;
}

.sc3_lb div span {
    width: 3.281rem;
    display: block;
    height: .015rem;
    background-color: rgba(140, 142, 146, 0.3);
    color: #fff;
}

.sc3_lb .sc3_l01 {
    position: absolute;
    left: 6.484rem;
    top: .140rem;
}

.sc3_lb .sc3_l02 {
    position: absolute;
    left: .75rem;
    width: 4.765rem;
    top: 2.562rem;
}

.sc3_lb .sc3_l03 {
    position: absolute;
    left: .812rem;
    width: 4.765rem;
    top: 6.093rem;
}

.sc3_lb .sc3_l04 {
    position: absolute;
    right: .546rem;
    width: 4.765rem;
    top: 1rem;
}

.sc3_r div {
    border-right: .187rem solid rgba(20, 156, 135, 0);
    padding-right: .390rem;
    text-align: right;
}

.sc3_lb .sc3_l05 {
    position: absolute;
    right: .562rem;
    width: 4.765rem;
    top: 4.531rem;
}

@keyframes nq {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
    }
}

@keyframes wq {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
    }

    100% {
        transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
        -moz-transform: rotate(-360deg);
        -o-transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
    }
}

@keyframes myBreath {
    0% {
        transform: scale(0.88);
    }

    50% {
        transform: scale(1);
    }

    100% {
        transform: scale(0.88);
    }
}
</style>