// file: user.js

class User {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      return this.name;
    }
  
    getIntroductions() {
      return "Hi, my name is " + this.name;
    }
  }

  module.exports = User;