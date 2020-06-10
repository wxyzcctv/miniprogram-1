
Page({
  timer: null,
  data: {
    defalutSecond: 1,
    time:"",
    stop:true,
    confirmVisible: false,
    againBottonVisible: false,
    confirmFinishedVisible: false
  },
  onShow: function () {
    this.showTime()
    this.setTime()
  },
  setTime(){
    this.showTime()
    this.timer = setInterval(() => {
      this.data.defalutSecond = this.data.defalutSecond - 1
      this.showTime()
      if(this.data.defalutSecond <= 0){
        this.setData({ againBottonVisible: true })
        this.setData({ confirmFinishedVisible: true })
        return this.destroyTimer()
        // 在销毁定时器之后需要将跳出函数，就是用return
      }
    }, 1000);
  },
  destroyTimer(){
    clearInterval(this.timer)
    this.timer = null
  },
  showTime(){
    let m = Math.floor(this.data.defalutSecond/60)
      let s = Math.floor(this.data.defalutSecond%60)
      if((m + '').length === 1){
        m = '0' + m
      }
      if((s + '').length === 1){
        s = '0' + s
      }
      this.setData({ time: `${m}:${s}`})
  },
  setStop(){
    this.destroyTimer()
    this.setData({ stop: false})
  },
  setStart(){
    this.setTime()
    this.setData({ stop: true})
  },
  confirmAbandon(event){
    let content = event.detail
  },
  showConfirm(){
    this.setData({ confirmVisible: true })
    this.destroyTimer()
  },
  hiddenConfirm(){
    this.setData({ confirmVisible: false})
    this.setTime()
  },
  againGroup(){
    this.setData({ againBottonVisible: false})
    this.data.defalutSecond = 10
    this.setTime()
  },
  confirmFinshed(event){
    let content = event.detail
    wx.navigateBack({
      top: -1
    })
    // 此处实现返回上一页
  },
  confirmCancel(){
    this.setData({ confirmFinishedVisible: false})
  }
  

})