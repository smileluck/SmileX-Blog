<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header">ARTICLE</div>
    </div>
    <div class="container content-container">
      <div class="content-main">
        <div class="blog-article-panel blog-article">
          <div class="blog-article-main">
            <p class="blog-article-meta">
              <a href="#" title="查看<JAVA>分类下的所有文件">Java</a>
            </p>
            <div class="blog-article-title">java8基础总结</div>
            <hr class="smilex-hr2" />
            <div class="blog-article-sept">
              <div class="smilex-article-info_date">Post on 2021-01-01</div>
              <div class="smilex-article-info_viewer">
                <div class="smilex-article-viewer_pcount">14</div>
                <div class="smilex-article-viewer_pcomment">10</div>
              </div>
            </div>
            <div class="blog-article-detail">
              asdfjasdlf阿萨的饭卡就；埃里克森的肌肤；开始大幅就；卡拉圣诞节发会计法；卢卡斯的积分了肯定是解放势力扩大飞机是快乐的将来肯定是积分
            </div>
            <div class="blog-article-tags"></div>
          </div>
          <hr class="smilex-hr2" />
          <div class="blog-article-nav">
            <div class="blog-article-nav-left">
              <div class="blog-article-nav-left_btn">
                &lt;<span>Previous Post</span>
              </div>
              <div class="blog-article-nav-left_page">java8基础总结</div>
            </div>
            <div class="blog-article-nav-right">
              <div class="blog-article-nav-right_btn">
                <span>Next Post</span>&lt;
              </div>
              <div class="blog-article-nav-right_page">java8基础总结</div>
            </div>
          </div>
        </div>
      </div>
      <aside class="content-aside">
        <BlogRanking />
        <blog-tags />
        <blog-comment />
      </aside>
    </div>
  </main>
</template>

<script>
export default {
  layout: 'blog',
}
</script>

<style lang="scss" scoped>
.blog-article {
  &-meta {
    font-size: $S-Font-Size-Head16;
    cursor: pointer;
    > a {
      color: $S-Font-Color-Red;
    }
  }
  &-title {
    width: 90%;
    margin: 0 auto;
    font-size: $S-Font-Size-Head24;
    text-align: center;
  }
}
</style>
