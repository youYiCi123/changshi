<template>
    <div class="newsDetailsPageBackGround">
        <div class="h35"></div>
        <div class="newsWrap">
            <div class="subCont viewCont">
                <div class="newsDetialTitle">{{ newsDetail.newsTitle }}</div>
                <div class="newsDetialTime">
                    <div class="center">
                        <div class="fl">
                            发布时间：
                            <span v-html="timeFormat(newsDetail.newsTime)"></span>
                            &nbsp; &nbsp;&nbsp; 查看次数：
                            <i style="font-size:14px;color:#cf3827;font-style: normal;font-weight:bold;padding-right:10px;">{{
                                newsDetail.readCount }}</i>
                        </div>
                        <div class="newsDetial_fz fl">
                            <i style="font-family:'宋体';font-style:normal;padding-right:5px;font-size:18px;">T</i>
                            浏览字号：
                            <div class="fontSize_box fl">
                                <span @click="selectFontSize(index)" v-for="(item,index) in fontSizeBox"
                                 :class="fontSizeIndex == index ? 'hover' : ''" >{{ item.name }}</span>
                            </div>
                        </div>
                        <!-- <div class="newsShare fl">
                            <div class="bdsharebuttonbox ShareBox bdshare-button-style0-16">
                                <span>分享到：</span>
                                <p>
                                    <a href="javascript:void(0)" class="bds_tsina" title="分享到新浪微博"></a>
                                    <i>新浪微博</i>
                                </p>
                                <p>
                                    <a href="javascript:void(0)" class="bds_weChat" title="分享到微信"></a>
                                    <i>微信</i>
                                </p>
                            </div>
                        </div> -->
                    </div>
                </div>
                <!-- <div class="h30"></div> -->
                <div v-html="newsDetail.content"  class="articleBox minH_350"
                :style="fontSizeIndex == 0 ? 'font-size:18px' : fontSizeIndex == 1 ? 'font-size:14px':'font-size:10px'">
                </div>
                <div class="articlePage"></div>
                <div class="pageUp">
                    <div>
                        上一篇
                        <a :href="newsPage.preLink">{{ newsPage.preTheme }}</a>
                    </div>
                    <div>
                        下一篇
                        <a :href="newsPage.preLink">{{ newsPage.postTheme }}</a>
                    </div>
                    <a class="backList" href="javascript:history.go(-1);">返回列表</a>
                </div>
            </div>
        </div>
        <div class="h40"></div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue';
import dayjs from "dayjs";
import { getNewsById ,getNewsSort} from '@/api/news';
export default Vue.extend({
    name: 'NewsDetail',
    data() {
        return {
            fontSizeBox:[{id:0,name:'大'},{id:1,name:'中'},{id:2,name:'小'}],
            fontSizeIndex:1,
            newsPage: { preTheme: "", postTheme: "", preLink: "", postLink: "" },
            newsDetail: {
                id: 1,
                newsTitle: '',
                newsTime:'',
                readCount:'',
                content:''
            },

        }
    },
    created() {
        this.getNewsContent()
        this.getNewsSortById()
    },
    methods: {
        selectFontSize(index){
            this.fontSizeIndex=index;
        },
        getNewsContent() {
            getNewsById(this.$route.query.newsId).then(response => {
                if (response.data != null) {
                    this.newsDetail.id = response.data.id
                    this.newsDetail.newsTitle = response.data.theme
                    this.newsDetail.newsTime = response.data.createdTime
                    this.newsDetail.readCount = response.data.viewCount
                    this.newsDetail.content = response.data.content
                }
            })
        },
        getNewsSortById(){
            getNewsSort(this.$route.query.newsId).then(response=>{
                this.newsPage.preLink=response.data.preLink
                this.newsPage.preTheme=response.data.preTheme
                this.newsPage.postLink=response.data.postLink
                this.newsPage.postTheme=response.data.postTheme
            })
        },
        timeFormat(time: string) {
            if (time == null || time === '') {
                return 'N/A';
            }
            let date = new Date(time);
            return dayjs(date).format("YYYY-MM-DD")
        },
    }
})
</script>
<style>
.newsDetailsPageBackGround {
    background: #ededed;
}

.h35 {
    clear: both;
    height: 0.546rem;
}

.newsWrap {
    clear: both;
    width: 18.75rem;
    margin: 0 auto;
}

.viewCont {
    padding: 0.546rem;
    overflow: hidden;
    background: #fff;
}

.newsDetialTitle {
    font-family: OPPOSans-M;
    padding: 0.312rem 0 0rem 0;
    font-size: 0.468rem;
    line-height: 0.703rem;
    color: #141414;
    text-align: center;
    font-weight: bold;
}

