<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header">HOME</div>
    </div>
    <div class="container content-container">
      <div class="content-article">
        <div class="content-article-list">
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
          <BlogArticle />
        </div>
        <div style="text-align: center">
          <sx-pagination />
        </div>
      </div>
      <aside class="content-aside">
        <BlogRanking />
      </aside>
    </div>
  </main>
</template>

<script>
import SxPagination from '~/components/smilex/SxPagination.vue'
export default {
  components: { SxPagination },
  layout: 'blog',
  methods: {
    pageOnclick() {
      console.log()
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
