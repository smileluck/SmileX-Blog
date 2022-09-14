<template>
  <div class="smilex-notify" role="notify">
    <div class="notify-title">
      <sx-icon :iconType="type" class="icon"></sx-icon>
      <p>
        {{ title }}
      </p>
    </div>
  </div>
</template>

<script>
import SxIcon from '@/components/smilex/SxIcon.vue'
export default {
  name: 'SxNotify',
  components: {
    SxIcon,
  },
  props: {
    title: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
}
</script>

<style lang="scss" scoped>
.smilex-notify {
  position: fixed;
  z-index: 1024;
  left: 50%;
  top: 20px;
  transform: translatex(-50%);
  background-color: #f4f4f5;
  padding: 20px;
  border-radius: 5px;
  // @include transition(all 0.3s);
  animation: fade-in 0.3s 1;
  .notify-title {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .icon {
      width: 20px;
      height: 20px;
      position: relative;
    }
    > p {
      position: relative;
      font-weight: 400;
      color: #909399;
      line-height: 1;
      font-size: 16px;
    }
  }
}
</style>