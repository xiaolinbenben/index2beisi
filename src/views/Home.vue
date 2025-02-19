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
          </p>
          <div class="logo-container">
            <img src="../assets/img/logo_2.png" alt="黄色仓库 Logo" class="logo" />
            <!-- 下载按钮 -->
            <div class="download-links">
              <router-link to="/hsck" class="btn download-btn">
                <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
              </router-link>
            </div>

          </div>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">

        <div class="product-intro">
          <h3>产品介绍</h3>
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

          <p>
            AI_BOX 的诞生，不仅提升了 AI 应用的可及性，也推动了多模型智能交互的发展。它让 AI 更加贴近生活，为 AI 生态的构建带来无限可能。
          </p>

          <div class="logo-container">
            <img src="../assets/img/logo_aibox.png" alt="黄色仓库 Logo" class="logo" />

            <div class="download-links">
              <router-link to="/ai_box" class="download-btn">
                <img src="../assets/img/sanjiao.png" alt="下载图标" /> 前往下载
              </router-link>
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
      caseList: [],
      newsList: [],
      swiperOption: {
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          // 监听滑动切换事件，返回swiper对象
          slideChange: () => {
            let swiper = this.$refs.mySwiper.swiper;
            //console.log(swiper.activeIndex); //滑动打印当前索引
            if (swiper.activeIndex === this.list.length - 1) {
              //到最后一个加载更多数据
              let newList = [];
              let listLength = this.list.length;
              for (let i = 0; i < 10; i++) {
                newList.push(listLength + i);
              }
              this.list = this.list.concat(newList);
            }
          }
        }
      }
    };
  },
  created() { },
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
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
  }
}

.order {
  order: -1;
}

.order-img {
  order: 1;
}
</style>