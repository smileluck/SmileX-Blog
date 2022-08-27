<template>
  <div class="timeline">
    <div class="entries">
      <div class="entry">
        <div class="title">
          <sx-icon class="icon" iconType="finish"></sx-icon>2011
        </div>
        <div class="body">
          <p>
            Neque sunt voluptatibus repellat pariatur ut enim. Eveniet rerum
            suscipit eveniet amet dignissimos. Doloremque et distinctio quod
            molestiae ut.
          </p>
        </div>
      </div>
      <div class="entry">
        <div class="title">
          <sx-icon class="icon" iconType="finish"></sx-icon>2012
        </div>
        <div class="body">
          <p>Quo nobis cumque dolor iure voluptatem voluptatem alias soluta.</p>
        </div>
      </div>
      <div class="entry">
        <div class="title big">
          <sx-icon class="icon" iconType="finish"></sx-icon>2013
        </div>
        <div class="body">
          <p>
            Rerum sit libero possimus amet excepturi. Exercitationem enim
            dolores sunt praesentium dolorum praesentium.
          </p>
        </div>
      </div>
      <div class="entry">
        <div class="title">
          <sx-icon class="icon" iconType="finish"></sx-icon>2014
        </div>
        <div class="body">
          <p>
            Voluptatibus veniam ea reprehenderit atque. Reiciendis non laborum
            adipisci ipsa pariatur omnis. Sed ipsam repudiandae velit. Omnis
            libero nostrum aperiam nemo dolor ea eos eius. Esse a non itaque
            quidem.
          </p>
        </div>
      </div>
      <div class="entry">
        <div class="title">
          <sx-icon class="icon" iconType="now"></sx-icon>2015
        </div>
        <div class="body">
          <p>
            VAdipisci totam omnis cum et suscipit excepturi et excepturi.
            Inventore sequi sit ut aliquid. Modi aut dolores dignissimos.
          </p>
          <p>
            Delectus facere officia consequuntur molestias deserunt illo.
            Placeat laudantium beatae natus excepturi ab nihil voluptates.
          </p>
        </div>
      </div>
      <div class="entry">
        <div class="title big">
          <sx-icon class="icon" iconType="plan"></sx-icon>2016
        </div>
        <div class="body">
          <p>
            Impedit dolorem commodi explicabo fugit aut alias voluptatem. Magnam
            earum rerum quae dicta quibusdam aliquam ut.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      &:not(:first-child) {
        margin-top: -60px;
      }
      .title {
        font-size: 32px;
        margin-bottom: 12px;
        position: relative;
        color: #1d1d1d;
        display: flex;
        align-items: center;
        justify-content: right;
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