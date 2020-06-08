Component({
  properties:{
    visible:{
      type:Boolean,
      value:true
    },
    placeholder:{
      type:String,
      value:""
    }
  },
  data:{
    value:""
  },
  methods:{
    confirm(event){
      this.triggerEvent('confirm',this.data.value)
      // this.triggerEvent('confirm',123) 此句是将confirm这个函数传递给调用这个组件的父组件，后面一个123表示的是传递的参数
    },
    cancel(event){
      this.triggerEvent('cancel','')
    },
    watchValue(event){
      this.data.value = event.detail.value
    }
  }
})