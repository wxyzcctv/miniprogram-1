const { http } = require('../../utils/http.js')

Page({
  updateId:'',
  updateIndex:'',
  // 方便在全局里面使用
  data: {
    visibleCreateConfirm: false,
    visibleUpdateConfirm: false,
    updateContent:'',
    lists:[]
  },
  onShow(){
    http.get('/todos?completed=false').then(response=>{
      this.setData({ lists: response.data.resources })
    })
  },
  confirmCreate(event){
    let content = event.detail
    if(content){
      http.post('/todos',{
        completed: false, description: content
      })
      .then(response=>{
        let todo = [response.data.resource]
        let newLists = todo.concat(this.data.lists)
        this.setData({ lists: newLists })
        this.hiddenCreateConfirm()
      })
    }
    // 按下确认键，增加内容
  },
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    http.put(`/todos/${id}`,{
      completed: true
    })
    .then(response=>{
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists })
    })
    // 按下选项，选项转换为true
  },
  changeText(event){
    let {content,id,index} = event.currentTarget.dataset
    this.updateId = id
    this.updateIndex = index
    this.setData({ updateContent: content, visibleUpdateConfirm: true })
    this.showUpdateConfirm()
  },
  confirmUpdate(event){
    let content = event.detail
    http.put(`/todos/${this.updateId}`,{
      description: content
    })
    .then(response=>{
      let todo = response.data.resource
      this.data.lists[this.updateIndex] = todo
      this.setData({ lists: this.data.lists})
      this.hiddenUpdateConfirm()
    })
  },
  hiddenCreateConfirm(){
    this.setData({ visibleCreateConfirm: false })
  },
  showCreateConfirm(){
    this.setData({ visibleCreateConfirm: true})
  },
  hiddenUpdateConfirm(){
    this.setData({ visibleUpdateConfirm: false})
  },
  showUpdateConfirm(){
    this.setData({ visibleUpdateConfirm: true})
  }
})