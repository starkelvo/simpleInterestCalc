
    new Vue ({
      el: "#calculator",
      data: {
          price: "",
          rate: "",
          time: ""
      },
      computed: {
          result: function(){
            return (this.price * this.rate * this.time)/100;
          }
      }
  });