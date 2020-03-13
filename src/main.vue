<template>
  <transition name="msgbox-fade">
    <div class="message-chend" v-show="visible">
      <div class="message-chend-bg"></div>
      <msg-box :title="title" :dragable="dragable" class="message-chend-content" @clickType="rightBtnFn">
        <div class="noticeMessageWrap">
          <p :class="{'noBtn': !btnShow, 'p-tip':tip , 'p-content': !tip}">{{content}}</p>
          <p v-if="tip" class="msgbox-tip p-tip">{{tip}}</p>
          <div class="notice0-btn" v-if="btnShow">
            <el-button class="notice0-left" :class="{'onlyOneBtn': !cancelBtn}" @click="leftBtnFn" round>{{leftText}}</el-button>
            <el-button class="notice0-right" v-show="cancelBtn" @click="rightBtnFn" round>{{rightText}}</el-button>
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
      leftText: '确定',
      rightText: '取消',
      cancelBtn: true,
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
      this.cancelBtn = true
    },
    doClose () {
      this.visible = false
    },
    leftBtnFn () {
      this.action = {
        value: 'confirm'
      }
      this.callback(this.action, this)
      this.doClose()
    },
    rightBtnFn () {
      this.action = {
        value: 'cancel'
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
<style lang="less" ref="stylesheet/less" scoped="scoped">
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
      margin-left: -150px;
      z-index: 99998;
      .noticeMessageWrap {
        max-width: 350px;
        min-width: 250px;
        margin-top: 10px;
        border-top: 1px solid #0d6bac;
        .noBtn {
          padding-bottom: 15px;
        }
        .p-content {
          padding: 15px 50px 0 50px;
          font-size: 16px;
          color: #62dcff;
          line-height: 25px;
        }
        .p-tip{
          padding: 15px 20px 0 20px;
          font-size: 16px;
          text-align: left;
          color: #62dcff;
          line-height: 25px;
        }
        .msgbox-tip{
          color: #eff2f3ad;
          font-size: 14px;
          margin: 0;
          padding-top: 0;
        }
        .notice0-btn {
          position: relative;
          float: left;
          padding: 25px 35px;
          .el-button + .el-button {
            margin-left: 30px;
          }
          .notice0 {
            float: left;
            &-left, &-right {
              width: 100px;
              height: 30px;
              color: #59cdf2;
              border: none;
              padding: 0 !important;
            }
            &-right {
              float: right;
              background-color: #095491;
            }
            &-left {
              float: left;
              background-color: #006fc9;
              color: #fff;
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
