<template>
  <main class="layout-content">
    <div class="container">
      <div class="smilex-section-header">ARTICLE</div>
    </div>
    <div class="container content-container">
      <div class="content-main">
        <div class="blog-article-panel blog-article">
          <div class="blog-article-main">
            <div class="blog-article-meta">
              <div class="back" @click="backHandle">
                <sx-icon class="back-icon" iconType="back"></sx-icon
                ><span>BACK</span>
              </div>
              <span class="separate"></span>
              <a
                href="javascript:void"
                @click="navSection(article.sectionId)"
                :title="`查看<${article.sectionName}>栏目`"
                >{{ article.sectionName }}</a
              >
            </div>
            <div class="blog-article-title">{{ article.articleTitle }}</div>
            <hr class="smilex-hr2" />
            <div class="blog-article-sept">
              <div class="blog-article-sept_date">Post on {{ postDate }}</div>
              <!-- <div class="blog-article-sept_viewer">
                <div class="blog-article-viewer_pcount">14</div>
                <div class="blog-article-viewer_pcomment">10</div>
              </div> -->
            </div>
            <div class="blog-article-detail" ref="articleDetail"></div>
            <div
              class="blog-lock"
              v-if="article.visitType != 1 && article.articleContent == null"
            >
              <p class="title">
                <sx-icon class="icon-lock" iconType="lock"></sx-icon
                >该文章已上锁
              </p>
              <div
                class="l-custom-input"
                :class="{ 'l-custom-input-hide': passToken != '' }"
              >
                <input size="large" id="l-input" v-model="passToken" />
                <label for="l-input">查看内容请输入密码</label>
              </div>
              <sx-button class="btn" @click.native="unlockArticleHandle"
                >解锁文章</sx-button
              >
            </div>
            <div class="blog-tags">
              <ul class="blog-tags-list">
                <li
                  class="blog-tags-item"
                  v-for="(item, index) in article.tagNames"
                  :key="index"
                  @click="navTag(index)"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <hr class="smilex-hr2" />
          <div class="blog-article-nav">
            <div class="blog-article-nav-left" @click="navLnHandle('prev')">
              <div class="blog-article-nav-btn">
                &lt;<span>Previous Post</span>
              </div>
              <div class="blog-article-nav-left_page" v-if="lnInfo.prev">
                {{ lnInfo.prev.articleTitle }}
              </div>
              <div class="blog-article-nav-left_page" v-else>
                已经是第一篇文章了哦！
              </div>
            </div>
            <div class="blog-article-nav-right" @click="navLnHandle('next')">
              <div class="blog-article-nav-btn"><span>Next Post</span>&gt;</div>
              <div class="blog-article-nav-right_page" v-if="lnInfo.next">
                {{ lnInfo.next.articleTitle }}
              </div>
              <div class="blog-article-nav-right_page" v-else>
                已经是最后一篇文章了哦！
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside class="content-aside">
        <div ref="articleOutline" style="display: none"></div>
        <BlogRanking />
        <blog-tags />
        <!-- <blog-comment /> -->
        <blog-work />
      </aside>
    </div>
  </main>
</template>

<script>
import SxIcon from '@/components/smilex/SxIcon.vue'
import SxButton from '@/components/smilex/SxButton.vue'
const dayjs = require('dayjs')
import VditorPreview from 'vditor/dist/method.min'
import 'vditor/dist/index.css'

