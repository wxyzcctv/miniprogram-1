const { http } = require('../../utils/http.js')

Page({

  data: {
    visible:false,
    lists:[]
  },
  onShow(){
    http.get('/todos').then(response=>{
      this.setData({ lists: response.data.resources })
    })
  },
  confirm(event){
    let content = event.detail
    if(content){
      http.post('/todos', {
        completed: false,
        description: content
      })
      .then(response=>{
        console.log(response)
        let todo = [response.data.resource]
        let newLists = todo.concat(this.data.lists)
        this.setData({ lists: newLists })
        this.hiddenConfirm()
      })
    }
    // 按下确认键，增加内容
  },
  destroyItem(e){
    let index = e.currentTarget.dataset.index
    this.data.lists[index].finished = true
    this.setData({ lists: this.data.lists })
    // 按下选项，选项转换为true
  },
  hiddenConfirm(){
    this.setData({visible:false})
  },
  showConfirm(){
    this.setData({ visible: true})
  }
})