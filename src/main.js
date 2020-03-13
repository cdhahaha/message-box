import msgboxVue from './main.vue'
import Vue from 'vue'

let MessageBoxConstructor = Vue.extend(msgboxVue)

let instance

let defaultCallback = action => {
  if (action.value === 'confirm') {
    instance.resolve(action.value)
  } else if (action.value === 'cancel') {
    instance.reject(action.value)
  }
}

let initInstance = () => {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  })

  document.body.appendChild(instance.$el)

  instance.callback = defaultCallback
}

let MessageBox = (content, title, options) => {
  if (!instance) {
    initInstance()
  }

  instance.content = content
  instance.title = title
  instance.tip = ''
  for (let i in options) {
    if (options.hasOwnProperty(i)) {
      instance[i] = options[i]
    }
  }

  Vue.nextTick(() => {
    instance.visible = true
  })

  return new Promise((resolve, reject) => {
    instance.resolve = resolve
    instance.reject = reject
  })
}

export default MessageBox
