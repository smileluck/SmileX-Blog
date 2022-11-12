<template>
  <div class="smilex-article" @click="navDetail(article.id)">
    <div class="smilex-article-img">
      <a href="javascript:void" :title="article.articleTitle">
        <img
          :src="
            !!article.poster
              ? article.poster
              : require('~/static/images/book' +
                  ((Math.random() * 4) >> 0) +
                  '.jpg')
          "
          :alt="article.articleTitle"
        />
      </a>
    </div>
    <div class="smilex-article-info">
      <div class="smilex-article-info-top">
        <sx-icon
          class="lock"
          iconType="lock"
          v-if="article.visitType != 1"
        ></sx-icon>
        <p class="smilex-article-info_type">
          <a
            href="javascript:void"
            :title="`查看${article.sectionName}栏目`"
            @click.stop="navSection(article.sectionId)"
          >
            {{ article.sectionName }}</a
          >
        </p>
        <div class="smilex-article-info_title">{{ article.articleTitle }}</div>
        <div class="smilex-article-info_abstract">
          {{ article.articleDigest }}
        </div>
      </div>
      <div class="smilex-article-info-bottom">
        <div class="smilex-article-info_date">Post on {{ postDate }}</div>
        <div class="smilex-article-info_viewer">
          <div class="smilex-article-viewer_pcount">99</div>
          <div class="smilex-article-viewer_pcomment">99</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SxIcon from '../smilex/SxIcon.vue'
const dayjs = require('dayjs')
export default {
  props: {
    article: {
      type: Object,
    },
    // sectionName: {
    //   type: String,
    // },
    // articleTitle: {
    //   type: String,
    // },
    // articleDigest: {
    //   type: String,
    // },
    // createTime: {
    //   type: String,
    // },
    // updateTime: {
    //   type: String,
    // },
  },
  components: {
    SxIcon,
  },
  computed: {
    postDate() {
      return dayjs(this.article.createTime).format('YYYY-MM-DD')
    },
  },
  methods: {
    navDetail(id) {
      this.$router.push({
        path: '/blog/' + id,
        query: {
          sectionId: this.$route.query.sectionId,
          tagId: this.$route.query.tagId,
        },
      })
    },
    navSection(id) {
      this.$router.push({
        path: '/blog',
        query: { sectionId: id },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.smilex-article {
  margin-bottom: 20px;
  width: 100%;
  padding: $S-Box-Padding;
  box-sizing: border-box;
  // border: 1px solid #555555;
  box-shadow: $S-Box-Shadow;
  border-radius: $S-Box-Border-Radius;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 240px;
  cursor: pointer;
  @include transition(all 0.3s);
  &:hover {
    box-shadow: $S-Box-Shadow-Hover;
  }
  &-img {
    @include img-box(37%);
  }
  &-info {
    width: 61%;
    margin-left: 16px;
    height: 100%;
    position: relative;
    &-top {
      height: 60%;
      position: relative;
      .lock {
        position: absolute;
        top: 0px;
        right: 0px;
        width: 15px;
        height: 15px;
      }
    }
    &-bottom {
      padding: 14px 0 0 0;
      // height: 40%;
      border-top: 1px solid $S-Border-Color-Gray;
      font-size: $S-Font-Size-Notice;
      bottom: 0;
      position: absolute;
      width: 100%;
    }
    &_type {
      font-size: $S-Font-Size-Head18;
      > a {
        color: $S-Font-Color-Red;
      }
    }
    &_title {
      font-size: $S-Font-Size-Head20;
    }
    &_abstract {
      margin: 5px 0;
      font-size: $S-Font-Size-Base;
      color: $S-Font-Color-Gray;
      @include text-ellipsis(3);
    }
    &_date {
      color: $S-Font-Color-Gray;
    }
    &_viewer {
      color: $S-Font-Color-Gray;
      margin-top: 5px;
      .smilex-article-viewer_pcount {
        display: inline-block;
        padding: 0 16px 0 0;
        border-right: 1px solid $S-Border-Color-Gray;
      }
      .smilex-article-viewer_pcomment {
        display: inline-block;
        padding: 0 0 0 10px;
      }
    }
  }
}
@media only screen and (max-width: 576px) {
  .smilex-article {
    &-img {
      display: none;
    }
    &-info {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
