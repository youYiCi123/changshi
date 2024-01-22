<template>
    <div>

        <Head></Head>
        <div class="zdInner_ban Inner_ban"
            style="background-image: url(http://www.assuretech.com.cn/uploadpic/166994854718.jpg);">
            <div class="zdInner_txt">
                <div class="ind-title-l">
                    <p class="title-en f-48  wow fadeInUp">招贤纳士</p>
                    <span class=" wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"></span>
                    <p class="title-cn f-18  wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s">为梦想 &nbsp;共耀征程</p>
                </div>
            </div>
        </div>
        <div class="hrIdea padd" id="join">
            <div class="hzDw" id="hrIdea"></div>
            <div class="inner">
                <div class="ind-title wgt-fade-animate appear">
                    <div class="ind-title-l f-center">
                        <P class="title-cn f-38  wow fadeInUp">
                            人才理念
                        </P>
                        <p class="title-en f-38  wow fadeInUp">
                            <span>TalentTalent</span>
                            Concept
                        </p>
                    </div>
                </div>
                <div class="hrIdea_box">
                    <div class="hrIdea_item wgt-fade-animate appear  wow bounceInUp" @mouseleave="conceptMouseLeave(index)"
                        @mouseenter="conceptMouseEnter(index)" style="height: 8.437rem;" v-for="(item, index) in concept"
                        :key="index">
                        <div class="hrIdea_img">
                            <img :src="item.imgUrl">
                        </div>
                        <div class="hrIdea_txt">
                            <img name="hrIdeaImg" :src="item.iconURL">
                            <span name="hrIdeaSpan">{{ item.name }}</span>
                            <p name="hrIdeaP">{{ item.desc }}</p>
                            <i name="hrIdeaI">0{{ item.id + 1 }}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="join zdBg-index" id="joinList">
            <div class="z-container">
                <div class="ind-title wgt-fade-animate appear">
                    <div class="ind-title-l">
                        <p class="title-cn f-38  wow fadeInUp">职位列表
                        </p>
                        <div class="ind-title-l">
                            <p class="title-en f-38  wow fadeInUp">
                                <span>Position</span>
                                List
                            </p>
                        </div>
                    </div>
                </div>
                <div class="joinBox">
                    <div class="joinL">
                        <ul class="joinList">
                            <li v-for="(item, index) in jobMethodList" :key="index" @click="selectJobType(index)"
                                :class="jobMethodType == index ? 'hover' : ''" class=" wow fadeInUp">
                                <div>
                                    <i class="joinList_i1">0{{ index + 1 }}</i>
                                    <i class="joinList_i2">0{{ index + 1 }}</i>
                                    <span>{{ item.chineseName }}</span>
                                    <p>{{ item.englishName }}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="joinEm  wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                            <!-- 留一个iconfont的邮箱位置 -->
                            <i class="iconfont icon-youxiang"
                                style="color: #3a8ee6;padding-right: 10px;font-size: 25px;"></i>
                            <div>
                                <p>有意向者请您投递简历至人事部邮箱:</p>
                                <a href="mailto:tianyi@hftysw.com">tianyi@hftysw.com</a>
                            </div>
                        </div>
                    </div>
                    <div class="joinR  wow fadeInUp">
                        <div class="recruit">
                            <div class="recBox">
                                <div class="loading" style="text-align: center; line-height: 100px; display: none;">
                                    Loading……</div>
                                <div class="join_list" style="display: block;">
                                    <div class="recItem" @click="selectJobViewIndex(index)" v-for="(item, index) in jobList"
                                        :key="index">
                                        <div class="recDiv">
                                            <div class="recHead">
                                                <h3 class="recTit">{{ item.recruitName }}</h3>
                                                <p class="recIco">
                                                    <span v-html="timeFormat(item.releaseDate)"></span>
                                                    <span>
                                                        <i class="recIco_num"></i>
                                                        招聘人数：{{ item.salary }}
                                                    </span>
                                                    <span>
                                                        <i class="recIco_money"></i>
                                                        薪资：{{ item.salary }}
                                                    </span>
                                                </p>
                                                <div class="recDiv_arr">
                                                    <i class="iconfont icon-xialatubiao rotate"
                                                        style="color: #3a8ee6;padding-right: 10px;font-size: 25px;font-weight: bold;"></i>
                                                </div>
                                            </div>
                                            <div class="recBody">
                                                <div class="recBodyPadding">
                                                    <span>岗位职责：</span>
                                                    <p v-html="item.responsibility">

                                                    </p>
                                                    <span>任职要求：</span>
                                                    <p v-html="item.requirement">
                                                    </p>
                                                    <div class="recFoot">
                                                        <i class="iconfont icon-youxiang"
                                                            style="color: #3a8ee6;padding-right: 10px;font-size: 25px;"></i>
                                                        有意者请投递简历至人事部经理邮箱:
                                                        <a href="mailto:tianyi@hftysw.com">tianyi@hftysw.com</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Head from "@/components/Head/index.vue";
