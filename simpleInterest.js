new Vue ({
  el: '#app',
  data:{
    principal: null,
    rate: null,
    time: null,
  },
  methods:{
    result: function(){
      let simpleInterest= (this.principal*this.rate*this.time)/100;
      return simpleInterest;
    }
  }
})
    
