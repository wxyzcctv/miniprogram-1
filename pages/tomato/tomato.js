
Page({
  timer: null,
  data: {
    defalutSecond: 1,
    time:"",
    stop:true,
    confirmVisible: false,
    againBottonVisible: false
  },
  onShow: function () {
    this.showTime()
    this.setTime()
  },
  setTime(){
    this.timer = setInterval(() => {
      this.data.defalutSecond = this.data.defalutSecond - 1
      this.showTime()
      if(this.data.defalutSecond === 0){
        this.setData({ againBottonVisible: true })
        return this.destroyTimer()
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
  },
  hiddenConfirm(){
    this.setData({ confirmVisible: false})
  }
  

})