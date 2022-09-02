<template>
  <div class="timeline">
    <div class="entries">
      <div v-for="item in list" :key="item.id" class="entry">
        <div class="title">
          <sx-icon class="icon" :iconType="item.yearIcon"></sx-icon>
          <div class="title-box">
            <span class="year">{{ item.year }}</span>
            <span class="summary">{{ item.title }}</span>
          </div>
        </div>
        <div class="body">
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const dayjs = require('dayjs')
import SxIcon from '../smilex/SxIcon.vue'
export default {
  components: { SxIcon },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getTimeline()
  },
  methods: {
    getTimeline() {
      this.$axios
        .get(`/open/blog/${this.$store.state.tenantId}/timeline`)
        .then((res) => {
          if (res.success) {
            let nowYear = parseInt(dayjs(new Date()).format('YYYY'))
            for (let i = 0; i < res.data.length; i++) {
              let tempYear = res.data[i].year
              if (nowYear > tempYear) {
                res.data[i].yearIcon = 'finish'
              } else if (nowYear == tempYear) {
                res.data[i].yearIcon = 'now'
              } else {
                res.data[i].yearIcon = 'plan'
              }
            }
            this.list = res.data
          } else {
            this.list = []
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.timeline {
  //   background-color: #1d1d1d;
  min-height: 100vh;
  margin: 0;
  font-family: 'Droid Sans', sans-serif;
  position: relative;
  width: 100%;
  &:before {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    bottom: 0px;
    transform: translateX(-50%);
    width: 4px;
    background-color: #d9d9d9;
  }
  .entries {
    width: calc(100% - 80px);
    max-width: 900px;
    margin: auto;
    position: relative;
    left: -5px;
    .entry {
      width: calc(50% - 80px);
      float: left;
      padding: 14px;
      clear: both;
      text-align: right;
      margin-bottom: 30px;
      &:not(:first-child) {
        margin-top: -60px;
      }
      .title {
        font-size: 28px;
        margin-bottom: 12px;
        position: relative;
        color: #1d1d1d;
        display: flex;
        align-items: center;
        justify-content: right;
        &-box {
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;

          .year {
            order: 2;
          }
          .summary {
            font-size: 20px;
            order: 1;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 36px;
          height: 36px;
          border: 4px solid #d9d9d9;
          background-color: #ffffff;
          border-radius: 100%;
          top: 50%;
          transform: translate(8px, -50%);
          right: -85px;
          z-index: 9;
          // background: url('~/static/svg/bilibili.svg') center center / cover no-repeat;
        }
        .icon {
          position: absolute;
          width: 24px;
          height: 24px;
          top: 50%;
          transform: translate(8px, -50%);
          right: -83px;
          z-index: 10;
        }
      }
      .body {
        color: #aaa;
        p {
          line-height: 1.4em;
        }
      }
      &:nth-child(2n) {
        text-align: left;
        float: right;
        .title {
          justify-content: left;
          &-box {
            .year {
              order: 1;
            }
            .summary {
              order: 2;
            }
          }
          &:before {
            left: -91px;
          }
          .icon {
            left: -81px;
          }
        }
      }
    }
  }
}
</style>