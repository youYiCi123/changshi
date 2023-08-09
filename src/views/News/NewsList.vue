<template>
  <div class="main news pt-0 pb-0">
    <div class="box1">
      <div class="contact w1640 f-cb">
        <div class="list-box">
          <div class="ulbox">
            <router-link :to="{ path: 'NewsDetail', query: { newsId: item.id, } }" v-for="(item, index) in newsList"
              :key="index" class="li fl3 js-m translate-bottom1 animate pt-50 pb-50 aos-init aos-animate"
              data-aos="fade-up" aos-easing="ease" aos-delay="200">
              <div class="time">
                <div class="tit3 fon1 f-36 f-bold mt-20">
                  {{ item.dateOfDay }}
                </div>
                <div class="tit4 fon1 f-16 f-bold col-666">
                  {{ item.monthYear }}
                </div>
                <i class="iconfont">→</i>
              </div>
              <div class="text">
                <div class="tit5 f-20 fon1 mb-10 f-bold mt-20">
                  {{ item.theme }}
                </div>
                <div class="p f-16 col-666">
                  {{ item.introduce }}
                </div>
              </div>
              <div class="img">
                <img :src="item.pic">
              </div>
            </router-link>
          </div>
        </div>
        <div class="pagination  aos-init aos-animate" data-aos="fade-up" aos-easing="ease" aos-delay="200">

          <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
            layout="total, sizes,prev, pager, next,jumper" :current-page.sync="listQuery.pageNum"
            :page-size="listQuery.pageSize" :page-sizes="[10, 15, 20]" :total="total">
          </el-pagination>

        </div>
      </div>
    </div>
  </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { fetchNewsByType } from '@/api/news';
export default Vue.extend({
  name: 'NewsList',
  props: {
    newsType: {
      type: String,
      default: false
    }
  },
  data() {
    return {
      total: null,
      listQuery: {
        pageNum: 1,
        pageSize: 10
      },
      newsList: [],
    }
  },
  mounted() {
    /* aos动画初始化 */
    AOS.init();
  },
  created() {
    this.getList()
  },
  watch: {
    newsType: function (newValue) {
      this.getList();
    }
  },
  methods: {
    getList() {
      fetchNewsByType({ newsType: this.newsType, pageSize: this.listQuery.pageSize, pageNum: this.listQuery.pageNum }).then(response => {
        this.newsList = response.data.list;
        this.total = response.data.total;
      })
    },
    handleSizeChange(val) {
      this.listQuery.pageNum = 1;
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    },
  },
})

</script>
<style>
.main.news {
  padding: 130px 0
}

.pt-0 {
  padding-top: 0 !important;
}

.main.news .box1 .list-box .li {
  position: relative;
  overflow: hidden;
}

.fl3 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-flow: row wrap;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.f-18 {
  font-size: 18px;
}

.f-48 {
  font-size: 48px;
}

.col-666 {
  color: #666;
}

.main.news .box1 .list-box {
  width: 82vw;
  margin: 0 auto
}

.main.news .box1 .list-box .li {
  border-bottom: 1px solid #ececec;
}

.main.news .box1 .list-box .li:last-child {
  border-bottom: none;
}

.main.news .box1 .list-box .time {
  width: 70px;
  text-align: center;
}

.main.news .box1 .list-box .time i {
  color: #666
}

.main.news .box1 .list-box .time .tit3 {
  font-family: OPPOSans-B;
  color: #393939;
  line-height: 1.2;
}

.main.news .box1 .list-box .tit5 {
  font-family: OPPOSans-M;
  color: #393939;
  line-height: 1.5;
}

.main.news .box1 .list-box .text {
  width: calc(70% - 112px);
  position: relative;
}

.main.news .box1 .list-box .img {
  width: 15%
}

.main.news .box1 .list-box .li:hover .tit5 {
  color: #49b24c;
}

.main.news .box1 .list-box .text .p {
  font-family: OPPOSans-M;
  line-height: 2;
}

.main.news .box1 .list-box .text:after {
  content: "";
  display: block;
  width: 56px;
  height: 1px;
  background: #ccc;
  position: absolute;
  left: -70px;
  top: 34px
}

.main.news .box1 .itembox {
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ececec;
}

.main.news .box1 .itembox .tit2 {
  color: #393939;
  margin-bottom: .5rem;
  line-height: 1;
}

.main.news .box1 .itembox .tit3 {
  line-height: 1.5;
  margin-bottom: .65rem;
}

.main.news .box1 .itembox .p {
  line-height: 2;
}

