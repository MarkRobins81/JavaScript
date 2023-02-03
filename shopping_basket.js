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
      const price = this.basket.map(sweet => sweet.getPrice()) 
      let sum = 0;
      price.forEach(item => {
        sum += item;
      });
      return sum;
      }
    }
    // * require the candy class
    // const Candy = require('./candy')
    // * create new instance of Candy class
    // const candy = new Candy('Mars', 1.99)
    // * get the name of the candy by calling getName method from Candy class
    // candy.getName()'
    // 
    // * get the price of the candy by calling getPrice method from Candy class
    // candy.getPrice()'
    // 
    // * require the shopping basket class
    // const ShoppingBasket = require('./shopping_basket')
    // * create a new instance of ShoppingBasket class
    // const basket = new ShoppingBasket();
    // * add the candy object to the addItem method in the basket class
    // basket.addItem(candy)
    // * add the candy2 object to the addItem method in the basket class
    // basket.addItem(candy2)
    // * get the total price of all candies added by calling getTotalPrice from basket class
    // basket.getTotalPrice();


  module.exports = ShoppingBasket;

