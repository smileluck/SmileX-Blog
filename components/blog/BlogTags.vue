<template>
  <div class="blog-panel blog-tags">
    <p class="blog-panel-name">标签云</p>
    <ul class="blog-tags-list">
      <li
        v-for="(item, index) in showList"
        :key="index"
        class="blog-tags-item"
        :class="{ 'blog-tags-item_c': item.choice }"
        @click="navTag(item)"
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
      showList: [],
    }
  },
  created() {
    this.$axios
      .get(`/open/blog/${this.$store.state.tenantId}/tag/list`)
      .then((res) => {
        if (res.success) {
          this.list = [...res.data]
          const showList = []
          if (!!this.$route.query.tagId) {
            for (let i = 0; i < this.list.length; i++) {
              if (this.list[i].id == this.$route.query.tagId) {
                showList.push({ ...this.list[i], choice: true })
                this.$store.commit('setChoiceTag', this.list[i])
                break
              }
            }
          } else {
            this.$store.commit('setChoiceTag', null)
          }
          while (showList.length <= 10 && showList.length <= res.data.length) {
            var temp = (Math.random() * res.data.length) >> 0
            showList.push({ ...res.data.splice(temp, 1)[0], choice: false })
          }
          this.showList = showList
        } else {
          this.list = []
          this.showList = []
        }
      })
  },
  methods: {
    navTag(item) {
      if (!item.choice) {
        this.$store.commit('setChoiceTag', item)
        for (let i = 0; i < this.showList.length; i++) {
          if (this.showList[i].id == item.id) {
            this.showList[i].choice = true
          } else {
            this.showList[i].choice = false
          }
        }
        this.$router.push({
          path: '/blog',
          query: { tagId: item.id },
        })
      } else {
        this.$store.commit('setChoiceTag', null)
        this.$router.push({
          path: '/blog',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
