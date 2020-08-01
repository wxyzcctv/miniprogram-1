// pages/me/me.js
const { http } = require('../../utils/http.js');

Page({

  data: {
    tab:"tomato",
    tomatoes: {},
    todos: {}
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({ tab: name})
  },

  onShow: function () {
    this.fetchTomatoes()
    this.fetchTodos()
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