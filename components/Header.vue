<template>
  <header class="layout-header">
    <div class="container header">
      <div class="header-logo"></div>
      <div class="header-toggle"></div>
      <div class="header-collapse">
        <ul class="header-list">
          <li class="header-item">
            <span>BLOG居</span>
          </li>
          <li class="header-item">
            <span>探索世界</span>
            <div class="header-dropdown">
              <ul class="header-dropdown-list">
                <li class="header-dropdown-item">
                  <span>技术之旅</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  &-logo {
    width: 100px;
    background-color: blue;
    height: 100%;
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
    }
  }
}
</style>