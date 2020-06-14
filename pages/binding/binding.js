// const http = require('../../lib/http.js').http;

Page({
  data: {
    account: "",
    password_digest: "",
    isBinding: true
  },
  watchAccount(event){
    
  },
  watchPassword(event){
    
  },
  goToSignUp(){
    this.setData({ isBinding: false})
  },
  goToBinding(){
    this.setData({ isBinding: true})
  }
})