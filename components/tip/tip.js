// components/tip/tip.js
Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    _value: ""
  },
  // lifetimes: {
  //   attached() {
  //     // 在组件实例进入页面节点树时执行
  //     if (this.properties.value) {
  //       this.properties.value = this.data._value
  //     }
  //   }
  // },
  methods: {
    confirm(event) {
      this.triggerEvent('confirm', '')
    },
  }
})