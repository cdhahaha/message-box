<template>
  <div class="msg-box" ref="msgBox" v-dragable="dragable">
    <div class="msg-box-wrap">
      <h1>{{title}}</h1>
      <em class="close-tip" @click="clickType">×</em>
      <slot></slot>
      <div class="spanLine"></div>
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
<style ref="stylesheet/less" lang="less">
  .msg-box {
    position: fixed;
    z-index: 2000;
    .msg-box-wrap {
      opacity: .95;
      float: left;
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #0c4371;
      border: 1px solid #5db1ff;
      h1 {
        color: #fff;
        font-size: 16px;
        padding-top: 10px;
        text-align: left;
        padding-left: 18px;
      }

      .close-tip {
        font-style: normal;
        color: #fff;
        font-size: 28px;
        position: absolute;
        right: 10px;
        top: 0px;
        cursor: pointer;
      }
    }
  }
</style>
