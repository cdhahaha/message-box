<template>
  <transition name="msgbox-fade">
    <div class="message-chend" v-show="visible">
      <div class="message-chend-bg"></div>
      <msg-box :title="title" :dragable="dragable" class="message-chend-content" @clickType="leftBtnFn">
        <div class="noticeMessageWrap">
          <p class="p-content">{{content}}</p>
          <div class="notice0-btn" v-if="btnShow">
            <el-button class="notice0-left" :class="{'onlyOneBtn': !ensureBtn}" @click="leftBtnFn" round>{{leftText}}</el-button>
            <el-button class="notice0-right" v-show="ensureBtn" @click="rightBtnFn" round>{{rightText}}</el-button>
          </div>
        </div>
      </msg-box>
    </div>
  </transition>
</template>
<script>
import msgBox from './msgBox'
export default {
  data () {
    return {
      title: '提示',
      content: '内容',
      tip: '',
      leftText: '取消',
      rightText: '确定',
      ensureBtn: true,
      dragable: true,
      visible: false,
      callBackValue: '1',
      callback: null,
      action: null,
      btnShow: true
    }
  },
  components: {msgBox},
  methods: {
    init () {
      this.ensureBtn = true
    },
    doClose () {
      this.visible = false
    },
    leftBtnFn () {
      this.action = {
        value: 'cancel'
      }
      this.callback(this.action, this)
      this.doClose()
    },
    rightBtnFn () {
      this.action = {
        value: 'confirm'
      }
      this.callback(this.action, this)
      this.doClose()
    }
  },
  watch: {
    visible (cur) {
      if (!cur) {
        setTimeout(this.init, 300)
      }
    }
  }
}
</script>
<style ref="stylesheet/scss" lang="scss" scoped="scoped">
  .message-chend {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 99996;
    .message-chend-bg {
      position: fixed;
      height: 100%;
      width: 100%;
      z-index: 99997;
      opacity: .7;
      background: #000;
    }
    .message-chend-content {
      position: absolute;
      top: 30%;
      left: 50%;
      margin-left: -340px;
      z-index: 99998;
      .noticeMessageWrap {
        padding-right: 25px;
        .p-content {
          text-align: left;
          margin-left: 25px;
          padding-bottom: 40px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          color: #fff;
        }
        .notice0-btn {
          position: relative;
          width: 680px;
          height: 100px;
          background: #fff;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          .notice0 {
            &-left, &-right {
              width: 190px;
              height: 42px;
              color: #fff;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 400;
            }
            &-right {
              background-color: #202235;
              border: 1px solid #202235;
            }
            &-left {
              background-color: #fff;
              color: #A3A3A3;
              border: 1px solid #E9E8E8;
              margin-right: 20px;
            }
          }
          .onlyOneBtn {
            position: relative;
            transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            -moz-transform: translateX(-50%);
            -webkit-transform: translateX(-50%);
            -o-transform: translateX(-50%);
            left: 50%;
          }
        }
      }
    }
  }
</style>
