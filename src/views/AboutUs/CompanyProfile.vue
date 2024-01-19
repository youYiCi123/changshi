<template>
  <div class="introduction">
    <div class="intro_left wow fadeInLeft">
      <div class="intro_number clearfix">
        <div class="number_item">
          2003
          <span>年创立</span>
        </div>
        <div class="number_item">
          20
          <span>年发展</span>
        </div>
      </div>
    </div>
    <div class="intro_right">
      <div class="intro_detail">
        <h3 class="wow fadeInRight">企业简介</h3>
        <h4 class="wow fadeInRight">INTRODUCTION</h4>
        <div class="detail_p wow fadeInRight">
          <el-scrollbar style="height: 100%;">
            {{ companyIntroduce }}
          </el-scrollbar>
        </div>
        <div class="detail_square wow bounceInUp">
          <div class="square_item">
            <h5>50+
              <span>项</span>
            </h5>
            <h6>专利</h6>
          </div>
          <div class="square_item">
            <h5>35+
              <span>个</span>
            </h5>
            <h6>服务省份</h6>
          </div>
          <div class="square_item">
            <h5>30+
              <span>%</span>
            </h5>
            <h6>研发团队</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script lang="ts">
import Vue from 'vue'
import { fetchCompanyIntro } from '@/api/aboutUs';
export default Vue.extend({
  name: 'CompanyProfile',
  data() {
    return {
      companyIntroduce: "",
    }
  },
  created() {
      this.getCompanyIntro()
  },
  methods: {
    getCompanyIntro(){
            fetchCompanyIntro().then(response=>{
                this.companyIntroduce=response.data.introduce
            })
        },
  },
})
</script>
<style>
/* 63.3px */
.introduction {
  margin-left: 10%;
  padding: 2.187rem 0;
}

.introduction .intro_left {
  width: 57%;
  height: 8.281rem;
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8.jpg) no-repeat 50%;
  background-size: 100% 100%;
  float: left;
  position: relative;
}

.introduction .intro_left .intro_number {
  width: 72%;
  height: 1.305rem;
  margin: 0.553rem auto;
  background: hsla(0, 0%, 100%, .7);
  border-radius: 0.098rem;
}

.introduction .intro_left .intro_number .number_item {
  width: 50%;
  float: left;
  border-right: 1px solid #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #264994;
  font-size: 0.553rem;
  text-align: center;
  font-weight: 700;
  line-height: 1.137rem;
}

.introduction .intro_left .intro_number .number_item span {
  font-size: 0.178rem;
  font-weight: 400;
  margin-left: 0.098rem;
  vertical-align: super;
}

.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: " ";
  clear: both;
  height: 0;
}

.introduction .intro_right {
  height: 7.031rem;
  width: 43%;
  float: right;
}

.introduction .intro_right .intro_detail {
  width: 7.5rem;
  padding-left: .75rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.introduction .intro_right .intro_detail h3 {
  font-size: 0.603rem;
  color: #393939;
  font-weight: 700;
  line-height: 0.832rem;
  margin-top: 0.236rem;
}

.introduction .intro_right .intro_detail h4 {
    font-size: 0.387rem;
    color: #d7d7d7;
    line-height: 0.632rem;
}

.introduction .intro_right .intro_detail .detail_p {
  height: 4.453rem;
  margin-top: 0.235rem;
  /* background: url(https://www.cnbg.com.cn/static/img/year_1919_bg.2fe064d4.png) no-repeat 50%; */
  background-size: auto 1.734rem;
}

.el-scrollbar__view{
  font-family: OPPOSans-R;
  opacity: .7;
  font-size:0.281rem;
}
.introduction .intro_right .intro_detail .detail_square {
  margin-top: 0.527rem;
  width: 100%;
  height: 1.364rem;
  background: #516da9;
  border-radius: 0.098rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.introduction .intro_right .intro_detail .detail_square .square_item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  position: relative;
  padding-left: 0.593rem;
}

.introduction .intro_right .intro_detail .detail_square .square_item h5 {
  font-size: 0.476rem;
  font-weight: 700;
  color: #fff;
}

.introduction .intro_right .intro_detail .detail_square .square_item h5 span {
  font-size: 0.158rem;
  font-weight: 400;
}

.introduction .intro_right .intro_detail .detail_square .square_item h6 {
  font-size: 0.178rem;
  color: #fff;
}

.introduction .intro_right .intro_detail .detail_square .square_item:after {
  content: "";
  width: 0.015rem;
  height: 0.593rem;
  background: #fff;
  position: absolute;
  right: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}</style>
  