export default {
  layout: 'blog',
  components: {
    SxIcon,
    SxButton,
  },
  data() {
    return {
      article: {},
      lnInfo: {},
      passToken: '',
    }
  },
  computed: {
    postDate() {
      return dayjs(this.article.createTime).format('YYYY-MM-DD')
    },
  },
  async asyncData({ app, route, store }) {
    let detailRes = await app.$axios.post(
      `/open/blog/${store.state.tenantId}/article/detail`,
      {
        articleId: route.params.id,
        passToken: store.state.unifyPass,
      }
    )
    let lnRes = await app.$axios.get(
      `/open/blog/${store.state.tenantId}/article/ln`,
      {
        params: {
          articleId: route.params.id,
          sectionId: route.query.sectionId,
          tagId: route.query.tagId,
        },
      }
    )
    detailRes.data.tagNames = detailRes.data.tagNames.split(',')
    detailRes.data.tagIds = detailRes.data.tagIds.split(',')

    return { article: detailRes.data, lnInfo: lnRes.data }
  },
  watch: {
    article: {
      immediate: true,
      handler(to, from) {
        //监听之后执行的回调
        this.$nextTick(() => {
          // const articleOutline = this.$refs.articleOutline
          const articleDetail = this.$refs.articleDetail
          VditorPreview.preview(
            articleDetail,
            to.articleContent != null ? to.articleContent : to.articleDigest,

            {
              anchor: 1,
              lazyLoadImage:
                'https://smile-sxd.oss-cn-shenzhen.aliyuncs.com/smilex/common/loading.gif',
              markdown: {
                toc: true,
              },
              // after() {
              //   if (to.articleContent == null) {
              //     return
              //   }
              //   VditorPreview.outlineRender(articleDetail, articleOutline)
              //   if (articleOutline.innerText.trim() !== '') {
              //     articleOutline.style.display = 'block'
              //   }
              // },
            }
          )
        })
      },
    },
  },
  beforeMount() {
    this.$store.commit('setSmallHeader', true)
  },
  beforeDestroy() {
    this.$store.commit('setSmallHeader', false)
  },
  methods: {
    backHandle() {
      this.$router.back()
    },
    navLnHandle(opt) {
      if (this.lnInfo[opt] != null) {
        this.$router.push({
          path: '/blog/' + this.lnInfo[opt].id,
        })
      }
    },
    navSection(id) {
      this.$router.push({
        path: '/blog',
        query: { sectionId: id },
      })
    },
    navTag(idx) {
      const id = this.article.tagIds[idx]
      this.$router.push({
        path: '/blog',
        query: { tagId: id },
      })
    },
    unlockArticleHandle() {
      this.$axios
        .post(`/open/blog/${this.$store.state.tenantId}/article/detail`, {
          articleId: this.$route.params.id,
          passToken: this.passToken,
        })
        .then((res) => {
          if (res.success) {
            if (res.data.visitType == 2 && res.data.articleContent != null) {
              this.$store.commit('setUnifyPass', this.passToken)
              console.log(this.$store.state.unifyPass)
            }
            res.data.tagNames = res.data.tagNames.split(',')
            res.data.tagIds = res.data.tagIds.split(',')

            this.article = res.data
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.blog-article {
  &-meta {
    display: flex;
    align-items: center;
    font-size: $S-Font-Size-Head16;
    .back {
      display: flex;
      align-items: center;
      &-icon {
        width: 16px;
        height: 16px;
      }
      cursor: pointer;
    }
    .separate {
      margin: 0 8px;
      width: 1px;
      height: $S-Font-Size-Head16;
      border-left: 1px solid #8a8a8a;
    }
    > a {
      cursor: pointer;
      color: $S-Font-Color-Red;
    }
  }
  &-title {
    width: 90%;
    margin: 0 auto;
    font-size: $S-Font-Size-Head24;
    text-align: center;
  }
  &-sept {
    font-size: $S-Font-Size-Notice;
    color: $S-Font-Color-Gray;
    margin: 20px 0;
    &_date {
      display: inline-block;
      margin-right: 16px;
    }
    &_viewer {
      display: inline-block;
      .blog-article-viewer_pcount {
        display: inline-block;
        padding: 0 16px 0 0;
        border-right: 1px solid $S-Border-Color-Gray;
      }
      .blog-article-viewer_pcomment {
        display: inline-block;
        padding: 0 0 0 10px;
      }
    }
  }
  .blog-lock {
    padding: 20px 0 20px;
    width: 50%;
    border: 1px solid $S-Border-Color-Gray;
    margin: 0 auto;
    text-align: center;
    .title {
      text-align: center;
      color: $S-Font-Color-Gray;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      .icon-lock {
        width: 16px;
        height: 16px;
      }
    }
    .l-custom-input {
      position: relative;
      width: 80%;
      margin: 20px auto 10px auto;
    }
    .l-custom-input label {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 16px;
      font-weight: 300;
      color: #9e9e9e;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
        Microsoft YaHei, Arial, sans-serif;
      transition: bottom 0.2s;
    }
    #l-input {
      border: none;
      width: 100%;
      padding: 12px 0 2px 0;
      font-size: 14px;
      background: none;
      color: #000;
      text-indent: 0;
      border-bottom: 1px solid #e0e0e0;
    }
    #l-input:focus {
      outline: none;
      border-bottom: 1px solid #2196f3;
    }
    #l-input:focus + label {
      bottom: 30px;
      color: #2196f3;
    }
    .l-custom-input-hide label {
      bottom: 30px;
      color: #2196f3;
    }
  }

  .blog-tags {
    padding: 20px 0 20px;
  }
  &-detail {
    font-size: $S-Font-Size-Head16;
    color: $S-Font-Color-Gray-Deep;
    margin: 0 0 20px 0;
  }
  &-nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 20px 0;
    &-left,
    &-right {
      display: inline-block;
      width: 49%;
      flex: 0 0 49%;
      padding: 10px 20px 10px 0;
      box-sizing: border-box;
      text-align: left;
      cursor: pointer;
      .blog-article-nav-btn {
        font-size: $S-Font-Size-Notice;
        color: $S-Font-Color-Gray;
        margin-bottom: 8px;
        > span {
          @include transition(margin 0.3s);
          margin-left: 8px;
          margin-right: 8px;
        }
      }
      &:hover {
        .blog-article-nav-btn {
          color: $S-Font-Color-Red;
        }
      }
    }
    &-left {
      border-right: 1px solid $S-Border-Color-Gray;
      &:hover {
        .blog-article-nav-btn > span {
          margin-left: 12px;
        }
      }
    }
    &-right {
      text-align: right;
      &:hover {
        .blog-article-nav-btn > span {
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
