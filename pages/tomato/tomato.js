const { http } = require('../../utils/http.js');

Page({
  timer: null,
  data: {
    defalutSecond: 5,
    time:"",
    timerStatus: 'stop',
    confirmVisible: false,
    againBottonVisible: false,
    confirmFinishedVisible: false,
    tomatoe:{}
  },
  onShow: function () {
    this.setTime()
    http.post('/tomatoes').then(response=>{
      this.setData({ tomatoe: response.data.resource })
    })
  },
  setTime(){
    this.setData({timerStatus:'stop'})
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
    this.setData({ timerStatus: 'start' })
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
  },
  setStart(){
    this.setTime()
  },
  confirmAbandon(event){
    let content = event.detail
    http.put(`/tomatoes/${this.data.tomatoe.id}`,{
      description:content,
      aborted:true
    })
    .then(reponse=>{
        wx.navigateBack({ top: -1, })
    })
    // 此处实现返回上一页
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
    this.data.defalutSecond = 5
    this.setTime()
  },
  confirmFinshed(event){
    let content = event.detail
  },
  confirmCancel(){
    this.setData({ confirmFinishedVisible: false})
  },
  onHide(){
    this.destroyTimer()
    http.put(`/tomatoes/${this.data.tomato.id}`, {
      description: "退出放弃",
      aborted: true
    })
  },
  onUnload(){
    this.destroyTimer()
    http.put(`/tomatoes/${this.data.tomatoe.id}`,{
      description:"退出放弃",
      aborted:true
    })
  }
})