import dayjs from "dayjs";
import { fetchList } from '@/api/recurit';
import { WOW } from 'wowjs'
export default Vue.extend({
    name: 'Recruit',
    components: {
        Head
    },
    data() {
        return {
            concept: [{ id: 0, name: '文化认同', desc: '认可公司的价值观，这是一个基本条件。', imgUrl: 'http://www.assuretech.com.cn/uploadpic/164062153826.jpg', iconURL: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E6%96%87%E5%8C%96%E8%AE%A4%E5%90%8C.png' },
            { id: 1, name: '竞争择优', desc: '奉行公开、平等、竞争、择优的原则，选拔最优秀的人才，为公司提供强有力人才支撑。', imgUrl: 'http://www.assuretech.com.cn/uploadpic/164062158499.jpg', iconURL: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E7%AB%9E%E4%BA%89%E6%8B%A9%E4%BC%98.png' },
            { id: 2, name: '以人为本', desc: '始终坚持把人才作为企业发展的核心驱动力,致力于建立一个高效的用人机制。', imgUrl: 'http://www.assuretech.com.cn/uploadpic/164062161793.jpg', iconURL: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E4%BB%A5%E4%BA%BA%E4%B8%BA%E6%9C%AC.png' },
            { id: 3, name: '海纳百川', desc: '创造有利于员工发展的工作环境，培养人才，激励人才。同时用人所长，人尽其才。', imgUrl: '	http://www.assuretech.com.cn/uploadpic/164062164843.jpg', iconURL: 'https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E6%B5%B7%E7%BA%B3%E7%99%BE%E5%B7%9D.png' },],
            conceptMouseId: -1,
            jobMethodType: 0,
            jobMethodList: [{ id: 0, chineseName: '社会招聘', englishName: 'Social recruitment' }
            ],
            //工作详情列表
            jobList: [],
            jobViewIndex: 0,
        }
    },
    created() {
        this.getAllJob()
    },
    mounted() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 40,
            mobile: true,
            live: true,
        })
        wow.init()
    },
    methods: {
        getAllJob() {
            fetchList().then(
                reponse => {
                    if (reponse.code == 200) {
                        this.jobList = reponse.data.list
                    }
                }
            )
        },
        timeFormat(time: string) {
            if (time == null || time === '') {
                return 'N/A';
            }
            let date = new Date(time);
            return dayjs(date).format("YYYY-MM-DD")
        },
        conceptMouseEnter(index) {
            let conceptImgNumber = document.getElementsByName("hrIdeaImg")[index] as HTMLElement
            conceptImgNumber.style.opacity = '0'
            let conceptSpanNumber = document.getElementsByName("hrIdeaSpan")[index] as HTMLElement
            conceptSpanNumber.style.opacity = '0'
            let conceptPNumber = document.getElementsByName("hrIdeaP")[index] as HTMLElement
            conceptPNumber.style.color = '#49b24c'
            conceptPNumber.style.transform = ' translateY(-50px)'
            let conceptINumber = document.getElementsByName("hrIdeaI")[index] as HTMLElement
            conceptINumber.style.opacity = '0'

        },
        conceptMouseLeave(index) {
            let conceptImgNumber = document.getElementsByName("hrIdeaImg")[index] as HTMLElement
            conceptImgNumber.style.opacity = '1'
            let conceptSpanNumber = document.getElementsByName("hrIdeaSpan")[index] as HTMLElement
            conceptSpanNumber.style.opacity = '1'
            let conceptPNumber = document.getElementsByName("hrIdeaP")[index] as HTMLElement
            conceptPNumber.style.color = '#000000'
            conceptPNumber.style.transform = ' translateY(0px)'
            let conceptINumber = document.getElementsByName("hrIdeaI")[index] as HTMLElement
            conceptINumber.style.opacity = '1'

        },
        selectJobType(index) {
            this.jobMethodType = index
        },
        selectJobViewIndex(index) {
            this.jobViewIndex = index;
            var div = document.getElementsByClassName('recBody')[index] as HTMLElement;

            var arrow = document.getElementsByClassName('recDiv_arr')[index] as HTMLElement;
            if (div.classList.contains("show")) {
                div.classList.remove("show");
            } else {
                div.classList.add("show");
            }
            if (arrow.classList.contains("click")) {
                arrow.classList.remove("click");
            } else {
                arrow.classList.add("click");
            }
            // //实现div滑动展示效果
            // var target = document.getElementsByClassName('recBody')[index] as HTMLElement;
            // var speed = 45;
            // var interval = 5;
            // var timer;
            // if (target.style.display === "none") {
            //     target.style.display = "block";
            //     target.style.height = "0px";
            //     timer = setInterval(function () {
            //         var h = parseInt(target.style.height);
            //         if (h < target.scrollHeight) {
            //             target.style.height = (h + speed) + "px";
            //         } else {
            //             clearInterval(timer);
            //         }
            //     }, interval);
            // } else {
            //     timer = setInterval(function () {
            //         var h = parseInt(target.style.height);
            //         if (h > 0) {
            //             target.style.height = (h - speed) + "px";
            //         } else {
            //             target.style.display = "none";
            //             clearInterval(timer);
            //         }
            //     }, interval);
            // }
        }
    },
})
</script>
<style>
.hrIdea {
    background: #f6f6f6;
    overflow: hidden;
    padding: 0.703rem 0;
}