.newsDetialTime {
    line-height: 0.468rem;
    text-align: center;
    border-bottom: 0.015rem solid #e6e6e6;
    color: #666;
    font-size: 0.218rem;
    padding: 0.312rem 0rem 0.468rem 0rem;
}

.newsDetialTime .center {
    display: inline-block;
}

.fl {
    float: left;
    display: inline;
}

.newsDetial_fz {
    position: relative;
    cursor: pointer;
    margin: 0rem 0.312rem;
}

.newsShare {
    overflow: hidden;
}

.fontSize_box {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 0.468rem;
    left: 0;
    z-index: 9999;
    opacity: 0;
    transform: rotateX(90deg);
    -webkit-transform: rotateX(90deg);
    transition: all 0.3s linear;
    -webkit-transition: all 0.3s linear;
    transform-origin: center top;
    -webkit-transform-origin: center top;
}

.newsDetial_fz:hover .fontSize_box {
    opacity: 1;
    transform: rotateX(0deg);
    -webkit-transform: rotateX(0deg);
}

.fontSize_box span {
    display: block;
    height: 0.312rem;
    background: #f5f5f5;
    font-size: 0.218rem;
    color: #666;
    text-align: center;
    line-height: 0.312rem;
    cursor: pointer;
}

.fontSize_box span.hover {
    background: #cf3827;
    color: #fff;
}

.newsShare {
    overflow: hidden;
}

.bdshare-button-style0-16 {
    zoom: 1;
}

.ShareBox {
    overflow: hidden;
    clear: both;
}

.ShareBox span {
    font-size: 0.218rem;
    line-height: 0.468rem;
    float: left;
}

.ShareBox p {
    display: block;
    overflow: hidden;
    float: left;
}

.bdshare-button-style0-16 .bds_tsina {
    background-position: 0 -1.625rem;
}

.ShareBox .bds_tsina {
    background: url(http://www.yunnanbaiyao.com.cn/subsiteSrc/ynbyPc/images/share/shareBt1.png) no-repeat center center !important;
    background-size: 100% !important;
}

.ShareBox .bds_weChat {
    background: url(http://www.yunnanbaiyao.com.cn/subsiteSrc/ynbyPc/images/share/shareBt5.png) no-repeat center center !important;
    background-size: 100% !important;
}

.bdshare-button-style0-16 a,
.bdshare-button-style0-16 .bds_more {
    float: left;
    font-size: 0.187rem;
    padding-left: 0.265rem;
    line-height: 0.25rem;
    height: 0.25rem;
    background-image: url(http://bdimg.share.baidu.com/static/api/img/share/icons_0_16.png?v=d754dcc0.png);
    background-repeat: no-repeat;
    cursor: pointer;
    margin: 0.093rem 0.093rem 0.093rem 0rem;
}

.ShareBox a {
    padding: 0 !important;
    width: 0.468rem !important;
    height: 0.468rem !important;
    margin: 0 0.109rem 0 0 !important;
}

.ShareBox i {
    clear: both;
    display: block;
    font-size: 0.187rem;
    color: #666;
    text-align: center;
    overflow: hidden;
    margin: 0.078rem 0rem;
    display: none;
}

.h30 {
    clear: both;
    height: 0.468rem;
}

.minH_350 {
    min-height: 5.468rem;
    height: auto !important;
    height: 5.468rem;
}

.articleBox {
    overflow: hidden;
    font-size: 0.218rem;
    color: #747474;
    line-height: 0.468rem;
    padding: 0.312rem 0 0 0;
}

.articlePage {
    clear: both;
    text-align: center;
    overflow: hidden;
    padding: 0.312rem 0;
}

.pageUp {
    clear: both;
    overflow: hidden;
    line-height: 0.546rem;
    font-size: 0.25rem;
    padding: 0.312rem 2.656rem 0 0;
    border-top: 0.015rem solid #e4e4e4;
    position: relative;
}

a.backList {
    height: 0.625rem;
    overflow: hidden;
    line-height: 0.625rem;
    background: #4c8cd2;
    font-size: 0.234rem;
    color: #fff !important;
    text-align: center;
    padding: 0rem 0.468rem;
    position: absolute;
    right: 0rem;
    top: 50%;
    margin-top: -0.312rem;
}

.pageUp a {
    font-family: OPPOSans-M;
    color: #666;
}

.pageUp a:hover {
    color: #4c8cd2;
}

.h40 {
    clear: both;
    height: 0.625rem;
}
</style>