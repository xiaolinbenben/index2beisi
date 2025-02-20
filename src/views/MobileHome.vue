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
            “黄色仓库”不仅是一款便捷的APP，更是一个集H5技术应用、开放生态、友好体验于一体的创新平台。它如同一座桥梁，紧密连接着用户与开发者，致力于打破传统应用市场的壁垒。
          </p>
          <p>
            在“黄色仓库”，用户可以告别手机APP占用内存过大、广告弹窗频繁、功能复杂冗余的困扰，享受更加纯净、高效的使用体验。同时，开发者也能摆脱严格的应用审核要求和高昂的上架成本，在一个更加自由、开放的环境中释放创意，实现价值。
          </p>
          <p>
            “黄色仓库”的诞生，不仅是对当前软件市场痛点的有力回应，更是对未来应用生态的积极探索。它凭借独特的创新理念和无限的潜力，开启了H5应用新时代，为软件行业的可持续发展注入新的活力和动力。
          </p>

          <!-- 下载区域 -->
          <div class="mobile-logo-container">
            <img src="../assets/img/logo_2.png" alt="黄色仓库 Logo" class="mobile-logo" />
            <router-link to="/mobiledownload" class="mobile-download-btn">
              <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
            </router-link>
          </div>
        </div>
      </div>

      <!-- 第三屏 -->
      <div class="mobile-slide mobile-slide-three">
        <div class="mobile-product-intro">
          <h3>产品介绍</h3>
          <p>
            AI_BOX 是一款强大的 AI 调用平台，集成了 ChatGPT、Claude、Gemini 等多种主流 AI 模型，旨在为用户提供高效、便捷的智能交互体验。
          </p>
          <p>
            通过 AI_BOX，用户可以随时切换不同 AI 模型，获取最符合需求的回答，无论是内容创作、代码生成、学习辅助，还是数据分析、智能客服，都能轻松应对。
          </p>
          <p>
            AI_BOX 采用开放式架构，支持 API 调用与自定义集成，适用于个人开发者、企业应用及科研探索。其灵活的插件机制，让用户能自由扩展 AI 功能，打造个性化的智能助手。
          </p>
          <p>
            AI_BOX 的诞生，不仅提升了 AI 应用的可及性，也推动了多模型智能交互的发展。它让 AI 更加贴近生活，为 AI 生态的构建带来无限可能。
          </p>

          <!-- 下载区域 -->
          <div class="mobile-logo-container">
            <img src="../assets/img/logo_aibox.png" alt="AI_BOX Logo" class="mobile-logo" />
            <router-link to="/ai_box" class="mobile-download-btn">
              <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
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
  mounted() {
    this.initHorizontalScroll();
  },
  methods: {
    initHorizontalScroll() {
      const container = this.$refs.horizontalContainer;
      let currentIndex = 0;
      const slides = container.children;
      const totalSlides = slides.length;
      let isScrolling = false;

      // 自动翻页逻辑
      const autoScrollInterval = setInterval(() => {
        if (!isScrolling) {
          currentIndex = (currentIndex + 1) % totalSlides;
          container.scrollTo({
            left: currentIndex * window.innerWidth,
            behavior: 'smooth'
          });
        }
      }, 5000); // 每 5 秒翻页一次

      // 手动翻页逻辑
      let startX = 0;
      let isDragging = false;

      // 监听 touch 事件
      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        isDragging = true;
      });

      container.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const deltaX = startX - currentX;

        if (Math.abs(deltaX) > 50) {
          isScrolling = true;
          if (deltaX > 0 && currentIndex < totalSlides - 1) {
            currentIndex++;
          } else if (deltaX < 0 && currentIndex > 0) {
            currentIndex--;
          }
          container.scrollTo({
            left: currentIndex * window.innerWidth,
            behavior: 'smooth'
          });
          startX = currentX;
          isDragging = false;
          setTimeout(() => {
            isScrolling = false;
          }, 500); // 防止快速滚动
        }
      });

      container.addEventListener('touchend', () => {
        isDragging = false;
      });

      // 监听 wheel 事件
      container.addEventListener('wheel', (e) => {
        if (isScrolling) return;

        isScrolling = true;
        const delta = e.deltaX > 0 ? 1 : -1;

        if (delta > 0 && currentIndex < totalSlides - 1) {
          currentIndex++;
        } else if (delta < 0 && currentIndex > 0) {
          currentIndex--;
        }

        container.scrollTo({
          left: currentIndex * window.innerWidth,
          behavior: 'smooth'
        });

        setTimeout(() => {
          isScrolling = false;
        }, 500); // 防止快速滚动
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
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

.mobile-slide-two,
.mobile-slide-three {
  width: 100%;
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
      font-size: 24px;
      margin-bottom: 20px;
      color: #222;
    }

    p {
      font-size: 16px;
      line-height: 1.6;
      margin-bottom: 15px;
      color: #333;
      text-align: justify;
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