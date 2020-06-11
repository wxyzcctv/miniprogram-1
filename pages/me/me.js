// pages/me/me.js
Page({

  data: {
    tab:"tomato",
    lists:{
      "周三":[
        {time:"14:00",text:"英雄都是战胜自己畏惧心理的人，这并不是一件容易的事儿",id:1},
        {time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:2},
        {time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:3},
        {time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:4}
      ],
      "周四":[{time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:1}],
      "周五":[{time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:1}],
      "周六":[{time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:1}],
      "周天":[{time:"14:00",text:"英雄都是战胜自己畏惧心理的人",id:1}]
    }
  },

  onLoad: function (options) {

  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name})
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