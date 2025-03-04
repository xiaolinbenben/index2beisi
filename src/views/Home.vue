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
          <div class="logo-container">
            <img src="../assets/img/logo_2.png" alt="黄色仓库 Logo" class="logo" />
            <div class="content-box">
              <h1 style="font-size: 50px;">黄色仓库</h1>
              <p>更友好、更开放、更便捷</p>
              <p>的网页端应用平台</p>
              <div class="download-links">
                <a href="https://putianikun.cn/hsck" class="btn download-btn">
                  <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="product-intro">
          <div class="logo-container">
            <img src="../assets/img/logo_aibox.png" alt="AI_BOX Logo" class="logo" />
            <div class="content-box">
              <h1>AI Box</h1>
              <p>一个集成主流AI大模型与</p>
              <p>AI应用的APP</p>
              <div class="download-links">
                <a href="https://putianikun.cn/hsck" class="btn download-btn2">
                  <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
                </a>
              </div>
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
      font-size: 80px;
      font-weight: bold;

      //文字阴影

      text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

      color: #fff;
    }

    p {
      font-size: 60px;
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
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  flex-direction: column; /* 内容上下排列 */
  padding: 30px;
  color: #333;
  text-align: center;

  h3 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #222;
  }

  p {
    font-size: 30px;
    line-height: 1;
    margin-bottom: 15px;
  }

  .logo-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    gap: 60px; /* 图片和内容之间的间距 */
    width: 100%; 
    max-width: 800px; 
    margin: 0 auto; /* 水平居中 */
  }

   .logo {
    width: 200px; 
    height: auto;
  }
    .content-box {
    display: flex;
    flex-direction: column; /* 内容上下排列 */
    align-items: flex-start; /* 内容左对齐 */
    text-align: left;

    h1 {
      font-size: 60px;
      margin-bottom: 10px;
    }

    p {
      font-size: 18px;
      margin-bottom: 10px;
    }


    .download-links {
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
        margin-top:6px;
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
}

.order {
  order: -1;
}

.order-img {
  order: 1;
}
</style>