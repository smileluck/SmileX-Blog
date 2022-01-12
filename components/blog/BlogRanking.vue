<template>
  <div class="blog-panel blog-ranking">
    <p class="blog-panel-name"><a href="#">排行榜</a></p>
    <div class="blog-ranking-list">
      <div class="blog-ranking-item">
        <div class="blog-ranking-item_img">
          <a href="#" title="测试title">
            <img src="~/static/images/home/home-back2.jpg" alt="测试title" />
          </a>
        </div>
        <div class="blog-ranking-item_info">
          <div class="blog-ranking-info_title">测试title</div>
          <div class="blog-ranking-info_date">2022-01-01</div>
        </div>
      </div>
      <div class="blog-ranking-item">
        <div class="blog-ranking-item_img">
          <a href="#" title="测试title">
            <img src="~/static/images/home/home-back2.jpg" alt="测试title" />
          </a>
        </div>
        <div class="blog-ranking-item_info">
          <div class="blog-ranking-info_title">测试title</div>
          <div class="blog-ranking-info_date">2022-01-01</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-ranking {
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
    margin-top: 8px;
    margin-bottom: 4px;
    height: 80px;
    &_img {
      @include img-box(33);
    }
    &_info {
      width: 61%;
      margin-left: 16px;
      height: 100%;
      position: relative;
    }
    &:hover {
      .blog-ranking-info_title {
        color: $S-Font-Color-Red;
      }
    }
  }
  &-info {
    &_title {
      @include text-ellipsis(1);
    }
    &_date {
      position: absolute;
      bottom: 0;
      color: $S-Font-Color-Gray;
      font-size: $S-Font-Size-Notice;
    }
  }
}
</style>