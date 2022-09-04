<template>
  <div class="blog-panel blog-tags">
    <p class="blog-panel-name"><a href="#">标签云</a></p>
    <ul class="blog-tags-list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="blog-tags-item"
        @click="navTag(item.id)"
      >
        {{ item.tagName }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$axios
      .get(`/open/blog/${this.$store.state.tenantId}/tag/list`)
      .then((res) => {
        if (res.success) {
          this.list = res.data
        } else {
          this.list = []
        }
      })
  },
  methods: {
    navTag(id) {
      this.$router.push({
        path: '/blog',
        query: { tagId: id },
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
