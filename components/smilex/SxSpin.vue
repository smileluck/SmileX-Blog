<template>
  <div class="smilex-spin">
    <div :class="'smilex-spin-' + outModel">
      <template v-if="spinType == '2block'">
        <span class="smilex-spin_block smilex-spin_block1"></span>
        <span class="smilex-spin_block smilex-spin_block2"></span>
      </template>
      <template v-else-if="spinType == 'music'">
        <span class="smilex-spin_music smilex-spin_music1"></span>
        <span class="smilex-spin_music smilex-spin_music2"></span>
        <span class="smilex-spin_music smilex-spin_music3"></span>
      </template>
      <template v-else-if="spinType == 'heart'">
        <span class="smilex-spin_heart smilex-spin_heart1"></span>
        <span class="smilex-spin_heart smilex-spin_heart2"></span>
        <span class="smilex-spin_heart smilex-spin_heart3"></span>
        <span class="smilex-spin_heart smilex-spin_heart4"></span>
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
  computed: {
    outModel() {
      switch (this.spinType) {
        case 'music':
          return 'line'
      }
      return 'box'
    },
  },
}
</script>

<style>
</style>