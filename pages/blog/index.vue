<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header">HOME</div>
    </div>
    <div class="container content-container">
      <div class="content-main">
        <div class="content-article-list">
          <BlogArticle v-for="item in list" :key="item.id" :article="item" />
        </div>
        <div style="text-align: center">
          <sx-pagination
            :current="page.current"
            :totalCount="page.totalCount"
            :size="page.size"
            v-on:change="pageChange"
          />
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
  data() {
    return {
      list: [],
      page: {
        totalCount: 10,
        current: 1,
        size: 10,
      },
    }
  },
  created() {
    this.getPageList()
  },
  methods: {
    pageChange(current, size) {
      this.page.current = current
      this.page.size = size
      this.getPageList()
    },
    getPageList() {
      this.$axios
        .get(`/open/blog/${this.$store.state.tenantId}/article/home`, {
          params: {
            current: this.page.current,
            size: this.page.size,
          },
        })
        .then((res) => {
          if (res.success) {
            this.list = res.data.records
            this.page.totalCount = res.data.totalCount
            this.page.size = res.data.size
            this.page.current = res.data.current
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
