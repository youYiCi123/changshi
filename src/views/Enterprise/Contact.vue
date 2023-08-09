<template>
    <div>

        <Head></Head>
        <div class="zdInner_ban Inner_ban"
            style="background-image: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/4ad2018b8b8aede5c7338766499fe90.jpg);">
            <div class="zdInner_txt">
                <div class="ind-title-l">
                    <p class="title-en f-48 wow fadeInUp">联系我们</p>
                    <span class=" wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s"></span>
                    <p class="title-cn f-18 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.6s">为梦想 &nbsp;共耀征程</p>
                </div>
            </div>
        </div>
        <div class="contact">
            <div class="conTop">
                <div id="conTop" class="lxDw"></div>
                <div class="conTop_l">
                    <div class="conMap">
                        <mapContainer></mapContainer>
                    </div>
                </div>
                <div class="conTop_r">
                    <div class="conTop_div">
                        <div class="ind-title wgt-fade-animate appear">
                            <div class="ind-title-l">
                                <p class="title-cn f-38 wow fadeInUp">
                                    联系我们</p>
                                <P class="title-en f-38 wow fadeInUp">
                                    <span>Contact</span>
                                    Us
                                </P>
                            </div>
                        </div>
                        <ul class="wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.8s">
                            <li>
                                <div style="background-image: url('	http://www.assuretech.com.cn/images/img6.png');">
                                    <span>电话 ：</span>
                                    <p>0551-62678113</p>
                                </div>
                                <div style="background-image: url('	http://www.assuretech.com.cn/images/fax.png');">
                                    <span>邮箱 ：</span>
                                    <p>tianyi@hftysw.com</p>
                                </div>
                            </li>
                            <li>
                                <div style="background-image: url('	http://www.assuretech.com.cn/images/img6.png');">
                                    <span>地址 ：</span>
                                    <p>安徽省合肥市高新区创新大道106号明珠产业园一期1#</p>
                                </div>
                            </li>
                            <li>
                                <div style="background-image: url('	http://www.assuretech.com.cn/images/we.png');">
                                    <span>微信公众号</span>
                                    <p>
                                        <img src="https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg"
                                            alt="">
                                    </p>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div class="conBtm ">
                <div id="conBtm" class="lxDw"></div>
                <div class="inner">
                    <div class="conInline wow fadeInUp">
                        <div class="ind-title wgt-fade-animate appear">
                            <div class="ind-title-l">
                                <p class="title-cn f-38 wow fadeInUp">
                                    在线留言</p>
                                <P class="title-en f-38 wow fadeInUp">
                                    <span>Online</span>
                                    Message
                                </P>
                            </div>
                        </div>
                        <el-form ref="messageForm" :rules="rules" :inline="true" id="messageForm" name="messageForm"
                            :model="messageInfo">
                            <el-form-item label="昵称：" prop="createdName">
                                <el-input v-model="messageInfo.createdName" class="input-width" placeholder="请输入姓名..."
                                    clearable></el-input>
                            </el-form-item>
                            <el-form-item label="手机号：" prop="phone">
                                <el-input v-model="messageInfo.phone" class="input-width" placeholder="请输入电话号..."
                                    clearable></el-input>
                            </el-form-item>
                            <el-form-item label="留言：" prop="content">
                                <el-input style="width: 500px;" type="textarea" v-model="messageInfo.content"
                                    class="input-width" placeholder="请输入您的留言..." clearable></el-input>
                            </el-form-item>
                        </el-form>
                        <el-button type="primary" size="medium" @click="submitMessageForm">提交</el-button>
                    </div>
                    <div class="conP wow slideInLeft" data-wow-duration="1s" data-wow-delay="0.8s">
                        <div>
                            <p>
                                您希望了解我们更多信息 >>
                                <br>
                                或想提出任何意见 >>
                                <br>
                                请准确填写以下资料 >>
                                <br>
                                我们将尽快作出回复 >>
                                <br>
                                期待你的咨询和宝贵建议 >>
                                <br>
                                ....
                            </p>
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
import { WOW } from 'wowjs'
import mapContainer from "@/components/MapContainer/index.vue";
import { sendMessage } from '@/api/other';
export default Vue.extend({
    name: 'Contact',
    components: {
        mapContainer, Head
    },
    data() {
        return {
            messageInfo: {
                createdName: '',
                phone: '',
                content: ''
            },
            rules: {
                phone: [
                    { required: true, message: '请输入您的手机号', trigger: 'blur' },
                    { pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                createdName: [
                    { required: true, message: '请输入您的昵称', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '内容不能为空', trigger: 'blur' }
                ],
            },
        }
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
        submitMessageForm() {
            this.$refs['messageForm'].validate((valid) => {
                if (valid) {
                    sendMessage(this.messageInfo).then(response => {
                            this.$message.message(response.message)
                    })
                } else {
                    return false
                }
            })
        }
    },
})
</script>
<style>
.contact {
    position: relative;
    overflow: hidden;
}

.conTop {
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.conTop_l {
    width: 50%;
}

.conMap {
    position: relative;
    width: 100%;
    height: 100%;
    background: #f8f8f8;
}

.conTop_r {
    background: #ffffff;
    z-index: 222;
    width: 50%;
    padding: 5vw 5vw 3vw;
}

.conTop_div {
    max-width: 538px;
    margin: 0 auto;
}

.ind-title .title-cn {
    font-family: OPPOSans-M;
    margin-top: 5px;
    line-height: 1.5;
}

.conTop_r li p img {
    display: block;
    width: 80px;
}

.f-38 {
    font-size: 38px;
}

.ind-title .title-en {
    line-height: 1.1;
    font-family: OPPOSans-M;
    margin-bottom: 2vw;
}

.ind-title .title-en span {
    color: #49b24c;
}

.conTop_r ul {
    margin-top: 30px;
}

.conTop_r li {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px 0 25px;
    border-bottom: 1px solid #e1e1e1;
}

.conTop_r li div {
    padding-left: 25px;
    background-repeat: no-repeat;
    background-position: left 6px;
    min-width: 40%;
}

.conTop_r li span {
    font-family: OPPOSans-M;
    font-size: 18px;
    color: #333;
    line-height: 1.6;
    display: inline-block;
    margin-bottom: 5px;
}

.conTop_r li p {
    font-family: OPPOSans-M;
    font-size: 14px;
    line-height: 1.6;
    color: #333;
}

.conBtm {
    position: relative;
    padding: 108px 0;
}

.conBtm {
    position: relative;
    background: #f8f8f8;
}

.conBtm::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: #49b24c url(http://www.assuretech.com.cn/images/c-bg.jpg) no-repeat;
}

.conBtm .inner {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.conBtm .inner {
    position: relative;
    z-index: 11;
}

.inner {
    width: 82vw;
    margin: 0 auto;
}

.conInline {
    display: inline-block;
    width: 70%;
    padding: 6%;
    background: #fff;
    box-shadow: 10px 28px 24px rgb(51 51 51 / 18%);
}

.conInline form input {
    background: #f8f8f8;
    height: 48px;
    line-height: 48px;
    padding: 0 14px;
    border: 0;
}

.conInline form input:nth-child(2) {
    float: right;
}

.conInline form textarea {
    background: #f8f8f8;
    height: 148px;
    width: 100%;
    margin-top: 24px;
    border: 0;
}


.conP {
    display: flex;
    align-items: center;
    width: 24%;
}

.conP p {
    font-size: 16px;
    line-height: 2.1;
    color: #fff;
    letter-spacing: 1px;
}

.conBtm::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.38); */
}
</style>