<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header">HOME</div>
    </div>
    <div class="container content-container">
      <div class="content-main">
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
        <blog-tags />
        <blog-comment />
      </aside>
    </div>
  </main>
</template>

<script>
import BlogComment from '~/components/blog/BlogComment.vue'
import BlogTags from '~/components/blog/BlogTags.vue'
import SxPagination from '~/components/smilex/SxPagination.vue'
export default {
  components: { SxPagination, BlogTags, BlogComment },
  layout: 'blog',
  methods: {
  },
}
</script>

<style lang="scss" scoped>
</style>
