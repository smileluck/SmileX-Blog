<template>
  <div>
    <home-index />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })
    // setTimeout(() => {
    //   this.$nuxt.$loading.finish()
    // }, 1500)
  },
}
</script>
