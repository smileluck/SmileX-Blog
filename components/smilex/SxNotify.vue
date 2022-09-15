<template>
  <div :class="['smilex-notify', 'smilex-notify_' + type]" role="notify">
    <div class="notify-title">
      <sx-icon :iconType="type" class="icon"></sx-icon>
      <p class="content">
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
    .content {
      position: relative;
      font-weight: 400;
      line-height: 1;
      font-size: 16px;
    }
  }
  &_info {
    background-color: $S-color-info-light-9;
    .content {
      color: $S-color-info;
    }
  }
  &_success {
    background-color: $S-color-success-light-9;
    .content {
      color: $S-color-success;
    }
  }
  &_error {
    background-color: $S-color-error-light-9;
    .content {
      color: $S-color-error;
    }
  }
  &_warning {
    background-color: $S-color-warning-light-9;
    .content {
      color: $S-color-warning;
    }
  }
}
</style>