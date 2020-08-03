// pages/me/me.js
const { http } = require('../../utils/http.js');

Page({

  data: {
    userUnLogin:true,
    tab:"tomato",
    tomatoes: {},
    todos: {},
    me: {}
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name})
  },

  onShow: function () {
    if( wx.getStorageSync('me') ){
      this.fetchTomatoes()
      this.fetchTodos()
      this.setData({ me: wx.getStorageSync('me'), userUnLogin: false })
    }else{
      this.setData({ userUnLogin: true })
    }
  },
  fetchTomatoes(){
    http.get('/tomatoes',{ is_group: "yes" })
    .then(response =>{
      this.setData({ tomatoes: response.data.resources})
    })
  },
  fetchTodos(){
    http.get('/todos',{ is_group: "yes"})
    .then( response => {
      this.setData({ todos: response.data.resources})
    })
  },
})