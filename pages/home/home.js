Page({

  data: {
    visible:false,
    lists:[
      { id:1, text:"你好，我今天的计划1", finished:true },
      { id:2, text:"你好，我今天的计划2", finished:true },
      { id:3, text:"你好，我今天的计划3", finished:false },
      { id:4, text:"你好，我今天的计划4", finished:false },
      { id:5, text:"你好，我今天的计划5", finished:true },
      { id:6, text:"你好，我今天的计划6", finished:false },
    ]
  },
  confirm(event){
    let content = event.detail
    if(content){
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false}]
      let newLists = todo.concat(this.data.lists)
      this.setData({ lists: newLists })
      this.hiddenConfirm()
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