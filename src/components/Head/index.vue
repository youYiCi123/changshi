<template>
        <div class="header">
      <div class="topbox">
        <div class="logo">
          <a href="/">
            <i></i>
          </a>
        </div>
        <div class="topnav">
          <ul>
            <li>
              <router-link to="/AboutComponay">关于天一</router-link>
            </li>
            <li>
              <router-link to="/Product">产品中心</router-link>
            </li>
            <li>
              <router-link to="/news">新闻资讯</router-link>
            </li>
            <li>
              <router-link to="/">
                <i></i>
              </router-link>
            </li>
            <li>
              <router-link to="/Serve">技术支持</router-link>
            </li>
            <li>
              <router-link to="/Contact">联系我们</router-link>
            </li>
            <li>
              <router-link to="/Recruit">招贤纳士</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style scoped>

.header {
  height: 1.093rem;
  position: fixed;
  /* background-color: #95cc88; */
  background: rgba(3,24,54,0.5);
  left: 0;
  top: 0px;
  right: 0;
  z-index: 9999;
  transition: all 300ms ease;
}

.topbox .logo {
  display: none;
  position: absolute;
  left: 0.156rem;
  top: 0;
  padding: 0.125rem 0;
}

.topbox .logo a {
  display: block;
}

.topbox .logo i {
  display: block;
  height: 0.531rem;
  width: 2.125rem;
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/%E5%85%AC%E5%8F%B8logo%E7%99%BD.png) center center no-repeat;
  background-size: auto 32px;
  transition: all 200ms ease;
}

.topnav {
  text-align: center;
  line-height: 0.781rem;
  font-size: 0;
  line-height: 0;
}

.topnav ul li {
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.topnav ul li a:hover {
   color: #2f97f2;
}
.topnav ul li a {
  font-weight: 900;
  display: block;
  text-align: center;
  padding: 0 0.781rem;
  font-size: 0.25rem;
  height: 1.093rem;
  line-height: 1.093rem;
  color: #fff;
  transition: all 200ms ease;
}

.topnav ul li:nth-child(1):before {
  display: block;
}

/* .topnav ul li:before {
  display: none;
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.5;
  background: #000;
  position: absolute;
  right: -2px;
  top: 50%;
  margin-top: -2px;
  transition: all 200ms ease;
} */

.topnav ul li a i {
  display: block;
  height: 1.093rem;
  width: 4.687rem;
  background: url(https://example-wang-oss.oss-cn-hangzhou.aliyuncs.com/Blog/image/da7ce7a2e24618568d6070004b5c40a.png) center no-repeat;
  background-size: 100% auto;
  transition: all 200ms ease;
}

.topnav ul li:nth-child(4):before {
  display: block;
}
</style>