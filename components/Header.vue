<template>
  <header
    class="layout-header"
    :class="{ 'layout-header-small': $store.state.smallHeader }"
  >
    <div class="header" :class="{ 'header-fixed': headerFixed }">
      <div class="container">
        <div class="header-logo">
          <img
            :src="
              headerFixed
                ? require('~/static/images/logo.png')
                : require('~/static/images/logo2.png')
            "
            alt="笑笑庄"
          />
        </div>
        <div class="header-toggle"></div>
        <div class="header-collapse">
          <ul class="header-list">
            <li
              class="header-list-item"
              v-for="item in sectionList"
              :key="item.id"
              @click="clickHandle(item)"
            >
              <span class="item-link">{{ item.sectionName }}</span>
              <div class="header-dropdown">
                <ul class="header-dropdown-list">
                  <li
                    class="header-dropdown-item"
                    v-for="child in item.children"
                    :key="child.id"
                    @click.stop="clickHandle(child)"
                  >
                    <span>{{ child.sectionName }}</span>
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
      sectionList: [],
    }
  },
  mounted() {
    this.headerScroll()
    if (document) {
      document.addEventListener('scroll', this.headerScroll)
    }
    this.getSection()
  },
  beforeDestroy() {
    if (document) {
      document.removeEventListener('scroll', this.headerScroll)
    }
  },
  methods: {
    clickHandle(item) {
      if (item.type == 2) {
        return
      }
      switch (item.type) {
        case 1:
          this.$router.push({
            path: '/blog',
            query: { sectionId: item.id },
          })
          break
        case 2:
          break
        case 3:
          this.$router.push({
            path: item.routeUrl,
          })
          break
      }
    },
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
    getSection() {
      this.$axios
        .get(`/open/blog/${this.$store.state.tenantId}/section/list`)
        .then((res) => {
          if (res.success) {
            const list = dynamicTree(res.data, 0)
            console.log('list', list)
            this.sectionList = list
          }
        })
    },
  },
}
// 数组递归转换树目录结构
const dynamicTree = (list, pid) => {
  const arr = []
  list.forEach((item) => {
    if (item.parentId == pid) {
      const children = dynamicTree(list, item.id)
      if (children.length != 0) {
        item.children = children
      }
      arr.push(item)
    }
  })
  return arr
}
</script>

<style lang="scss" scoped>
.layout-header {
  &:after {
    background: url('https://smile-sxd.oss-cn-shenzhen.aliyuncs.com/smilex/images/common/wallpaper/home-back.jpg') center center / cover
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
    z-index: 91;
  }
  &-logo {
    width: 100px;
    height: 100%;
    cursor: pointer;
    text-align: center;
    > img {
      width: 100%;
      height: 100%;
    }
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
      width: 100px;
      text-align: center;
      .item-link {
        display: block;
        padding: 0 10px;
        width: 100%;
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
