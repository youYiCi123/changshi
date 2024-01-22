<template>
    <div class="ty-loper kf-fops">

        <div class="ty-poet wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s"
            v-for="(item, index) in productDescList" :key="index">
            <div class="col-lg-6 col-md-6 ty-xc ty-hide-h" style="padding:0;">
                <div
                    style="width: 100%;height: 460px;display: flex;justify-content: center;align-content: center;flex-wrap: wrap;">
                    <img class="img-responsive" style="width:65%;" :src="item.pic">
                </div>
            </div>
            <div class="col-lg-6 col-md-6 ty-xc1" style="padding:0;">
                <div class="product_desc">
                    <h4>{{ item.prodName }}</h4>
                    <h6>{{ item.feature }}</h6>
                    <p>{{ item.principle }}</p>
                    <router-link class="product_more_desc" :to="{ path: 'ProductDetial', query: { prodId: item.id, } }">查看更多</router-link>
                </div>
                <div class="product_h_line">
                </div>
            </div>
            <div class="clearfix">
            </div>
        </div>
        <div class="pagination  wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                layout="total, sizes,prev, pager, next,jumper" :current-page.sync="listQuery.pageNum"
                :page-size="listQuery.pageSize" :page-sizes="[10, 15, 20]" :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script  lang="ts">
import Vue from 'vue'
import { WOW } from 'wowjs'
import { fetchProdByType } from '@/api/prod';
export default Vue.extend({
    name: 'ProductList',
    props: {
        prodType: {
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
            //产品列表
            productDescList: [],
        }
    },
    mounted() {
        /* aos动画初始化 */
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 40,
            mobile: true,
            live: true,
        })
        wow.init()
    },
    watch: {
        prodType: function (newValue) {
            this.getList();
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            fetchProdByType({ prodType: this.prodType, pageSize: this.listQuery.pageSize, pageNum: this.listQuery.pageNum }).then(response => {
                this.productDescList = response.data.list;
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
/* //产品列表 */
.ty-prod-list {
    background: #f4f4f4;
}

.ty-prod-list .ty-loper {
    margin: 0 auto;
    padding: 1.25rem 0 0.156rem;
    width: 70%;
}

.kf-fops {
    background: #f4f4f4;
}

.kf-fops .ty-poet {
    overflow: hidden;
    margin: 2% auto;
    height: 100%;
    border-radius: 0.234rem;
    background: #fff;
    box-shadow: inherit;
    transition: all .5s ease-in-out;
}

.kf-fops .ty-poet:hover {
    box-shadow: -0.015rem -0.015rem 0.312rem 0.187rem rgba(0, 0, 0, .11)
}

.ty-loper .ty-poet:nth-child(2n) .ty-xc {
    float: right
}

.ty-loper .ty-poet:nth-child(2n) .product_desc {
    padding-left: 10%
}

.col-lg-6 {
    position: relative;
    min-height: 0.015rem;
    padding-right: 0.234rem;
    padding-left: 0.234rem;
    float: left;
    width: 50%;
}

.col-md-6 {
    position: relative;
    min-height: 0.015rem;
    padding-right: 0.234rem;
    padding-left: 0.234rem;
    float: left;
    width: 50%;
}

.ty-hide-h {
    overflow: hidden;
}

.img-responsive {
    display: block;
    max-width: 100%;
    height: auto;
}

.ty-hide-h img {
    transition: all .5s ease-in-out;
    transform: scale(1);
}

.kf-fops .ty-poet:hover .ty-hide-h img {
    transition: all .5s ease-in-out;
    transform: scale(1.1);
}

.ty-prod-list .ty-loper img {
    margin: 0 auto;
    padding: 5% 0;
    width: 50%;
}

.ty-xc1 {
    position: relative;
}

.ty-loper .ty-poet .product_desc {
    display: flex;
    width: 100%;
    height: 7.187rem;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: flex-start;
}

.ty-loper .ty-poet .product_desc h4 {
    color: #49b24c;
    font-size: 0.468rem;
    font-family: OPPOSans-M;
}

.ty-loper .ty-poet .product_desc h6 {
    color: #49b24c;
    font-family: OPPOSans-M;
    font-size: 0.281rem;
}

.ty-loper .ty-poet .product_desc p {
    display: -webkit-box;
    overflow: hidden;
    padding-right: 10%;
    color: #666;
    text-align: left;
    text-overflow: ellipsis;
    font-size: 0.25rem;
    font-family: OPPOSans-M;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}

.ty-prod-list .ty-loper p {
    margin: 0;
    padding: 0.078rem 0;
    color: #666;
    text-align: center;
    font-size: 0.25rem;
    font-family: OPPOSans-M;
}

.ty-loper .ty-poet .product_desc .product_more_desc {
    display: block;
    margin-top: 4%;
    padding: 1% 2%;
    width: 1.562rem;
    border-radius: 0.234rem;
    background: #49b24c;
    color: #fff;
    text-align: center;
    text-decoration: none;
}

.product_h_line {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0.078rem;
    background: #49b24c;
    transition: all .5s ease-in-out;
}

.clearfix:before {
    display: table;
    content: " ";
}

.clearfix:after {
    clear: both;
}

.ty-loper .ty-poet:hover .product_h_line {
    width: 100%;
    transition: all .5s ease-in-out;
}

.ty-loper .pagination {
    height: 0.781rem;
    width: 45%;
    margin: 0.781rem auto;
}

.ty-loper .el-pagination .btn-next,
.ty-loper .el-pagination .btn-prev {
    background: center center no-repeat #f2f2f2;
}

.ty-loper .el-pager li {
    background: #f2f2f2;
}
</style>