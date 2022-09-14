<template>
  <div class="smilex-icon">
    <div class="smilex-icon-wrapper">
      <div
        :class="'smilex-icon_svg smilex-icon_' + iconType"
        :style="{
          backgroundImage:
            'url(' + require('~/static/svg/' + iconType + '.svg') + ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SxIcon',
  props: {
    iconType: {
      type: String,
    },
  },
}
</script>

<style>
</style>