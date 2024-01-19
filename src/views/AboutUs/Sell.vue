<template>
    <div class="serve-after" id="net">
        <div class="contain">
            <div class="common-title center wow fadeInUp" data-wow-duration="1.3s" data-wow-delay="0.5s">
                <div class="about_tit">销售网点</div>
                <div class="common-cont">
                    <p>天一生物设立了专门的售后服务部门和客服部门，7×24小时不间断服务，服务范围覆盖所有用户群体。</p>
                </div>
            </div>
            <div class="servr-network">
                <div id="myChart" class="wow bounceInLeft"  data-wow-duration="1.5s" data-wow-delay="0.3s" style="width: 800px;height: 520px;"></div>
                <div class="outlest_desc">
                    <div class="outlest_tit wow bounceInDown"   data-wow-duration="1.5s" data-wow-delay="0.3s">
                        <i class="iconfont icon-dingwei"
                                style="color: #49b24c;padding-right: 10px;font-size: 25px;"></i>
                                <span id="outlest_tit"></span>
                    </div>
                    <div class="tel_num">
                        <!-- <div class="outname">
                            省会城市:
                            <span id="tel_name"></span>
                        </div> -->
                        <div class="outtel wow bounceInRight"  data-wow-duration="1.5s" data-wow-delay="0.3s">
                            服务电话：
                            <span>0551-62678113</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
import 'echarts/map/js/china'
export default {
    name: "eCharts",
    data() {
        return {
            // 绘制图表
            dataList: [
                { name: '北京', Owner: '', tel: '110121212' },
                { name: '天津', Owner: '', tel: '110121212' },
                { name: '上海', Owner: '', tel: '1101212112' },
                { name: '重庆', Owner: '', tel: '110121212' },
                { name: '河北', Owner: '石家庄市', tel: '110121652' },
                { name: '河南', Owner: '郑州市', tel: '110121212' },
                { name: '云南', Owner: '昆明市', tel: '110121980' },
                { name: '湖南', Owner: '长沙市', tel: '110121212' },
                { name: '安徽', Owner: '合肥市', tel: '110121212' },
                { name: '山东', Owner: '济南市', tel: '123121675' },
                { name: '新疆', Owner: '乌鲁木齐市', tel: '110121212' },
                { name: '江苏', Owner: '南京市', tel: '110121212' },
                { name: '浙江', Owner: '杭州市', tel: '110121212' },
                { name: '江西', Owner: '南昌市', tel: '110121212' },
                { name: '湖北', Owner: '武汉市', tel: '110121212' },
                { name: '广西', Owner: '南宁市', tel: '110121212' },
                { name: '甘肃', Owner: '兰州市', tel: '110121212' },
                { name: '山西', Owner: '太原市', tel: '110121212' },
                { name: '内蒙古', Owner: '呼和浩特市', tel: '110121212' },
                { name: '陕西', Owner: '西安市', tel: '11012121' },
                { name: '福建', Owner: '福州市', tel: '110121213' },
                { name: '贵州', Owner: '贵阳市', tel: '110121213' },
                { name: '广东', Owner: '广州市', tel: '110121214' },
                { name: '青海', Owner: '西宁市', tel: '110121215' },
                { name: '西藏', Owner: '拉萨市', tel: '110121217' },
                { name: '四川', Owner: '成都市', tel: '110121831' },
                { name: '宁夏', Owner: '银川市', tel: '110121210' },
                { name: '海南', Owner: '海口市', tel: '12012121' },
                { name: '辽宁', Owner: '沈阳市', tel: '110121217' },
                { name: '吉林', Owner: '长春市', tel: '110121217' },
                { name: '黑龙江', Owner: '哈尔滨市', tel: '110121217' },
                
            ],
            geoCoordMap: {
                '新疆': [86.61, 40.79],
                '西藏': [89.13, 30.66],
                '黑龙江': [128.34, 47.05],
                '吉林': [126.32, 43.38],
                '辽宁': [123.42, 41.29],
                '内蒙古': [112.17, 42.81],
                '北京': [116.40, 40.40],
                '宁夏': [106.27, 36.76],
                '山西': [111.95, 37.65],
                '河北': [115.21, 38.44],
                '天津': [117.04, 39.52],
                '青海': [97.07, 35.62],
                '甘肃': [103.82, 36.05],
                '山东': [118.01, 36.37],
                '陕西': [108.94, 34.46],
                '河南': [113.46, 34.25],
                '安徽': [117.28, 31.86],
                '江苏': [120.26, 32.54],
                '上海': [121.46, 31.28],
                '四川': [103.36, 30.65],
                '湖北': [112.29, 30.98],
                '浙江': [120.15, 29.28],
                '重庆': [107.51, 29.63],
                '湖南': [112.08, 27.79],
                '江西': [115.89, 27.97],
                '贵州': [106.91, 26.67],
                '福建': [118.31, 26.07],
                '云南': [101.71, 24.84],
                '广西': [108.67, 23.68],
                '广东': [113.98, 22.82],
                '海南': [110.03, 19.33],
                '台湾': [120.15, 24.15]
            },
            mapOption: {
                // title: { text: "在Vue中使用echarts" },
                // tooltip: {},  提示
                series: [
                    {
                        name: '全国服务网点',
                        type: 'map',
                        map: 'china',
                        zoom: 1.2,
                        data: [],
                        //地图的样式
                        itemStyle: {
                            borderColor: '#999',
                            boderType: 'solid',
                            borderWidth: "1"
                        },

                        emphasis: {
                            //选中地图区块的背景颜色
                            itemStyle: {
                                color: '#333',
                                areaColor: '#49b24c',
                                show: true,
                            },
                            //选中区块字体大小及颜色
                            label: {
                                color: "#333",
                                fontSize: "14",
                            }
                        },
                        label: {
                            normal: {
                                show: true
                            },
                            emphasis: {
                                show: true,
                                color: '#333'
                            }
                        }
                    },

                ],
            }
        };
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = this.geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;

        },
        drawLine() {
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById("myChart"));
            // let mapData = this.convertData(this.data)
            // this.mapOption.series[0].data = mapData
            let _this = this
            myChart.setOption(this.mapOption);
            myChart.on('mouseover', function (param) {
                let placeOwner = _this.dataList
                //这个params可以获取你要的图中的当前点击的项的参数
                for (var i = 0; i < placeOwner.length; i++) {
                    if (param.name === placeOwner[i].name) {
                        let outlestTit = document.getElementById("outlest_tit")
                        outlestTit.innerText=placeOwner[i].name
                    }
                }
            });
        },
    },
};
</script>
   
