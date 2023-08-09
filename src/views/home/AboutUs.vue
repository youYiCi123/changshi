<template>
  <div>
    <div class="container clearfix ">
      <div class="index2wz text-center wow slideInDown">
        <img src='@/assets/img/companyImg/tianyi.png' class="mw-100">
      </div>
      <div class="index2block fl  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
        <div class="index2blockp1">走进天一</div>
        <div class="index2blockp2">ABOUT TIANYI</div>
        <div class="index2blockp3">
          <router-link to="AboutComponay">
            <span>查看更多+</span>
          </router-link>
        </div>
      </div>
      <!-- <div class="index2des fr">
        80年来，新华医疗本着心系健康、诚信天下的企业理念，坚定不移地走在健康产业、技术创新、资本运作的道路上，不断吸收国际先进的管理理念、管理模式，传承信仰、突破创新、三方齐力，着力民生，做最暖心的高品质医疗解决方案。</div> -->
    </div>
    <div class="index2num clearfix wow slideInRight">
      <div class="index2list ">
        <div class="index2listp1">研发团队</div>
        <div class="index2listp2">
          <span class="counter">
            <VueCountTo ref="counto" :startVal=0 :endVal=30 :duration=5000></VueCountTo>
          </span>
          <em>+</em>
          %
        </div>
      </div>
      <div class="index2list">
        <div class="index2listp1">专利</div>
        <div class="index2listp2">
          <!-- <span class="counter">50</span> -->
          <VueCountTo ref="counto" :startVal=0 :endVal=50 :duration=5000></VueCountTo>
          <em>+</em>
          项
        </div>
      </div>
      <div class="index2list">
        <div class="index2listp1">服务省份</div>
        <div class="index2listp2">
          <!-- <span class="counter">35</span> -->
          <VueCountTo ref="counto" :startVal=0 :endVal=35 :duration=3000></VueCountTo>
          <em>+</em>
          个
        </div>
      </div>
      <div class="index2list">
        <div class="index2listp1">合作医疗单位</div>
        <div class="index2listp2">
          <VueCountTo  ref="counto" :startVal=1800 :endVal=2000 :duration=8000></VueCountTo>
          <em>+</em>
          家
        </div>
      </div>
    </div>
    <div id="iviewBg"></div>
  </div>
</template>
  
<script>
import * as THREE from "three";
// import Stats from "./stats.module";
import VueCountTo from 'vue-count-to';
import { onMounted } from "vue";
export default {
  components: {
    VueCountTo
  },
  props: {
    //控制x轴波浪的长度
    amountX: {
      type: Number,
      default: 50,
    },
    //控制y轴波浪的长度
    amountY: {
      type: Number,
      default: 50,
    },
    //控制点颜色
    color: {
      type: String,
      default: "#c4c4c4",
    },
    //控制波浪的位置
    top: {
      type: Number,
      default: 350,
    },
  },

  setup(props) {
    const SEPARATION = 100;

    // let stats;
    let container, camera, scene, renderer;

    let particles,
      count = 0;

    let mouseX = 0;

    let windowHalfX = window.innerWidth / 2;

    function init() {
      container = document.createElement("div");
      document.getElementById("iviewBg").appendChild(container);

      //创建透视相机
      camera = new THREE.PerspectiveCamera(
        75, //摄像机视锥体垂直视野角度
        window.innerWidth / window.innerHeight, //摄像机视锥体长宽比
        10, //摄像机视锥体近端面
        10000 //摄像机视锥体远端面
      );

      //设置相机z轴视野
      camera.position.z = 1000;

      //创建场景
      scene = new THREE.Scene();

      const numParticles = props.amountX * props.amountY;

      const positions = new Float32Array(numParticles * 3);
      const scales = new Float32Array(numParticles);

      let i = 0,
        j = 0;

      // 初始化粒子位置和大小
      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i] = ix * SEPARATION - (props.amountX * SEPARATION) / 2; // x
          positions[i + 1] = 0; // y
          positions[i + 2] = iy * SEPARATION - (props.amountY * SEPARATION) / 2; // z
          scales[j] = 1;
          i += 3;
          j++;
        }
      }

      //是面片、线或点几何体的有效表述。包括顶点位置，面片索引、法相量、颜色值、UV 坐标和自定义缓存属性值。使用 BufferGeometry 可以有效减少向 GPU 传输上述数据所需的开销
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

      //着色器材质(ShaderMaterial),设置球的大小，颜色，等
      const material = new THREE.ShaderMaterial({
        uniforms: {
          //设置球的颜色
          color: { value: new THREE.Color(props.color) },
        },
        //控制球的大小
        vertexShader:
          "attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}",
        fragmentShader:
          "uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}",
      });

      //一个用于显示点的类。
      particles = new THREE.Points(geometry, material);
      //往场景中添加点
      scene.add(particles);

      //alpha - canvas是否包含alpha (透明度)。默认为 false。
      //渲染器的背景色默认为黑色，设置渲染器的背景色为透明
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearAlpha(0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      //显示右上角fps框
      // stats = new Stats();
      //   container.appendChild(stats.dom);

      container.style.touchAction = "none";
      //监听鼠标移动事件
      container.addEventListener("pointermove", onPointerMove);

      //调整波浪的位置
      container.style.position = "relative";

      window.addEventListener("resize", onWindowResize);
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y = 400;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array;
      const scales = particles.geometry.attributes.scale.array;

      // 设置粒子位置和大小
      let i = 0,
        j = 0;
      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50;

          scales[j] =
            (Math.sin((ix + count) * 0.3) + 1) * 10 +
            (Math.sin((iy + count) * 0.5) + 1) * 10;

          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.scale.needsUpdate = true;

      renderer.render(scene, camera);

      count += 0.1;
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    //监听鼠标移动事件
    function onPointerMove(event) {
      if (event.isPrimary === false) return;
      mouseX = event.clientX - windowHalfX;
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
      //fps 实时更新
      // stats.update();
    }

    onMounted(() => {
      init();
      animate();
    });
    return {};
  },
};
</script>
<!-- <script  lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'AboutUs',
    data() {
        return {}
    }
  })
