const { http } = require('../../utils/http.js');

Page({
  timer: null,
  data: {
    defalutSecond: 5,
    time: "",
    timerStatus: 'stop',
    confirmVisible: false,
    againBottonVisible: false,
    confirmFinishedVisible: false,
    tomatoe: {}
  },
  onShow: function () {
    this.setTime()
    http.post('/tomatoes').then(response => {
      this.setData({
        tomatoe: response.data.resource
      })
    })
  },
  setTime() {
    this.setData({
      timerStatus: 'stop'
    })
    this.showTime()
    this.timer = setInterval(() => {
      this.data.defalutSecond = this.data.defalutSecond - 1
      this.showTime()
      if (this.data.defalutSecond <= 0) {
        this.setData({
          againBottonVisible: true
        })
        this.setData({
          confirmFinishedVisible: true
        })
        wx.vibrateLong()
        return this.destroyTimer()
        // 在销毁定时器之后需要将跳出函数，就是用return
      }
    }, 1000);
  },
  destroyTimer() {
    clearInterval(this.timer)
    this.timer = null
    this.setData({
      timerStatus: 'start'
    })
  },
  showTime() {
    let m = Math.floor(this.data.defalutSecond / 60)
    let s = Math.floor(this.data.defalutSecond % 60)
    if ((m + '').length === 1) {
      m = '0' + m
    }
    if ((s + '').length === 1) {
      s = '0' + s
    }
    this.setData({
      time: `${m}:${s}`
    })
  },
  setStop() {
    this.destroyTimer()
  },
  setStart() {
    this.setTime()
  },
  confirmAbandon(event) {
    let content = event.detail
    http.put(`/tomatoes/${this.data.tomatoe.id}`, {
      description: content,
      aborted: true
    })
      .then(reponse => {
        wx.navigateBack({
          top: -1,
        })
      })
    // 此处实现返回上一页
  },
  showConfirm() {
    this.setData({
      confirmVisible: true
    })
    this.destroyTimer()
  },
  hiddenConfirm() {
    this.setData({
      confirmVisible: false
    })
    this.setTime()
  },
  againGroup() {
    http.post('/tomatoes').then(response => {
      this.setData({ tomatoe: response.data.resource })
    })
    // 此处是当再来一组的时候就创建一个新的番茄
    this.setData({
      againBottonVisible: false
    })
    this.data.defalutSecond = 5
    this.setTime()
  },
  // 完成确定
  confirmFinshed(event) {
    let content = event.detail
    if (content) {
      http.put(`/tomatoes/${this.data.tomatoe.id}`, {
        description: content,
        aborted: false
      })
        .then(response => {
          this.confirmCancel()
        })
    }
    // 只有当完成之后的，在会话框中填入了“完成了什么”的内容之后才能成功点击确定
  },
  confirmCancel() {
    this.setData({
      confirmFinishedVisible: false
    })
  },

  // 当要退出页面时，如果倒计时在进行中，那么将此时的番茄视为放弃，如果倒计时已结束，则正常退出
  // 退出时必须加上这个判断条件，不然即使任务已经完成，一旦退出，那么该任务经过put更新之后将仍为放弃
  onHide() {
    if (this.data.defalutSecond) {
      this.destroyTimer()
      http.put(`/tomatoes/${this.data.tomatoe.id}`, {
        description: "退出放弃",
        aborted: true
      })
    }
  },
  onUnload() {
    if (this.data.defalutSecond) {
      this.destroyTimer()
      http.put(`/tomatoes/${this.data.tomatoe.id}`, {
        description: "退出放弃",
        aborted: true
      })
    }
  }
})