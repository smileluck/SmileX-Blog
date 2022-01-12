<template>
  <div class="blog-panel blog-tags">
    <p class="blog-panel-name"><a href="#">标签云</a></p>
    <ul class="blog-tags-list">
      <li class="blog-tags-item">Java</li>
      <li class="blog-tags-item">JavaScript</li>
      <li class="blog-tags-item">Css</li>
      <li class="blog-tags-item">Os</li>
      <li class="blog-tags-item">Java</li>
      <li class="blog-tags-item">JavaScript</li>
      <li class="blog-tags-item">Css</li>
      <li class="blog-tags-item">Os</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.blog-tags {
  &-list {
  }
  &-item {
    display: inline-block;
    height: 28px;
    border-radius: 15px;
    line-height: 28px;
    padding: 0 10px;
    text-align: center;
    color: $S-Font-Color-Gray;
    border: 1px solid $S-Border-Color-Gray;
    margin: 4px 4px 0 0;
    cursor: pointer;
    &:hover {
      color: $S-Border-Color-Active;
      border-color: $S-Border-Color-Active;
    }
  }
}
</style>