<style>
.about_tit{
    font-size: 0.468rem;
    color: #333;
    text-align: center;
    line-height: 1;
    margin-bottom: 0.562rem;
}
.about_tit:after {
    content: '';
    display: block;
    width: 0.843rem;
    height: 0.046rem;
    background: #333;
    margin: 0.234rem auto 0;
}
.serve-after {
    width: 100%;
    padding: 1.375rem 0 0px;
}

.common-title.center {
    text-align: center;
}

.common-title {
    width: 100%;
}

.common-title h2 {
    font-size: 0.593rem;
    color: #49b24c;
    font-weight: 700;
}


.common-cont {
    width: 100%;
    margin-top: 0.187rem;
}

.common-title.center p {
    font-family: OPPOSans-M;
    font-size: 0.281rem;
    color: #888;
    line-height: 0.437rem;
    letter-spacing: normal;
    max-width: 13.25rem;
    margin: 0 auto;
    margin-top: 0.375rem;
}

.common-cont p {
    font-size: 0.25rem;
    color: #888;
    line-height: 0.468rem;
    letter-spacing: normal;
    margin-top: 0 !important;
    max-width: 17.5rem !important;
}

.servr-network {
    width: 17.187rem;
    height: 9.859rem;
    margin: 0.468rem auto 0;
    position: relative;
}

#container {
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    width: 14.718rem;
    height: 100%;
}
.outlest_desc {
    width: 5.781rem;
    padding: 0.312rem 0.625rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.total_item {
    margin-bottom: 0.156rem;
}

.outlest_tit {
    font-size: 0.375rem;
    color: #49b24c;
    padding: 0.156rem 0.312rem;
    box-sizing: border-box;
    margin-top: 0.781rem;
    border-bottom: 0.015rem solid #999;
}
.tel_num {
    font-family: OPPOSans-M;
    margin-top: 0.156rem;
    line-height: 0.468rem;
    font-size: 0.25rem;
    color: #4f4f4f;
}
.outname_span {
    letter-spacing: 0.078rem;
}

</style>