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
              <div class="back">
                <sx-icon class="back-icon" iconType="back"></sx-icon
                ><span>BACK</span>
              </div>
              <span class="separate"></span>
              <a href="javascript:void" title="查看<JAVA>栏目">Java</a>
            </div>
            <div class="blog-article-title">java8基础总结</div>
            <hr class="smilex-hr2" />
            <div class="blog-article-sept">
              <div class="blog-article-sept_date">Post on 2021-01-01</div>
              <div class="blog-article-sept_viewer">
                <div class="blog-article-viewer_pcount">14</div>
                <div class="blog-article-viewer_pcomment">10</div>
              </div>
            </div>
            <div class="blog-article-detail">
              asdfjasdlf阿萨的饭卡就；埃里克森的肌肤；开始大幅就；卡拉圣诞节发会计法；卢卡斯的积分了肯定是解放势力扩大飞机是快乐的将来肯定是积分
            </div>
            <div class="blog-tags">
              <ul class="blog-tags-list">
                <li class="blog-tags-item">Java</li>
                <li class="blog-tags-item">JavaScript</li>
                <li class="blog-tags-item">Css</li>
                <li class="blog-tags-item">Os</li>
                <li class="blog-tags-item">Java</li>
                <li class="blog-tags-item">JavaScript</li>
                <li class="blog-tags-item">Css</li>
                <li class="blog-tags-item">Os</li>
              </ul>
            </div>
          </div>
          <hr class="smilex-hr2" />
          <div class="blog-article-nav">
            <div class="blog-article-nav-left">
              <div class="blog-article-nav-btn">
                &lt;<span>Previous Post</span>
              </div>
              <div class="blog-article-nav-left_page">java8基础总结</div>
            </div>
            <div class="blog-article-nav-right">
              <div class="blog-article-nav-btn"><span>Next Post</span>&gt;</div>
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
import SxIcon from '@/components/smilex/SxIcon.vue'
export default {
  layout: 'blog',
  components: {
    SxIcon,
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