.inner {
    width: 82vw;
    margin: 0 auto;
}

.f-center {
    text-align: center;
}

.ind-title .title-cn {
    margin-top: 0.078rem;
    line-height: 1.5;
}

.f-38 {
    font-size: 0.593rem;
}

.ind-title .title-en {
    line-height: 1.1;
    font-family: OPPOSans-M;
    margin-bottom: 2vw;
}

.ind-title .title-en span {
    color: #49b24c;
}

.hrIdea_box {
    overflow: hidden;
    box-shadow: 0 0rem 0.625rem 0rem rgb(0 0 0 / 10%);
}

.hrIdea_item {
    display: flex;
    flex-wrap: wrap;
    float: left;
    width: 25%;
}

/* .hrIdea_item:hover .hrIdea_img img {
    transform: scale(1.1);
} */

.hrIdea_img {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 50%;
}

.hrIdea_img img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.48s;
}


.hrIdea_img::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #bb0101;
    opacity: 0.1;
}

.hrIdea_txt {
    position: relative;
    width: 100%;
    height: 4.203rem;
    padding: 0.75rem 0.468rem;
    text-align: center;
    background: #fff;
}

.hrIdea_item:nth-child(2n-1) .hrIdea_txt::before {
    border-bottom: 0.25rem solid #fff;
    top: -0.25rem;
}

.hrIdea_item:nth-child(2n) .hrIdea_txt::before {
    bottom: -0.25rem;
    border-top: 0.25rem solid #fff;
}

.hrIdea_txt::before {
    content: "";
    position: absolute;
    left: 50%;
    margin-left: -10px;
    width: 0;
    height: 0;
    width: 0;
    height: 0;
    border-left: 0.25rem solid transparent;
    border-right: 0.25rem solid transparent;
}

.hrIdea_txt img {
    width: 0.656rem;
    margin: 0 auto;
    transition: all .7s;
}

