<template>
  <div class="mobile-home">
    <!-- 顶部导航栏 -->
    <div class="mobile-header">
      <div class="mobile-logo">
        <img src="../assets/img/logo.png" alt="黄色仓库 Logo" />
      </div>
      <div class="mobile-nav">
        <router-link to="/mobile" class="mobile-nav-item">首页</router-link>
        <router-link to="/welcome" class="mobile-nav-item">加入我们</router-link>
      </div>
    </div>

    <!-- 第一屏 -->
    <div class="mobile-slide mobile-slide-one">
      <div class="mobile-page">
        <h3>福州倍司</h3>
        <p>FuZhou Beisi</p>
      </div>
    </div>

    <!-- 第二屏及其之后的左右翻页容器 -->
    <div class="horizontal-scroll-container" ref="horizontalContainer">
      <!-- 第二屏 -->
      <div class="mobile-slide mobile-slide-two">
        <div class="mobile-product-intro">
          <h3>产品介绍</h3>
          <p>
            <strong>"黄色仓库"</strong>是一款创新的H5应用平台，<strong>轻量便捷</strong>，无需安装，提供<strong>纯净高效</strong>的使用体验。
          </p>
          <p>
            告别传统APP的<strong>内存占用大</strong>、<strong>广告弹窗多</strong>等问题，让您的手机运行更流畅。
          </p>
          <p>
            开发者也能在<strong>开放自由</strong>的环境中快速发布应用，<strong>降低开发成本</strong>，实现创意价值。
          </p>

          <!-- 下载区域 -->
          <div class="mobile-logo-container">
            <img src="../assets/img/logo_2.png" alt="黄色仓库 Logo" class="mobile-logo" />
            <a href="https://putianikun.cn/hsck" target="_blank" class="mobile-download-btn">
              <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
            </a>
          </div>
        </div>
      </div>

      <!-- 第三屏 -->
      <div class="mobile-slide mobile-slide-three">
        <div class="mobile-product-intro">
          <h3>产品介绍</h3>
          <p>
            <strong>AI BOX</strong> 是一款强大的AI调用平台，集成<strong>ChatGPT</strong>、<strong>DeepSeek</strong>等主流AI模型。
          </p>
          <p>
            提供<strong>智能对话</strong>、<strong>知识问答</strong>、<strong>专业分析</strong>等功能，满足多种场景需求。
          </p>
          <p>
            支持<strong>模型切换</strong>和<strong>参数自定义</strong>，帮助用户提升工作效率，降低操作成本。
          </p>

          <!-- 下载区域 -->
          <div class="mobile-logo-container">
            <img src="../assets/img/logo_aibox.png" alt="AI_BOX Logo" class="mobile-logo" />
            <router-link to="/ai_box" class="mobile-download-btn">
              <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往体验
            </router-link>
          </div>
        </div>
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
  name: "MobileHome",
  data() {
    return {
      currentIndex: 0,
      autoScrollInterval: null,
      isScrolling: false
    };
  },
  mounted() {
    this.initHorizontalScroll();
  },
  beforeUnmount() {
    this.stopAutoScroll();
  },
  methods: {
    initHorizontalScroll() {
      const container = this.$refs.horizontalContainer;
      const slides = container.children;
      const totalSlides = slides.length;

      // 自动翻页逻辑
      this.autoScrollInterval = setInterval(() => {
        if (!this.isScrolling) {
          this.currentIndex = (this.currentIndex + 1) % totalSlides;
          this.scrollToSlide(container, this.currentIndex);
        }
      }, 5000); // 每 5 秒翻页一次

      // 手机触控翻页逻辑
      let startX = 0;
      let isDragging = false;

      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
        this.isScrolling = true; // 用户开始操作时暂停自动翻页
      });

      container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;

        if (Math.abs(deltaX) > 50) {
          if (deltaX > 0) {
            this.currentIndex = Math.min(this.currentIndex + 1, totalSlides - 1); // 右翻
          } else {
            this.currentIndex = Math.max(this.currentIndex - 1, 0); // 左翻
          }
          this.scrollToSlide(container, this.currentIndex);
          startX = currentX;
          isDragging = false;
        }
      });

      container.addEventListener('touchend', () => {
        isDragging = false;
        setTimeout(() => {
          this.isScrolling = false; // 用户操作结束后恢复自动翻页
        }, 1000);
      });
    },
    stopAutoScroll() {
      if (this.autoScrollInterval) {
        clearInterval(this.autoScrollInterval);
      }
    },
    scrollToSlide(container, index) {
      container.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.mobile-home {
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
}

.mobile-slide {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 20px 20px;
  box-sizing: border-box;
}

.horizontal-scroll-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}

.mobile-slide-two,
.mobile-slide-three {
  width: 100vw;
  height: 100vh;
  flex-shrink: 0;
  scroll-snap-align: start;
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

.mobile-slide-one {
  background: url(../assets/img/Fuzhou_Taixi_CBD.jpg) no-repeat center;
  background-size: cover;

  .mobile-page {
    text-align: center;
    h3, p {
      font-size: 60px;
      font-weight: bold;
      -webkit-text-stroke: 1px black;
      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
      color: #fff;
    }

    p {
      font-size: 45px;
    }
  }
}

.mobile-slide-two,
.mobile-slide-three {
  background: linear-gradient(135deg, #fff8dc, #ffd700);

  .mobile-product-intro {
    max-width: 100%;
    h3 {
      font-size: 28px;
      margin-bottom: 20px;
      color: #222;
    }

    p {
      font-size: 18px;
      line-height: 1.8;
      margin-bottom: 20px;
      color: #333;
      text-align: justify;
    }

    strong {
      font-weight: bold;
      color: #000;
    }
  }

  .mobile-logo-container {
    text-align: center;
    margin-top: 20px;

    .mobile-logo {
      width: 80%;
      max-width: 300px;
      height: auto;
      margin-bottom: 20px;
    }

    .mobile-download-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 12px 24px;
      background-color: #ffcc00;
      border-radius: 8px;
      text-decoration: none;
      color: #000;
      font-size: 16px;
      font-weight: bold;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-3px);
      }

      img {
        width: 20px;
        height: 20px;
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

  .mobile-slide-one {
    .mobile-page {
      h3, p {
        font-size: 28px;
      }
    }
  }

  .mobile-slide-two,
  .mobile-slide-three {
    .mobile-product-intro {
      h3 {
        font-size: 20px;
      }

      p {
        font-size: 14px;
      }
    }

    .mobile-download-btn {
      font-size: 14px;
      padding: 10px 20px;
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