Page({

  data: {
    message: "我是第一条消息",
    condition: true,
    arr: [
      {
        id: 1,
        text: "内容1"
      },
      {
        id: 2,
        text: "内容2"
      },
      {
        id: 3,
        text: "内容3"
      },
    ],
    str: "我是一条信息",
    arr123: [1,2,3,4],
    obj:{id:1,text:"我是信息1"},
    state: true
  },

  onLoad: function (options) {
    
  },
  reverStr:function(){
    this.setData({str:this.data.str.split('').reverse().join('')})
  },
  pushNumber:function(){
    let last = this.data.arr123[this.data.arr123.length - 1] + 1
    let newArr = [last]
    this.data.arr123 = this.data.arr123.concat(newArr)
    this.setData({arr123: this.data.arr123})
  },
  changeMesg(){
    this.setData({"obj.text": "我是信息2"})
  },
  changeColor(){
    this.setData({ state: !this.data.state })
  },
  onReady: function () {

  },

  onShow: function () {

  },

  onHide: function () {

  },

  onUnload: function () {

  },

  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})