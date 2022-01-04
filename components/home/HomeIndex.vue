<template>
  <div class="wrapper home-wrapper">
    <div class="home-main">
      <div class="home-main_inner">
        <div class="home-top">
          <div class="top-avater"></div>
          <div class="top-name">SMILE</div>
          <div class="top-motto">The ideal of life is for ideal life</div>
        </div>
        <hr class="smilex-hr home-hr" />
        <div class="home-middle">
          <div class="middle-text">######</div>
          <!-- 期望奇迹，不如成为奇迹 -->
        </div>
        <div class="home-enter">
          <div class="smilex-btn">
            <span>博客</span>
          </div>
          <div class="smilex-btn">
            <span>计划</span>
          </div>
          <div class="smilex-btn">
            <span>工具</span>
          </div>
        </div>
        <div class="home-outer-enter">
          <div class="smilex-icon">bilibili</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIndex',
}
</script>

<style lang="scss" scoped>
$inner-width: 600px;

.home-wrapper {
  background: url('~static/images/home/home-back.jpg') center center / cover
    no-repeat;
  color: #fff;

  & .home-main {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    &_inner {
      margin: 0 auto;
      width: $inner-width;
      display: flex;
      text-align: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  .home-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: aquatico-rg2;
    .top-avater {
      border-radius: 100%;
      width: 150px;
      height: 150px;
      overflow: hidden;
      background: url('~static/images/home/home-avater.jpg') center center /
        cover no-repeat;
      border: 1px solid #999;
    }
    .top-name {
      font-size: $S-Font-Head24-Size;
      font-weight: bolder;
    }
    .top-motto {
      font-size: $S-Font-Head16-Size;
    }
  }
  .home-enter {
    margin: 10px auto;
  }
  .home-hr {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
}
</style>
