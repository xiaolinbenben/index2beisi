<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="logo">
          <img src="./assets/img/logo.png" alt />
        </div>
        <el-menu :default-active="defaultActive" class="el-menu-demo" mode="horizontal" @select="handleSelect"
          :router="router">
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/welcome">加入我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>

      <!-- ICP备案 -->
      <div class="footer">
        <div class="footer-content">
          <a href=" https://beian.miit.gov.cn/">© 2025 福州倍司网络科技有限公司 | ICP 备案号: 闽ICP备2024077327号</a>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: this.$route.path,
      isShow: false
    };
  },
  methods: {
    handleSelect(key) {
      this.isShow = this.defaultActive != key;
      window.console.log(this.isShow);
    }
  },
  watch: {
    // 监听路由变化，动态更新 defaultActive
    $route(to) {
      this.defaultActive = to.path; // 路由变化时更新激活菜单项
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: #333;
}

html,
body {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin: 0 auto;
  //background-color: #fff;

  .logo {
    width: 240px;
    padding: 10px;

    img {
      width: 100%;
      line-height: 50px;
    }
  }
}

.footer {
  z-index: 9999;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  padding: 8px 15px;
  border-radius: 8px;
  text-align: center;

  .footer-content {
    font-size: 14px;
    color: #333;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}

.el-main {
  padding: 0 !important;
}
</style>