.hrIdea_txt span {
    font-family: OPPOSans-M;
    font-size: 0.343rem;
    line-height: 2;
    margin: 0.125rem auto;
    display: block;
    transition: all .7s;
}

.hrIdea_txt p {
    font-family: OPPOSans-M;
    color: #666666;
    margin-bottom: 0.187rem;
    font-size: 0.218rem;
    line-height: 1.5;
    transition: all .7s;
}

.hrIdea_txt i {
    font-family: OPPOSans-M;
    position: relative;
    font-weight: bold;
    font-size: 0.437rem;
    font-style: inherit;
    color: #999;
    transition: all .7s;
}

.hrIdea_txt i::before,
.hrIdea_txt i::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 0.593rem;
    height: 0.015rem;
    background: #eee;
}

.hrIdea_txt i::before {
    left: -0.75rem;
}

.hrIdea_txt i::after {
    right: -0.75rem;
}


.hrIdea_item:nth-child(2n) .hrIdea_txt {
    order: -1;
}


/* 新的 */
.join {
    position: relative;
    padding: 1.390rem 0;
    background-image: url(http://www.assuretech.com.cn/images/bg2.png);
    background-position: center bottom;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% auto;
    border-bottom: 0.015rem solid #eee;
}

.z-container {
    width: 82vw;
    margin: 0 auto;
}

.joinBox {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.joinL {
    width: 7.156rem;
    text-align: left;
}

.joinL.pos {
    bottom: 1.375rem;
    top: auto;
}

.joinL.fixed {
    position: fixed;
    top: 2.968rem;
}

.joinList {
    position: relative;
    border-radius: 0.093rem;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 0.187rem 0.468rem rgba(80, 80, 80, .1);
}

.joinList::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.093rem;
    border: 0.015rem solid rgba(170, 170, 170, .2);
    box-sizing: border-box;
}

.joinList li {
    cursor: pointer;
    position: relative;
    padding: 0 0.593rem;
    transition: all .6s ease 0s;
    overflow: hidden;
}


.joinList li::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f2f2f2;
    z-index: 3;
    opacity: 0;
}

.joinList li div {
    position: relative;
    z-index: 11;
    padding: 0.75rem 0;
    border-bottom: 0.015rem solid #d8d8d8;
}

.joinList li:last-child div {
    border-color: transparent;
}

.joinList i {
    position: absolute;

    line-height: 1;
    transition: all .6s ease 0s;
    color: rgba(212, 212, 212, .41);
}

.joinList .joinList_i2 {
    opacity: 0;
    bottom: -1.062rem;
    font-size: 2rem;
    right: 0.312rem;
}

.joinList .joinList_i1 {
    font-size: 0.593rem;
    top: 50%;
    transform: translateY(-50%);
    right: 0.75rem;
}

.joinList span {
    font-size: 0.375rem;
    color: #333;
}

.joinList p {
    color: #666;
    text-transform: uppercase;
    font-size: 0.187rem;
    letter-spacing: 0.007rem;
}

.joinList li:hover::after {
    opacity: 1;
}

.joinList li.hover::after {
    background: #49b24c;
    opacity: 1;
}

.joinList li:hover div,
.joinList li.hover div {
    border-color: transparent;
}

.joinList li.hover p,
.joinList li.hover span {
    color: #fff;
}

.joinList li.hover p {
    opacity: 0.68;
}

.joinList li:hover .joinList_i1,
.joinList li.hover .joinList_i1 {
    font-size: 0.437rem;
    opacity: 0;
}

.joinList li:hover .joinList_i2,
.joinList li.hover .joinList_i2 {
    opacity: 1;
    bottom: -0.437rem;
}

.joinList li.hover .joinList_i2 {
    color: rgba(255, 255, 255, .41)
}

.joinEm {
    border-radius: 0.093rem;
    overflow: hidden;
    background: #fff;
    margin-top: 0.593rem;
    padding: 0.75rem;
    border: 0.015rem solid rgba(170, 170, 170, .2);
    box-shadow: 0 0.187rem 0.468rem rgba(80, 80, 80, .1);
    display: flex;
    align-items: center;
}

.joinEm svg {
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.375rem;
}

.joinEm path {
    fill: #49b24c;
}

