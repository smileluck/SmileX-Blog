<template>
  <div class="smilex-article">
    <div class="smilex-article-img">
      <a href="#" title="测试title">
        <img src="~/static/images/home/home-back.jpg" alt="测试title" />
      </a>
    </div>
    <div class="smilex-article-info">
      <div class="smilex-article-info-top">
        <p class="smilex-article-info_type">
          <a href="#" title="查看<JAVA>分类下的所有文件">Java</a>
        </p>
        <div class="smilex-article-info_title">java8基础总结</div>
        <div class="smilex-article-info_abstract">
          阿斯蒂芬卡萨丁开发了撒旦弗利萨打开；弗利萨打开；劳动法卡；老师的疯狂拉升的看法‘奥斯卡嗲放阿萨阿斯蒂芬卡萨丁开发了撒旦弗利萨打开；弗利萨打开；劳动法卡；老师的疯狂拉升的看法‘奥斯卡嗲放阿萨阿斯蒂芬卡萨丁开发了撒旦弗利萨打开；弗利萨打开；劳动法卡；老师的疯狂拉升的看法‘奥斯卡嗲放阿萨阿斯蒂芬卡萨丁开发了撒旦弗利萨打开；弗利萨打开；劳动法卡；老师的疯狂拉升的看法‘奥斯卡嗲放阿萨
        </div>
      </div>
      <div class="smilex-article-info-bottom">
        <div class="smilex-article-info_date">Post on 2021-01-01</div>
        <div class="smilex-article-info_viewer">
          <div class="smilex-article-viewer_pcount">14</div>
          <div class="smilex-article-viewer_pcomment">10</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.smilex-article {
  margin-bottom: 20px;
  width: 100%;
  padding: $S-Box-Padding;
  box-sizing: border-box;
  // border: 1px solid #555555;
  box-shadow: $S-Box-Shadow;
  border-radius: $S-Box-Border-Radius;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 240px;
  @include transition(all 0.3s);
  &:hover {
    box-shadow: $S-Box-Shadow-Hover;
  }
  &-img {
    @include img-box(37%);
  }
  &-info {
    width: 61%;
    margin-left: 16px;
    height: 100%;
    position: relative;
    &-top {
      height: 60%;
    }
    &-bottom {
      padding: 14px 0 0 0;
      // height: 40%;
      border-top: 1px solid $S-Border-Color-Gray;
      font-size: $S-Font-Size-Notice;
      bottom: 0;
      position: absolute;
      width: 100%;
    }
    &_type {
      font-size: $S-Font-Size-Head18;
      cursor: pointer;
      > a {
        color: $S-Font-Color-Red;
      }
    }
    &_title {
      font-size: $S-Font-Size-Head20;
    }
    &_abstract {
      margin: 5px 0;
      font-size: $S-Font-Size-Base;
      color: $S-Font-Color-Gray;
      @include text-ellipsis(3);
    }
    &_date {
      color: $S-Font-Color-Gray;
    }
    &_viewer {
      color: $S-Font-Color-Gray;
      margin-top: 5px;
      .smilex-article-viewer_pcount {
        display: inline-block;
        padding: 0 16px 0 0;
        border-right: 1px solid $S-Border-Color-Gray;
      }
      .smilex-article-viewer_pcomment {
        display: inline-block;
        padding: 0 0 0 10px;
      }
    }
  }
}
</style>
