<template>
    <div class="brand_wrap backcover por item item1" id="br1"
      style="background:url(http://www.assuretech.com.cn/images/cc_02.jpg)no-repeat center center">
      <div class="w1440">
        <div class="title secwen wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
          <p class="title-cn f-38 f-left">企业文化</p>
          <p class="title-en f-38 f-left">Corporate Culture</p>
        </div>
        <div class=" brand_tab f-18 secwen add2 ">
          <div class="item wow bounceInRight" v-for="(item, index) in culturalLabelList" :key="index" @mouseover="mouseCulture(index)">
            <img :src="index==0? require('@/assets/img/icons/企业愿景.png'):index==1?require('@/assets/img/icons/使命.png'):require('@/assets/img/icons/企业使命.png')">
            <div>
              <span>{{ item.cultureName }}</span>
            </div>
          </div>
        </div>
        <div class="por contentContainer">
          <div class="content f-24" v-for="(item, index) in culturalContentList" :key="index">
            <p v-html="item.cultureDesc"></p>
          </div>
        </div>
      </div>
      <div class="brandwave" id="wave1">
        <img src="http://www.assuretech.com.cn/images/cc-bg_03.png">
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import { fetchCompanyCulture } from '@/api/aboutUs';
  export default Vue.extend({
    name: 'Culture',
    data() {
      return {
        culturalLabelList:[],
        culturalContentList: [],
      }
    },
    created() {
        this.getCompanyCulture();
    },
    methods: {
      getCompanyCulture(){
        fetchCompanyCulture({keyword:'',pageSize:5,pageNum:1}).then(response=>{
          let Arr=response.data.list;
          Arr.forEach(el => {
            //愿景主题
            this.culturalLabelList.push({
              id: el.enterpriseYear,
              cultureName: el.cultureName
            })
            //愿景内容
            this.culturalContentList.push({
              id: el.enterpriseYear,
              cultureDesc: el.cultureDesc
            });
          })
        })
      },
      mouseCulture(index) {
        var cultures=document.getElementsByClassName('content') as HTMLCollectionOf<HTMLElement>
        for(var i=0;i<cultures.length;i++){
          if(index===i){
            cultures[i].classList.add('curAppear')
          }else{
            cultures[i].classList.remove('curAppear')
          }
        }
      }
    },
  })
  </script>
  <style>
  .por {
    position: relative;
    padding-bottom: 1.562rem;
  }
  
  .brand_wrap {
    width: 100%;
    /* height: 800px; */
    color: #fff;
    box-sizing: border-box;
    padding-top: 2.031rem;
    text-align: center;
    overflow: hidden;
  }
  
  .brand_wrap .w1440 {
    box-sizing: border-box;
    padding: 0 2.343rem;
  }
  
  .brand_wrap .title {
    margin-bottom: 0.937rem;
    position: relative;
    z-index: 1;
  }
  
  .brand_wrap .title .title-cn {
    font-family: OPPOSans-M;
    line-height: 1.5;
  }
  
  .f-left {
    text-align: left;
  }
  
  .f-38 {
    font-size: 0.593rem;
  }
  
  .brand_wrap .swiper-container {
    overflow: inherit;
  }
  
  .brand_wrap .swiper-wrapper {
    display: block;
  }
  
  .brand_wrap .brand_tab {
    /* display: flex; */
    justify-content: center;
    align-items: center;
    margin-bottom: 0.687rem;
    width: 20vw;
    float: right;
    /* overflow: hidden; */
    transform: none !important;
  }
  
  .f-18 {
    font-size: 0.281rem;
  }
  
  .brand_wrap .brand_tab .item {
    width: 5.781rem;
    height: 1.875rem;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    margin: 0 0.343rem;
    margin-bottom: 0.031rem;
  }
  
  .brand_wrap .brand_tab .item img {
    max-height: 0.625rem;
    margin-bottom: 0.187rem;
    float: left;
    margin-left: 0.625rem;
    margin-right: 0.468rem;
  }
  
  .contentContainer {
    width: 50%;
    text-align: left;
    margin-top: 10%;
    z-index: 99;
  }
  
  .por {
    position: relative;
    padding-bottom: 1.562rem;
  }
  
  .brand_wrap .content.curAppear {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .brand_wrap .brand_tab .item:hover {
    background: #208ce4;
  }
  
  .brand_wrap .content.curAppear {
    transition: all 1s ease 0s;
  }
  
  .brand_wrap .content {
    line-height: 1.5;
    position: absolute;
    top: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(0.312rem);
  }
  
  .f-24 {
    font-size: 0.375rem;
  }
  
  #wave1 {
    width: 60%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }
  
  #wave1 img {
    width: 100%;
    height: 100%;
  }
  </style>
  