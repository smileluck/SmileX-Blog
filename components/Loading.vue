<template lang="html">
  <div class="loading-wrapper" v-if="loading">
    <sx-spin spinType="heart"></sx-spin>
  </div>
</template>

<script>
import SxSpin from '@/components/smilex/SxSpin.vue'
export default {
  name: 'Loading',
  components: { SxSpin },
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 500)
    },
  },
}
</script>

<style>
.loading-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.75);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
}
</style>
