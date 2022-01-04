<template>
  <div class="smilex-spin">
    <div class="smilex-spin-box">
      <template v-if="spinType == '2block'">
        <span class="smilex-spin_block smilex-spin_block1"></span>
        <span class="smilex-spin_block smilex-spin_block2"></span>
      </template>
      <template v-else>
        <span :class="'smilex-spin_' + spinType" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SxSpin',
  props: {
    spinType: {
      type: String,
      default: 'taiji',
    },
  },
}
</script>

<style>
</style>