</script>   -->
<style lang="scss" scoped>
#iviewBg {
  position: absolute;
  z-index: 10;
  width: 100vw;
  background: #eeeeee;
  height: 100%;
  min-height: 600px;
}

#iviewBg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
}

.container {
  width: 1170px;
  max-width: 1170px;
  padding-top: 133px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.text-center {
  text-align: center !important;
}

.mw-100 {
  max-width: 100% !important;
}

.index2block {
  width: 17.5%;
  text-align: right;
  margin-top: 35px;
}

.fl {
  float: left;
}

.index2blockp1 {
  font-family: OPPOSans-B;
  font-size: 48px;
  font-weight: bold;
  color: #424242;
  position: relative;
  margin-bottom: 10px;
}

.index2blockp2 {
  font-size: 16px;
  color: #626262;
  margin-bottom: 35px;
}

.index2blockp3 {
  margin-bottom: 35px;
}

.index2blockp1::after {
  content: '';
  width: 0.7em;
  height: 2px;
  background-color: #0081E0;
  position: absolute;
  right: 0.15em;
  bottom: -5px;
}

.index2block a {
  display: inline-block;
  font-size: 16px;
  padding: 15px 55px;
  color: #626262;
  border: 1px solid #626262;
  border-radius: 5px;
}

.index2block a span {
  font-family: OPPOSans-L;
  color: #8e8b8b;
  display: block;
  width: 5em;
  text-align: center;
}

.index2block a {
  display: inline-block;
  font-size: 16px;
  padding: 15px 55px;
  color: #626262;
  border: 1px solid #626262;
  border-radius: 5px;
}


.fr {
  float: right;
}

.clearfix::after {
  display: block;
  clear: both;
  content: "";
}

.index2num {
  position: absolute;
  bottom: 169px;
  width: 73%;
  background: url(http://www.shinva.net/template/default/images/indexnum.png) no-repeat center;
  background-size: 100% 100%;
  color: #fff;
  right: 0;
  padding-right: 210px;
  padding-left: 60px;
  padding-top: 55px;
  padding-bottom: 40px;
}

.index2list {
  width: 25%;
  float: left;
  text-align: center;
}

.index2listp1 {
  font-family: OPPOSans-M;
  font-size: 18px;
}

.index2listp2 {
  font-family: OPPOSans-M;
  font-size: 24px;
}

.index2listp2 span {
  font-size: 50px;
}

.index2listp2 em {
  font-style: normal;
  font-size: 36px;
  vertical-align: bottom;
  font-weight: bold;
  margin-right: 0.5rem;
}
</style>
  
  