.main.news .box1 .itembox .more {
  width: 135px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  background: #008d40;
  border-radius: 5px;
  color: #fff;
  margin-top: .8rem;
  display: block;
}

.main.news .box1 .more-btn {
  width: 500px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background: #f2f8f1;
  margin: 15px auto;
  text-align: center;
  cursor: pointer;
  color: #008d40;
}

.main.news .box1 .more-btn img {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.main.news .box1 .recommend-box {
  width: 29.3%;
  padding-left: 1.5rem;
}

.main.news .box1 .recommend-box .tit2 {
  color: #393939;
  margin-bottom: .7rem;
}

.main.news .box1 .recommend-box .li {
  margin-bottom: 1.5rem;
  display: block;
  position: relative;
}

.main.news .box1 .recommend-box .img {
  overflow: hidden;
}

.main.news .box1 .recommend-box .img img {
  width: 100%;
}

.main.news .box1 .recommend-box .p {
  margin-top: .35rem;
  text-align: center;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.main.news .box1 .recommend-box .tip-btn {
  height: 36px;
  line-height: 36px;
  border-radius: 36px;
  background: #008d40;
  padding: 0 15px;
  position: absolute;
  left: .5rem;
  top: .5rem;
}

.main.news .box1 .recommend-box .tip-btn img {
  margin-right: 8px;
}

.main.news .box2 {
  padding: 2.25rem 0;
}

.main.news .box2 .tit2 {
  color: #393939;
  margin-bottom: .75rem;
}

.main.news .box2 .tab-ul {
  margin-bottom: 1rem;
}

.main.news .box2 .tab-ul .li {
  color: #777;
  margin-right: 2rem;
  line-height: 1.8;
  -webkit-transition: color .3s;
  transition: color .3s;
  position: relative;
  cursor: pointer;
}

.main.news .box2 .tab-ul .li:before {
  content: "";
  position: absolute;
  width: 0;
  bottom: 0;
  height: 6px;
  background: #008c3f;
  -webkit-transition: all .3s;
  transition: all .3s;
}

.main.news .box2 .tab-ul .li:hover,
.main.news .box2 .tab-ul .li.cur {
  color: #008b3f;
}

.main.news .box2 .tab-ul .li:hover:before,
.main.news .box2 .tab-ul .li.cur:before {
  height: 3px;
  width: 100%;
}

.main.news .box2 .tab-ul .li:last-child {
  margin-right: 0;
}

.main.news .box2 .ulbox {
  position: relative;
  z-index: 1;
}

.main.news .box2 .ulbox .li {
  width: 30.5%;
  margin-right: 4.25%;
  display: block;
  margin-bottom: 1.25rem;
}

.main.news .box2 .ulbox .li img {
  max-width: 100%;
}

.main.news .box2 .ulbox .li:nth-child(3n) {
  margin-right: 0;
}

.main.news .box2 .ulbox .img {
  overflow: hidden;
  position: relative;
}

.main.news .box2 .ulbox .video-btn {
  width: 1.525rem;
  height: auto;
  min-width: 35px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  z-index: 2;
}

.main.news .box2 .ulbox .p {
  color: #393939;
  text-align: center;
  margin-top: .5rem;
}

.main.news .box2 .more-btn {
  width: 500px;
  height: 45px;
  line-height: 45px;
  border-radius: 5px;
  background: #f2f8f1;
  margin: 15px auto;
  text-align: center;
  cursor: pointer;
  color: #008d40;
}

.main.news .box2 .more-btn img {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}

.main.news .box1 .list-box .li::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background: #49b24c;
  z-index: 1;
  -webkit-transform: scale3d(1, 1, 1);
  transform: scale3d(1, 1, 1);
  -webkit-transition: all .5s;
  transition: all .5s;
}

.main.news .box1 .list-box .li:hover::before {
  width: 100%;
}

.f-20 {
  font-size: 20px;
}

.pb-50 {
  padding-bottom: 50px;
}

.pt-50 {
  padding-top: 50px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-20 {
  margin-top: 20px;
}

.mt-20 {
  margin-top: 20px;
}

.f-bold {
  font-weight: bold;
}

.f-36 {
  font-size: 36px;
}

.col-666 {
  color: #666;
}

.f-bold {
  font-weight: bold;
}

.f-16 {
  font-size: 16px;
}

.mb-10 {
  margin-bottom: 10px;
}

.main.news .box1 .list-box .text .p {
  line-height: 2;
}

.col-666 {
  color: #666;
}

img {
  border: 0;
  vertical-align: middle;
  max-width: 100%;
}

.pagination {
  height: 50px;
  width: 40%;
  margin: 50px auto;
}
</style>