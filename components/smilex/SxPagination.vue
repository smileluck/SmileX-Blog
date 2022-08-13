<template>
  <div class="smilex-pagination">
    <div
      @click="pageHandle(current - 1)"
      class="smilex-pagination-prev"
      :class="!isFirst ? 'smilex-pagination-btn' : 'smilex-pagination-disable'"
    >
      <a title="上一页">&#8592;</a>
    </div>
    <ul class="smilex-pagination-pager">
      <template v-for="item in showPages">
        <li
          v-if="item === 'L5' || item === 'R5'"
          @click="pageHandle(item === 'L5' ? current - 5 : current + 5)"
          :key="item"
          class="smilex-pagination-pager-item smilex-pagination-btn"
          :class="{ 'smilex-pagination-btn_active': current == item }"
        >
          <a :title="item === 'L5' ? '向前5页' : '向后5页'">...</a>
        </li>
        <li
          v-else
          @click="pageHandle(item)"
          class="smilex-pagination-pager-item smilex-pagination-btn"
          :class="{ 'smilex-pagination-btn_active': current == item }"
          :key="item"
        >
          <a :title="item">{{ item }}</a>
        </li>
      </template>
    </ul>
    <div
      @click="pageHandle(current + 1)"
      class="smilex-pagination-next"
      :class="!isLast ? 'smilex-pagination-btn' : 'smilex-pagination-disable'"
    >
      <a title="下一页">&#8594;</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 1000,
    },
    current: {
      type: Number,
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPages: [],
    }
  },
  computed: {
    isFirst() {
      return this.current == 1
    },
    isLast() {
      return this.current == this.pageCount
    },
    pageCount() {
      return this.totalCount === 0
        ? 1
        : Math.ceil(this.totalCount / this.pageSize)
    },
  },
  mounted() {
    this.updateData()
  },
  methods: {
    pageHandle(nextPage) {
      if (this.current == 1 && nextPage <= 1) {
        return
      }
      if (this.current == this.pageCount && nextPage >= this.pageCount) {
        return
      }
      nextPage = nextPage < 1 ? 1 : nextPage
      nextPage = nextPage > this.pageCount ? this.pageCount : nextPage
      this.current = nextPage;
      this.updateData()
    },
    updateData() {
      let start = this.pageCount > 5 && this.current >= 5 ? this.current - 2 : 1
      let end =
        start == 1
          ? 5
          : this.pageCount - this.current < 5
          ? this.pageCount
          : this.current + 2
      let arr = []
      for (let i = start; i <= end; i++) {
        arr.push(i)
      }
      if (start != 1) {
        arr = [1, 'L5'].concat(arr)
      }
      if (end != this.pageCount) {
        arr = arr.concat(['R5', this.pageCount])
      }
      this.showPages = arr
    },
  },
}
</script>

<style lang="scss" scoped>
</style>