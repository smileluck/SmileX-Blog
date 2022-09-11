<template>
  <div class="smilex-empty">
    <img class="empty-img" src="~/static/images/home/empty-data.png" />
    <span class="empty-span">暂无数据</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.smilex-empty {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0 auto;
  .empty-img {
    margin: 0 auto;
    max-width: 400px;
    width: 100%;
  }
  .empty-span {
    position: relative;
    font-size: 20px;
    bottom: 20px;
    color: $S-Font-Color-Gray;
  }
}
</style>
