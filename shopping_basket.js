const Candy = require("./candy");

class ShoppingBasket {
    constructor() {
      this.basket = [];
    }
  
    addItem(objcandy) {
      this.basket.push(objcandy);
      console.log(this.basket);
    }

    getTotalPrice() {
      const price = this.basket.map(basket => basket.getPrice()) 
      let sum = 0;
      price.forEach(item => {
        sum += item;
      });
      console.log(sum);
      }
    }

  module.exports = ShoppingBasket;

