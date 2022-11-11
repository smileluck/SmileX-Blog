<template>
  <div class="smilex-pagination" v-if="pageCount != 1">
    <div
      @click="pageHandle($data._current - 1)"
      class="smilex-pagination-prev"
      :class="!isFirst ? 'smilex-pagination-btn' : 'smilex-pagination-disable'"
    >
      <a title="上一页">&#8592;</a>
    </div>
    <ul class="smilex-pagination-pager">
      <template v-for="item in showPages">
        <li
          v-if="item === 'L5' || item === 'R5'"
          @click="
            pageHandle(item === 'L5' ? $data._current - 5 : $data._current + 5)
          "
          :key="item"
          class="smilex-pagination-pager-item smilex-pagination-btn"
          :class="{ 'smilex-pagination-btn_active': $data._current == item }"
        >
          <a :title="item === 'L5' ? '向前5页' : '向后5页'">...</a>
        </li>
        <li
          v-else
          @click="pageHandle(item)"
          class="smilex-pagination-pager-item smilex-pagination-btn"
          :class="{ 'smilex-pagination-btn_active': $data._current == item }"
          :style="{ ' cursor: not-allowed;': $data._current == item }"
          :key="item"
        >
          <a :title="item">{{ item }}</a>
        </li>
      </template>
    </ul>
    <div
      @click="pageHandle($data._current + 1)"
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
      default: 0,
    },
    current: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      _current: this.current,
      showPages: [],
    }
  },
  computed: {
    isFirst() {
      return this.$data._current == 1
    },
    isLast() {
      return this.$data._current == this.pageCount
    },
    pageCount() {
      return this.totalCount === 0 ? 1 : Math.ceil(this.totalCount / this.size)
    },
  },
  watch: {
    pageCount: {
      handler(to, from) {
        this.updateData()
      },
    },
  },
  mounted() {
    this.updateData()
  },
  methods: {
    pageHandle(nextPage) {
      if (this.$data._current == 1 && nextPage <= 1) {
        return
      }
      if (this.$data._current == this.pageCount && nextPage >= this.pageCount) {
        return
      }
      if (this.$data._current == nextPage) {
        return
      }
      nextPage = nextPage < 1 ? 1 : nextPage
      nextPage = nextPage > this.pageCount ? this.pageCount : nextPage
      this.$data._current = nextPage
      this.updateData()
      this.$emit('change', this.$data._current, this.size)
    },
    updateData() {
      let start =
        this.pageCount > 5 && this.$data._current >= 5
          ? this.$data._current - 2
          : 1
      let end =
        start == 1
          ? this.pageCount > 5
            ? 5
            : this.pageCount
          : this.pageCount - this.$data._current < 5
          ? this.pageCount
          : this.$data._current + 2
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