<template>
	<div id="container">
	</div>
</template>
 
<script>
import AMapLoader from '@amap/amap-jsapi-loader'
// import { color } from 'echarts/lib/export'
window._AMapSecurityConfig = {
	securityJsCode: 'd4cd2168299c3d68241fe6bce3bf12c9'//在这里填写你的安全密钥
}
export default {
	name: 'mapContainer',
	data() {
		return {
			map: null,
			autoOptions: {
				input: 'tishikuang' //绑定的搜索关键字的input标签ID，用这个注册
			},
			auto: null,
			userInput: '', //绑定的搜索关键字的的内容
			placeSearch: null,
			searchHere: null, //根据搜索组件搜索到以后的地点信息
		}
	},
	mounted() {
		this.initMap()
	},
	methods: {

		// poi搜索以后 点击确认选址以后的操作
		biu() {
			if (this.searchHere) {
				this.$message({
					message: '确认地点：' + this.searchHere.name,
					type: 'success'
				});
				// this.$emit('mapHere',this.searchHere);

				alert(`地址数据都在data里面this.searchHere，包括经纬度，以及其他各种地址信息，该有的都有，当poi搜索以后select(e){}方法里面的参数e就是地址信息，我把单独拿出来。地点名：` + this.searchHere.name)
			}
		},
		initMap() {
			AMapLoader.load({
				key: "3f531ba13678c38aca86047609846ab8", // 申请好的Web端开发者Key，首次调用 load 时必填
				version: "1.4.15", // 指定要加载的 JSAPI 的版本，2.0版本没有setAnimation方法
			}).then((AMap) => {
				this.map = new AMap.Map("container", { //设置地图容器id
					viewMode: "3D", //是否为3D地图模式
					zoom: 17, //初始化地图级别
					center: [117.132667, 31.802269], //初始化地图中心点位置
				});

				// 点标记显示内容，HTML要素字符串
				var markerContent = '' +
					'<div class="custom-content-marker">' +
					'   <img src="https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20230314162810.png">' +
					'</div>';

				var marker = new AMap.Marker({
					content: markerContent,
					position: [117.132667, 31.802269],
					offset: new AMap.Pixel(-13, -30)
				});
			
				marker.setMap(this.map);
					// 设置点标记的动画效果，此处为弹跳效果
				  marker.setAnimation('AMAP_ANIMATION_BOUNCE');
				
			}).catch(e => {
				console.log(e);
			})
		},
	},

}
</script>
 
<style>
#container {
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 100%;
}

.mapSearch {
	display: flex;
	margin-bottom: 8px;
}

#tishikuang {
	margin-bottom: 200px;
	display: block;
}
</style>