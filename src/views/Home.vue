<template>
  <div class="home" v-loading="loading">
    <swiper id="swiperBox" v-bind:options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide slide-one">
        <div class="page">
          <h3>福 州 倍 司</h3>
          <p>FuZhou Beisi</p>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <div class="product-intro">
          <h3>产品介绍</h3>
          <p>
            “黄色仓库”不仅是一款便捷的APP，更是一个集H5技术应用、开放生态、友好体验于一体的创新平台。它如同一座桥梁，紧密连接着用户与开发者，致力于打破传统应用市场的壁垒。
          </p>
          <p>
            在“黄色仓库”，用户可以告别手机APP占用内存过大、广告弹窗频繁、功能复杂冗余的困扰，享受更加纯净、高效的使用体验。同时，开发者也能摆脱严格的应用审核要求和高昂的上架成本，在一个更加自由、开放的环境中释放创意，实现价值。
          </p>
          <p>
            “黄色仓库”的诞生，不仅是对当前软件市场痛点的有力回应，更是对未来应用生态的积极探索。它凭借独特的创新理念和无限的潜力，开启了H5应用新时代，为软件行业的可持续发展注入新的活力和动力。
            “黄色仓库”不仅是一款便捷的APP，更是一个集H5技术应用、开放生态、友好体验于一体的创新平台。
          </p>
          <div class="logo-container">
            <img src="../assets/img/logo_2.png" alt="黄色仓库 Logo" class="logo" />
            <div class="download-links">
              <a href="https://putianikun.cn/hsck" class="btn download-btn">
                <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="product-intro">
          <h3>AI_BOX</h3>
          <p>
            AI_BOX 是一款强大的 AI 调用平台，集成了 ChatGPT、Claude、Gemini 等多种主流 AI 模型，旨在为用户提供高效、便捷的智能交互体验。
          </p>

          <p>
            通过 AI_BOX，用户可以随时切换不同 AI 模型，获取最符合需求的回答，无论是内容创作、代码生成、学习辅助，还是数据分析、智能客服，都能轻松应对。<br>
            无需繁琐的配置，即刻连接全球领先的 AI 技术，享受更精准、更智能的对话体验。
          </p>

          <p>
            AI_BOX 采用开放式架构，支持 API 调用与自定义集成，适用于个人开发者、企业应用及科研探索。<br>
            其灵活的插件机制，让用户能自由扩展 AI 功能，打造个性化的智能助手。
          </p>

          <div class="logo-container">
            <img src="../assets/img/logo_aibox.png" alt="AI_BOX Logo" class="logo" />
            <div class="download-links">
              <a href="https://putianikun.cn/hsck" class="btn download-btn2">
                <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
              </a>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      loading: false,
      swiperOption: {
        direction: "vertical",
        grabCursor: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        height: window.innerHeight - 60,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        resistanceRatio: 0,
        observeParents: true,
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
};
</script>

<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
.swiper-slide {
  font-size: 24px;
  // text-align: center;
  // line-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .page {
    text-align: center;
    height: 200px;
    overflow: hidden;

    h3,
    p {
      font-size: 60px;
      font-weight: bold;
      //黑色描边
      -webkit-text-stroke: 1px black;

      //文字阴影

      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

      color: #fff;
    }

    p {
      font-size: 45px;
    }
  }

  .slogan {
    text-align: center;
    font-size: 50px;
    color: #fff;
    padding: 30px 0;
  }
}

.slide-one {
  background: url(../assets/img/Fuzhou_Taixi_CBD.jpg) no-repeat center;
  background-size: cover;
}

.slide-two {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #fff8dc, #ffd700);
  color: #333;
  box-sizing: border-box;
}

.slide-three {
  display: flex;
  height: 100vh;
  // 白灰渐变
  background: linear-gradient(135deg, #f5f5f5, #908989);
  color: #333;
  box-sizing: border-box;
}


.product-intro {
  padding: 30px;
  color: #333;
  text-align: left;

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #222;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .logo-container {
    text-align: center;
    margin-top: 30px;

    .logo {
      width: 450px;
      /* 根据你的需求调整宽度 */
      height: auto;
    }
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

    .download-btn2 {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 15px 30px;
      background-color: #9f9a9a;
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
}

.order {
  order: -1;
}

.order-img {
  order: 1;
}
</style>