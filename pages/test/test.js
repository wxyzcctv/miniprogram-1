// pages/text/text.js
Page({
  data: {
    message: "我是message",
    content: 1,
    ifshow: true,
    arr:[
      {
        id:1,
        text: "数据1"
      },
      {
        id:2,
        text: "数据2"
      },
      {
        id:3,
        text: "数据3"
      }
    ],
    str: "我是一条消息",
    arr1: [1,2,3,4],
    obj:{id:1,text:"我是信息1"},
    xx: true
  },
  onLoad: function (options) {
    console.log(options)
  },
  onReady: function () {

  },
  onShow: function () {
    
  },
  reverseStr(){
    this.setData({str: this.data.str.split('').reverse().join('')})
  },
  inputItem(){
    let newItem = this.data.arr1[this.data.arr1.length - 1] + 1
    this.setData({ arr1: this.data.arr1.concat(newItem) })
  },
  changeObj(){
    this.setData({"obj.text":"我是信息2"})
  },
  changeColor(){
    this.setData({ xx: !this.data.xx })
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