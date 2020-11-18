<template>
  <div class="msg-box" ref="msgBox">
    <div class="msg-box-wrap">
      <h1>{{title}}</h1>
      <em class="close-tip" @click="clickType">×</em>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    },
    props: {
      dragable: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '提示'
      },
      labelWidth: {
        type: Number
      },
      labelHeight: {
        type: Number
      }
    },
    methods: {
      clickType (e) {
        this.$emit('clickType', {
          type: 'close'
        })
      },
      init () {
        var eleStyle = this.$refs.msgBox.style
        eleStyle.width = this.labelWidth + 'px'
        eleStyle.height = this.labelHeight + 'px'
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
<style ref="stylesheet/scss" lang="scss">
  .msg-box {
    position: fixed;
    z-index: 2000;
    .msg-box-wrap {
      float: left;
      position: relative;
      width: 680px;
      background-color: #202235;
      border-radius: 10px;
      h1 {
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        text-align: left;
        margin-left: 25px;
        line-height: 20px;
        margin-top: 25px;
        margin-bottom: 40px;
      }
      .close-tip {
        font-style: normal;
        color: #fff;
        font-size: 28px;
        position: absolute;
        right: 25px;
        top: 20px;
        cursor: pointer;
      }
    }
  }
</style>