.joinEm p {
    color: #666;
    font-size: 0.234rem;
}

.joinEm a {
    color: #49b24c;
    font-weight: bold;
    font-family: 'en';
    font-size: 0.265rem;
    border-bottom: 0.015rem solid #49b24c;
}

.joinR {
    background: #fff;
    display: inline-block;
    text-align: left;
    width: calc(100% - 538px);
    box-shadow: 0 0.187rem 0.468rem rgba(80, 80, 80, .1);
}

.recBox {
    border-radius: 0.093rem;
    border: 0.015rem solid rgba(170, 170, 170, .2);
    padding-bottom: 0.65rem;
}

.recruit .recItem {
    position: relative;
    cursor: pointer;
}

/* .recruit .recItem:hover .recDiv .recHead h3 {
    color: #49b24c;
    transition: all 0.48s;
} */

.recruit .recTit {
    font-family: OPPOSans-M;
    font-size: 0.343rem;
    margin-top: 0;
    color: #333;
    text-transform: capitalize;
    font-weight: bold;
}

.recruit .recTit a {
    color: #2a333c;
}

.recruit .recTit a:hover {
    color: #4e97d9;
}

.recIco_add {
    display: inline-block;
    width: 0.187rem;
    height: 0.187rem;
    background: url("http://www.assuretech.com.cn/images/j_1.png") no-repeat center;
    background-size: 100%;
    position: relative;
    top: 0.015rem;
    margin-right: 0.078rem;
}

.recIco_num {
    display: inline-block;
    width: 0.187rem;
    height: 0.187rem;
    background: url("http://www.assuretech.com.cn/images/j_2.png") no-repeat center;
    background-size: 100%;
    position: relative;
    top: 0.015rem;
    margin-right: 0.078rem;
}

.recIco_money {
    display: inline-block;
    width: 0.187rem;
    height: 0.187rem;
    background: url("http://www.assuretech.com.cn/images/j_3.png") no-repeat center;
    background-size: 100%;
    position: relative;
    top: 0.015rem;
    margin-right: 0.078rem;
}



.recDiv {
    position: relative;
    padding: 0.781rem 0.937rem 0;
}

.recHead {
    padding-bottom: 0.218rem;
    position: relative;
    border-bottom: 0.015rem solid #ddd;
}

.recDiv_arr {
    position: absolute;
    top: 0.156rem;
    right: 0.312rem;

}

.recDiv_arr i {
    /* width: 38px;
    height: 38px; */
    transform: rotate(-90deg);
    transition: all 1s;
}



.recDiv_arr.click .rotate:before {
    display: inline-block;
    transform: rotate(90deg);

}

.recDiv_arr path {
    fill: #49b24c
}

.recIco {
    position: relative;
}

.recIco span {
    font-family: OPPOSans-M;
    display: inline-block;
    margin-right: 0.437rem;
    font-size: 0.218rem;
    color: #a3afb7;
}

.recIco span:last-of-type {
    margin-right: 0;
}

.recBody {

    /* display: none; */
    height: auto;
    max-height: 0;
    transition: max-height 1s ease-in-out;
    overflow: hidden;
    background: #f8f8f8;
}

.recBody .recBodyPadding {
    padding: 0.312rem 0.75rem 0.75rem
}

.recDiv .show {
    max-height: 15.625rem;
}

.recBody span {
    display: block;
    margin: 0.437rem 0 0.218rem;
    font-weight: bold;
    color: #333;
    font-size: 0.25rem;
    letter-spacing: 0;
}

.recBody p {
    font-size: 0.218rem;
    color: #666;
}

.recBody img {
    max-width: 100%;
    height: auto !important;
}

.recFoot {
    margin-top: 0.375rem;
    color: #49b24c;
    font-size: 0.187rem;
    letter-spacing: 0.007rem;
}

.recFoot svg {
    position: relative;
    top: -0.031rem;
    width: 0.375rem;
    height: 0.375rem;
    vertical-align: middle;
    margin-right: 0.078rem;
}

.recFoot a {
    text-decoration: underline;
    color: #49b24c;
    margin-left: 0.078rem;
}
</style>