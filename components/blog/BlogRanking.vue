<template>
  <div class="blog-panel blog-ranking">
    <p class="blog-panel-name">排行榜</p>
    <div class="blog-ranking-list" v-if="list.length > 0">
      <div
        class="blog-ranking-item"
        v-for="item in list"
        :key="item.id"
        @click="navDetail(item.id)"
      >
        <div class="blog-ranking-item_img">
          <a href="javascript:void" :title="item.articleTitle">
            <img
              :src="
                !!item.poster
                  ? item.poster
                  : require('~/static/images/book0.jpg')
              "
              :alt="item.articleTitle"
            />
          </a>
        </div>
        <div class="blog-ranking-item_info">
          <div class="blog-ranking-info_title">{{ item.articleTitle }}</div>
          <div class="blog-ranking-info_date">{{ item.createTime }}</div>
        </div>
      </div>
    </div>

    <sx-empty-data style="width: 50%" v-else></sx-empty-data>
  </div>
</template>

<script>
import SxEmptyData from '~/components/smilex/SxEmptyData.vue'
export default {
  components: { SxEmptyData },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.$axios
      .get(`/open/blog/${this.$store.state.tenantId}/article/top`)
      .then((res) => {
        if (res.success) {
          this.list = res.data
        } else {
          this.list = []
        }
      })
  },
  methods: {
    navDetail(id) {
      this.$router.push({
        path: '/blog/' + id,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-ranking {
  .blog-panel-name {
    cursor: auto;
  }
  &-list {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
  &-item {
    width: 100%;
    display: flex;
    cursor: pointer;
    margin-top: 8px;
    margin-bottom: 4px;
    height: 80px;
    &_img {
      @include img-box(33);
    }
    &_info {
      width: 61%;
      margin-left: 16px;
      height: 100%;
      position: relative;
    }
    &:hover {
      .blog-ranking-info_title {
        color: $S-Font-Color-Red;
      }
    }
  }
  &-info {
    &_title {
      @include text-ellipsis(1);
    }
    &_date {
      position: absolute;
      bottom: 0;
      color: $S-Font-Color-Gray;
      font-size: $S-Font-Size-Notice;
    }
  }
}
</style>
