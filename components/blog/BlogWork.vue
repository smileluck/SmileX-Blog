<template>
  <div class="blog-panel blog-work">
    <p class="blog-panel-name">作品</p>
    <div class="blog-work-list">
      <div class="blog-work-item">
        <div class="blog-work-info">
          <div class="blog-work-info_name">
            SmileX-Blog
            <span class="name2">博客</span>
          </div>
          <sx-icon
            class="icon"
            iconType="github"
            @click.native="
              openWebsite('https://github.com/smileluck/SmileX-Blog')
            "
          ></sx-icon>
        </div>
        <div class="blog-work-content">
          个人博客系统，搭配 SmileX-Boot 后台管理系统使用。
        </div>
      </div>
      <div class="blog-work-item">
        <div class="blog-work-info">
          <div class="blog-work-info_name">
            SmileX-Boot
            <span class="name2">后台管理系统</span>
          </div>
          <sx-icon
            class="icon"
            iconType="github"
            @click.native="
              openWebsite('https://github.com/smileluck/SmileX-boot')
            "
          ></sx-icon>
        </div>
        <div class="blog-work-content">
          一款自主研发的后台管理系统，支持SASS。
        </div>
      </div>
      <div class="blog-work-item">
        <div class="blog-work-info">
          <div class="blog-work-info_name">
            SmileX-Boot-AdminUi
            <span class="name2">后台管理系统面板</span>
          </div>
          <sx-icon
            class="icon"
            iconType="github"
            @click.native="
              openWebsite('https://github.com/smileluck/SmileX-Admin-Vue3')
            "
          ></sx-icon>
        </div>
        <div class="blog-work-content">
          一款自主研发的后台管理系统UI，采用 Vue3 + ElementPlus 开发。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SxIcon from '../smilex/SxIcon.vue'
export default {
  components: {
    SxIcon,
  },
  methods: {
    openWebsite(path) {
      window.open(path, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-work {
  &-list {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
  &-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    // margin-top: 4px;
    // margin-bottom: 10px;
    flex-direction: column;
    padding: 16px 0;
    border-bottom: 1px solid $S-Border-Color-Gray;
  }
  &-info {
    display: flex;
    // align-items: center;
    font-size: $S-Font-Size-Base;
    justify-content: space-between;
    .icon {
      width: 20px;
      height: 20px;
      // display: inline-block;
      // flex: 1;
      text-align: right;
      // margin-left: 10px;
    }
    &_name {
      display: inline-block;
      @include text-ellipsis(1);
      .name2 {
        display: inline-block;
        color: $S-Font-Color-Gray;
        margin-left: 10px;
      }
    }
  }
  &-content {
    font-size: $S-Font-Size-Base;
    color: $S-Font-Color-Gray-Deep;
    @include text-ellipsis(2);
  }
}
</style>
