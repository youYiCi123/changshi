<template>
    <div>

        <Head></Head>
        <div class="sub-banner ban-question"
            style="background-image: url(https://www.nbdeli.com/bocupload/2020/05/19/158985990620167zz7r.png)">
            <div class="question-search">
                <form class="inp">
                    <input type="text" placeholder="请输入您的问题">

                </form>
                <div class="keywords">
                    <span>热门问题：</span>
                    <a>正反定型不符</a>
                    <a>反定型凝集弱</a>
                    <a>正定型凝集强度&lt;3+</a>
                    <a>阴性对照孔出现阳性结果</a>
                </div>
            </div>
        </div>
        <div class="question-container">
            <div class="news-view">
                <div class="question-wrap f-cb">
                    <div class="question-aside wow fadeInLeft">
                        <div class="tit">热门问题</div>
                        <div class="aside">
                            <el-menu text-color="#000" active-text-color="#49b24c" 
                                 style="border-right: none" :unique-opened="true"
                                :collapse-transition="true">
                                <!-- 一级菜单 -->
                                <el-submenu v-for="item in questionMenu" :key="item.id" :index=item.id>
                                    <template #title>
                                        <span>{{ item.seriesName }}</span>
                                    </template>
                                    <!-- 二级菜单 -->
                                    <el-menu-item @click="getQuestion(item.id,item2.id)" v-for="item2 in item.children" :key="item2.id" :index=item.id>
                                        <template #title>
                                            <span>{{ item2.seriesName }}</span>
                                        </template>
                                    </el-menu-item>
                                </el-submenu>
                            </el-menu>
                        </div>
                    </div>
                    <div class="question-list wow fadeInRight">
                        <el-collapse v-model="activeName" accordion>
                            <el-collapse-item  :title="'问：' + item.question" :name=item.id
                                v-for="(item, index) in questionList">
                                <div  v-html="'答：'+item.answer"></div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script lang="ts">
import Head from "@/components/Head/index.vue";
import Vue from 'vue'
import { fetchSolutionChildren,getQuestionInfo,addQuestionView } from '@/api/question';
export default Vue.extend({
    name: 'Solution',
    components: {
        Head
    },
    data() {
        return {
            activeName: '-1',
            questionMenu: [],
            questionList: [],
        }
    },
    created() {
        this.getSolutionChildren()
    },
    watch: {
        activeName: function (newValue) {
            this.setQuestionView(newValue)
        }
    },
    methods: {
        getSolutionChildren() {
            fetchSolutionChildren().then(response => {
                this.questionMenu=response.data
            })
        },
        setQuestionView(id:number){
            addQuestionView(id).then(response=>{
                console.log('321',response.code)
            })
        },
        getQuestion(fatherid:any,id:any){
            const combineId=fatherid+','+id
            getQuestionInfo({combineId:combineId}).then(response => {
                this.questionList=response.data.list
            })
        }
    },
})
</script>
<style >
/* 12 */
.ban-question {
    height: 6.25rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.sub-banner {
    position: relative;
}

.question-search {
    position: absolute;
    width: 10.968rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.question-search .inp {
    height: 0.703rem;
    padding: 0 0.168rem;
    border: 0.015rem solid rgba(255, 255, 255, .4);
    border-radius: 0.359rem;
}

.question-search input[type=text] {
    height: 0.646rem;
    padding: 0.051rem 0;
    border: none;
    outline: medium;
    background-color: transparent;
    color: #fefefe;
    font-size: 0.25rem;
    line-height: 0.459rem;
    width: 80%;
}

input::placeholder {
    color: #fefefe;
}

.question-search .keywords {
    margin-top: 0.075rem;
    padding: 0 0.187rem;
    font-size: 0;
}

.question-search .keywords span,
.question-search .keywords a {
    display: inline-block;
    /* *display: inline; */
    zoom: 1;
    font-size: 0.070rem;
    color: #fefefe;
    margin-right: 0.103rem;
    transition: all .3s;
}

.question-container {
    padding-bottom: 0.796rem;
    background-color: #f7f7f7;
}

.news-view {
    width: 78.125%;
    margin: 0 auto;
}

.question-wrap {
    margin-top: -0.742rem;
    background-color: #ffffff;
    z-index: 3;
    position: relative;
}

.f-cb:after {
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    overflow: hidden;
    content: ".";
}

.f-cb {
    zoom: 1;
}

.question-wrap .question-aside {
    background-color: #ffffff;
    width: 21%;
    float: left;
    border-right: 0.015rem solid #ededed;
}

.question-wrap .question-aside .tit {
    text-align: center;
    font-weight: bold;
    font-family: monospace;
    padding: 0 15%;
    font-size: 0.331rem;
    line-height: 0.762rem;
    border-bottom: 0.015rem solid #ededed;
}

.question-wrap .question-list {
    padding: 0.468rem 9.33% 0.679rem;
    width: calc(95.34% - 0.015rem);
    padding-left: 4.828rem;
}

/* 设置elmentui的样式 */

.el-collapse-item__header {
    font-size: 0.25rem;
}

.el-collapse-item__header.is-active {
    color: #49b24c;
}

.el-collapse-item__wrap {
    /* padding-top: 10px; */
    padding-left: 0.218rem;
    background-color: #fafafa;
}</style>
    