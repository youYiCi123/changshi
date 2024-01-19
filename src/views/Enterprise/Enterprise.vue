<template>
    <div>
        <div class="zdInner_ban Inner_ban"
            style="background-image: url(http://www.assuretech.com.cn/uploadpic/166994854718.jpg);">
            <div class="zdInner_txt">
                <div class="ind-title-l">
                    <p class="title-en f-48">招贤纳士</p>
                    <span></span>
                    <p class="title-cn f-18">为梦想 &nbsp;共耀征程</p>
                </div>
            </div>
        </div>
        <div class="subMenu">
            <div class="newsWrap">
                <div class="subMenu_dl">
                    <dd :class="newsSubMenuIndex == index ? 'hover' : ''" v-for="(item, index) in newsMenuList" :key="index"
                        @click="selectNewsMenu(item)">
                        <a class="subMenu_a">
                            <span>{{ item.name }}</span>
                            <em></em>
                        </a>
                    </dd>
                </div>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Enterprise',
    data() {
        return {
            newsMenuList: [{ id: 0, name: '联系我们', skip: 'Contact' }, { id: 1, name: '招贤纳士', skip: 'Recruit' },],
            newsSubMenuIndex: 0,
        }
    },
    methods: {
        selectNewsMenu(item) {
            let newsNumber = document.getElementsByTagName("em") as HTMLCollectionOf<HTMLElement>
            for (let i = 0; i < newsNumber.length; i++) {
                if (item.id == i) {
                    newsNumber[i].style.display = "block"
                    this.$router.push({ path: item.skip })

                } else {
                    newsNumber[i].style.display = "none"
                }
            }
            this.newsSubMenuIndex = item.id
        },
    },

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
    margin: 0rem auto;
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