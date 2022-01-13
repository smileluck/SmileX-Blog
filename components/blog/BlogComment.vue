<template>
  <div class="blog-panel blog-comment">
    <p class="blog-panel-name"><a href="#">最新评论</a></p>
    <div class="blog-comment-list">
      <div class="blog-comment-item">
        <div class="blog-comment-info">
          <div class="blog-comment-info_name">测试title</div>
          <div class="blog-comment-info_date">2022-01-01 11:11:11</div>
        </div>
        <div class="blog-comment-content">
          啊上的飞机啊四点零分撒旦解放拉萨看见对方；阿斯顿JFK上帝就发是看得见；啊撒旦解放阿斯利康积分发
        </div>
      </div>
      <div class="blog-comment-item">
        <div class="blog-comment-info">
          <div class="blog-comment-info_name">测试title</div>
          <div class="blog-comment-info_date">2022-01-01 11:11:11</div>
        </div>
        <div class="blog-comment-content">
          啊上的飞机啊四点零分撒旦解放拉萨看见对方；阿斯顿JFK上帝就发是看得见；啊撒旦解放阿斯利康积分发
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-comment {
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
    align-items: center;
    font-size: $S-Font-Size-Base;
    &_name {
      display: inline-block;
      @include text-ellipsis(1);
    }
    &_date {
      display: inline-block;
      color: $S-Font-Color-Gray;
      margin-left: 10px;
    }
  }
  &-content {
    font-size: $S-Font-Size-Base;
    color: $S-Font-Color-Gray-Deep;
    @include text-ellipsis(1);
  }
}
</style>