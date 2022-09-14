<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header" @click="notifyTest()">HOME</div>
    </div>
    <div class="container content-container">
      <div class="content-main">
        <div class="content-article-list" v-if="list.length > 0">
          <BlogArticle v-for="item in list" :key="item.id" :article="item" />
        </div>
        <sx-empty-data v-else></sx-empty-data>
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
        <!-- <blog-comment /> -->
        <blog-work />
      </aside>
    </div>
  </main>
</template>

<script>
import BlogComment from '~/components/blog/BlogComment.vue'
import BlogWork from '~/components/blog/BlogWork.vue'
import BlogTags from '~/components/blog/BlogTags.vue'
import SxEmptyData from '~/components/smilex/SxEmptyData.vue'
import SxPagination from '~/components/smilex/SxPagination.vue'
export default {
  components: { SxPagination, BlogTags, BlogComment, SxEmptyData, BlogWork },
  layout: 'blog',
  data() {
    return {
      list: [],
      page: {
        totalCount: 10,
        current: 1,
        size: 10,
      },
      sectionId: null,
      tagId: null,
    }
  },
  created() {
    this.getPageList()
  },
  watch: {
    '$route.query'(to, from) {
      this.sectionId = to.sectionId
      this.tagId = to.tagId
      this.page.current = 1
      this.getPageList()
    },
  },
  methods: {
    notifyTest() {
      this.$alert({
        title: '12211',
        content: '111',
      })
    },
    pageChange(current, size) {
      this.page.current = current
      this.page.size = size
      this.getPageList()
    },
    getPageList() {
      this.sectionId = this.$route.query.sectionId
      this.tagId = this.$route.query.tagId
      this.$axios
        .get(`/open/blog/${this.$store.state.tenantId}/article/home`, {
          params: {
            current: this.page.current,
            size: this.page.size,
            sectionId: this.sectionId,
            tagId: this.tagId,
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

<style lang="scss" scoped></style>
