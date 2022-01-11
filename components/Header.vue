<template>
  <header class="layout-header">
    <div class="header" :class="{ 'header-fixed': headerFixed }">
      <div class="container">
        <div class="header-logo"></div>
        <div class="header-toggle"></div>
        <div class="header-collapse">
          <ul class="header-list">
            <li class="header-list-item">
              <span class="item-link">BLOG居</span>
            </li>
            <li class="header-list-item">
              <span class="item-link">探索世界</span>
              <div class="header-dropdown">
                <ul class="header-dropdown-list">
                  <li class="header-dropdown-item">
                    <span>技术之旅</span>
                  </li>
                  <li class="header-dropdown-item">
                    <span>生活技巧</span>
                  </li>
                  <li class="header-dropdown-item">
                    <span>学点厨艺</span>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: function () {
    return {
      headerFixed: false,
    }
  },
  mounted() {
    this.headerScroll();
    if (document) {
      document.addEventListener('scroll', this.headerScroll)
    }
  },
  beforeDestroy() {
    if (document) {
      document.removeEventListener('scroll', this.headerScroll)
    }
  },
  methods: {
    headerScroll() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop >= 100) {
        if (!this.headerFixed) {
          this.headerFixed = true
        }
      } else {
        this.headerFixed = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.layout-header {
  &:after {
    background: url('~static/images/home/home-back.jpg') center center / cover
      no-repeat;
    background-position: 50% 70%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
}
.header {
  @include no-select;
  // overflow: hidden;
  height: $S-Nav-Height;
  z-index: 11;

  color: #fff;
  .container {
    height: 100%;
    z-index: 11;
  }
  &-logo {
    width: 100px;
    background-color: blue;
    height: 100%;
    cursor: pointer;
  }
  &-collapse {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  &-toggle {
    display: none;
  }
  &-collapse {
    width: 100%;
    position: relative;
    height: 100%;
  }
  &-list {
    width: 100%;
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &-item {
      cursor: pointer;
      height: 100%;
      // padding: 22px 10px;
      box-sizing: border-box;
      text-align: center;
      display: flex;
      align-items: center;
      font-weight: 600;
      .item-link {
        display: block;
        padding: 0 10px;
      }
      &:hover {
        background: rgb(255 255 255 / 15%);
        .header-dropdown {
          display: flex;
        }
      }
    }
  }
  &-dropdown {
    width: 120px;
    position: absolute;
    box-sizing: border-box;
    display: block;
    top: 100%;
    background-color: #fff;
    color: #000;
    display: none;
    flex-direction: column;
    border-radius: 5px;
    &-item {
      display: flex;
      align-items: center;
      height: $S-Nav-Height-child;
      text-align: center;
      justify-content: center;
      &:hover {
        background: rgba(0, 0, 0, 15%);
      }
    }
  }
}

.header-fixed {
  box-shadow: inset 0 0 10px rgb(255 255 255 / 80%);
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 90%);
  box-shadow: inset 0 0 2px hsl(0deg 0% 77% / 82%);
  background: hsla(0, 0%, 100%, 0.363);
  -webkit-backdrop-filter: saturate(200%) blur(30px);
  backdrop-filter: saturate(200%) blur(30px);
  // filter: saturate(200%) blur(30px);
  color: #000;
  animation: header-fixed-anim 0.5s ease-in-out;
}

@include keyframes(header-fixed-anim) {
  from {
    top: -$S-Nav-Height;
  }
  to {
    top: 0;
  }
}
</style>
