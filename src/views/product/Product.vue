<template>
    <div class="ty-prod-list">

        <Head></Head>
        <div class="zdInner_ban Inner_ban"
            style="background-image: url(http://www.assuretech.com.cn/uploadpic/166959666244.jpg);">
            <div class="zdInner_txt">
                <div class="ind-title-l">
                    <p class="title-en f-48 wow fadeInUp">产品中心</p>
                    <span class="wow fadeInUp"></span>
                    <p class="title-cn f-18 wow fadeInUp">深耕行业 &nbsp;共谋发展</p>
                </div>
            </div>
        </div>
        <div class="subMenu">
            <div class="newsWrap">
                <div class="subMenu_dl">
                    <dd :class="productSubMenuIndex == index ? 'hover' : ''" v-for="(item, index) in productMenuList"
                        :key="index" @click="selectProdMenu(item.id, index)">
                        <a class="subMenu_a">
                            <span>{{ item.seriesName }}</span>
                            <em></em>
                        </a>
                    </dd>
                </div>
            </div>
        </div>
        <router-view :prodType="this.productSubMenuIndex"></router-view>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { fetchTypeList } from '@/api/prod';
import Head from "@/components/Head/index.vue";
export default Vue.extend({
    name: 'Product',
    components: {
        Head
    },
    data() {
        return {
            productMenuList: [],
            productSubMenuIndex: 0,
        }
    },
    created() {
        this.getMenuList()
    },
    methods: {
        getMenuList() {
            fetchTypeList().then(response => {
                this.productMenuList = response.data;
                this.productSubMenuIndex = this.productMenuList[0].id;
            })
        },
        selectProdMenu(id, index) {
            let newsNumber = document.getElementsByTagName("em") as HTMLCollectionOf<HTMLElement>
            for (let i = 0; i < newsNumber.length; i++) {
                if (index == i) {
                    newsNumber[i].style.display = "block"
                } else {
                    newsNumber[i].style.display = "none"
                }
            }
            this.productSubMenuIndex = id
            if( this.$route.name!='ProductList'){
                this.$router.push({ path: 'ProductList'})
            }
        },
    }
})
</script>
<style>
.subMenu {
    overflow: hidden;
    background: #fff;
    font-size: 0rem;
    text-align: center;
    border-bottom: 0.015rem solid #e5e5e5;
}

.newsWrap {
    clear: both;
    width: 18.75rem;
    margin: 0 auto;
}

.subMenu_dl {
    display: inline-block;
    overflow: hidden;
}

.subMenu_dl dd {
    float: left;
    display: inline;
    overflow: hidden;
    padding: 0rem 0.234rem;
}

.product_desc h4 {
    margin-top: 0.156rem;
    margin-bottom: 0.156rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}

.product_desc h6 {
    margin-top: 0.156rem;
    margin-bottom: 0.156rem;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
}

.subMenu_a {
    display: block;
    overflow: hidden;
    font-size: 0.25rem;
    font-weight: bold;
    color: #393939;
    height: 1.015rem;
    line-height: 1.015rem;
    position: relative;
    padding: 0rem 0.156rem;
}

.subMenu_a em {
    display: none;
    overflow: hidden;
    width: 100%;
    height: 0.031rem;
    background: #49b24c;
    position: absolute;
    left: 0rem;
    bottom: 0rem;
}

.subMenu_dl dd.hover .subMenu_a {
    color: #49b24c;
}
</style>