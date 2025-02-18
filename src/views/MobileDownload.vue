<template>
  <div class="mobile-download">
    <!-- 顶部导航栏 -->
    <div class="mobile-header">
      <div class="mobile-logo">
        <img src="../assets/img/logo.png" alt="黄色仓库 Logo" />
      </div>
      <div class="mobile-nav">
        <router-link to="/mobile" class="mobile-nav-item">首页</router-link>
        <router-link to="/download" class="mobile-nav-item">下载APP</router-link>
      </div>
    </div>

    <!-- 下载内容区域 -->
    <div class="mobile-download-content">
      <h1 class="title">📦 仓库工具箱</h1>
      <p class="description">减少内存占用，屏蔽烦人广告，让手机更流畅！</p>

      <!-- 下载按钮 -->
      <div class="download-links">
        <a href="https://beisi.tech/hsck/hsck_v1.1.3.apk" target="_blank" class="btn download-btn">
          <img src="../assets/img/sanjiao.png" alt="下载图标" /> 立即下载
        </a>
      </div>

      <!-- 二维码 -->
      <div class="qr-code">
        <p>📲 扫码下载</p>
        <img src="../assets/img/qrcode.png" alt="APP 下载二维码" />
      </div>
    </div>

    <!-- 手机端底部信息 -->
    <div class="mobile-footer">
      <div class="mobile-footer-content">
        <a href="https://beian.miit.gov.cn/">© 2025 黄色仓库工具箱 | ICP 备案号: 闽ICP备2024077327号</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileDownload",
};
</script>

<style lang="scss" scoped>
.mobile-download {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(135deg, #fff8dc, #ffd700);
}

.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  .mobile-logo {
    img {
      height: 40px;
      width: auto;
    }
  }

  .mobile-nav {
    display: flex;
    gap: 20px;

    .mobile-nav-item {
      text-decoration: none;
      color: #333;
      font-size: 16px;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: #ffcc00;
      }
    }
  }
}

.mobile-download-content {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 20px; // 增加顶部 padding 避免内容被导航栏遮挡
  box-sizing: border-box;

  .title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #333;
  }

  .description {
    font-size: 18px;
    color: #555;
    margin-bottom: 30px;
    text-align: center;
  }

  .download-links {
    margin: 20px 0;

    .download-btn {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 15px 30px;
      background-color: #ffcc00;
      border-radius: 12px;
      text-decoration: none;
      color: #000;
      font-weight: bold;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-5px);
      }

      img {
        width: 28px;
        height: 28px;
      }
    }
  }

  .qr-code {
    margin-top: 30px;
    text-align: center;

    p {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 500;
      color: #333;
    }

    img {
      width: 180px;
      height: 180px;
      border: 5px solid #fff;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
      transition: transform 0.3s;

      &:hover {
        transform: rotate(5deg) scale(1.1);
      }
    }
  }
}

.mobile-footer {
  width: 100%;
  background-color: #ffd700;
  padding: 15px 0;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1000;

  .mobile-footer-content {
    font-size: 12px;
    color: #333;
    padding: 0 10px; // 增加左右 padding，避免文字贴边
  }
}

@media (max-width: 480px) {
  .mobile-header {
    height: 50px;
    padding: 0 10px;

    .mobile-logo {
      img {
        height: 30px;
      }
    }

    .mobile-nav {
      gap: 10px;

      .mobile-nav-item {
        font-size: 14px;
      }
    }
  }

  .mobile-download-content {
    .title {
      font-size: 28px;
    }

    .description {
      font-size: 16px;
    }

    .download-btn {
      font-size: 14px;
      padding: 10px 20px;
    }

    .qr-code {
      img {
        width: 150px;
        height: 150px;
      }
    }
  }

  .mobile-footer {
    padding: 10px 0;

    .mobile-footer-content {
      font-size: 10px;
    }
  }
}
</style> 