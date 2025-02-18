<template>
  <div class="download-container">
    <!-- 左侧：APP 宣传图 -->
    <div class="left-section">
      <img src="../assets/img/app_detail.jpg" alt="仓库工具箱宣传图" />
    </div>

    <!-- 右侧：下载区域 -->
    <div class="right-section">
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
        <img src="../assets//img/qrcode.png" alt="APP 下载二维码" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.download-container {
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #fff8dc, #ffd700);
  color: #333;
  box-sizing: border-box;

  .left-section {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 42%;
      max-height: 80%;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .right-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    .title {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
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
}
</style>
