Component({
  properties:{
    visible:{
      type: Boolean,
      value: false
    },
    placeholder:{
      type: String,
      value: ""
    },
    value:{
      type: String,
      value: ""
    }
  },
  data:{
    _value:""
  },
  lifetimes: {
    attached() {
      if (this.properties.value) {
        this.properties.value = this.data._value
      }
    }
  },
  methods:{
    confirm(event){
      this.triggerEvent('confirm',this.data._value)
      // this.triggerEvent('confirm',123) 此句是将confirm这个函数传递给调用这个组件的父组件，后面一个123表示的是传递的参数
    },
    cancel(event){
      this.triggerEvent('cancel','')
    },
    watchValue(event){
      this.data._value = event.detail.value
    }
  }
})