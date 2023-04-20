<template>
  <div class="home-wrapper">
    <div class="home-main">
      <div class="home-main_inner">
        <div class="home-top">
          <div
            class="top-avater-box"
            @mousemove="avaterTouch = true"
            @mouseout="avaterTouch = false"
          >
            <div
              class="top-avater-front"
              :class="avaterTouch ? 'top-avater-front_hover' : ''"
            ></div>
            <div class="top-avater-back"></div>
          </div>
          <div class="top-name">SMILE</div>
          <div class="top-motto">The ideal of life is for ideal life</div>
        </div>
        <hr class="smilex-hr home-hr" />
        <div class="home-middle">
          <div class="middle-text">期望奇迹，不如成为奇迹</div>
        </div>
        <div class="home-enter">
          <sx-button @click.native="navRoute('/blog')">博客</sx-button>
          <sx-button @click.native="navRoute('/plan')">计划</sx-button>
          <sx-button @click.native="navRoute('/tool')">工具</sx-button>
        </div>
        <div class="home-outer-enter">
          <sx-icon
            iconType="github"
            @click.native="openWebsite('https://github.com/smileluck')"
          ></sx-icon>
          <!-- <sx-icon iconType="bilibili"></sx-icon> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SxIcon from '../smilex/SxIcon.vue'
import SxButton from '../smilex/SxButton.vue'
export default {
  components: { SxIcon, SxButton },
  name: 'HomeIndex',
  data: () => ({
    avaterTouch: false,
  }),
  methods: {
    navRoute(path) {
      if (path != '/blog') {
        this.$alert({
          title: '暂未开发',
        })
        return
      }
      this.$router.push({
        path: path,
      })
    },
    openWebsite(path) {
      window.open(path, '_blank')
    },
    avaterMouseMove() {},
  },
}
</script>

<style lang="scss" scoped>
$inner-width: 600px;
.home-wrapper { 
  background: url('~static/images/home/home-back3.jpg')
    center center / cover no-repeat;
  color: #fff;
  width: 100%;
  height: 100%;

  .home-main {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: $inner-width;
    max-width: 80%;

    &_inner {
      margin: 0 auto;
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
    .top-avater-box {
      width: 150px;
      height: 150px;
      cursor: pointer;
      position: relative;
      .top-avater-front {
        border-radius: 100%;
        border: 1px solid #999;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url('~static/images/home/home-avater.jpg') center center /
          cover no-repeat;
        // background-color: #999;
        transition: all 0.3s;
        //设置元素被查看位置的视图
        perspective: 150;
        // backface-visibility: hidden;
        transform-origin: right;
        position: absolute;
        z-index: 3;
        &_hover {
          transform: rotateY(180deg);
        }
      }
      .top-avater-back {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url('~static/images/home/home-back2.jpg') left center /
          cover no-repeat;
        position: absolute;
        z-index: 2;
      }
    }
    .top-name {
      font-size: $S-Font-Size-Head24;
      font-weight: bolder;
    }
    .top-motto {
      font-size: $S-Font-Size-Head16;
    }
  }
  .home-enter {
    margin: 10px auto;
  }
  .home-hr {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
  .home-outer-enter {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
