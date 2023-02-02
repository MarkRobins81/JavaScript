const User = require('./user')

const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];

class UserBase {
    constructor(name) {
      this.name = name;
    }
  
    getName() {
      let users = [];  
        this.name.map(user => users.push(user.getName()));
        return users;
    }

    count() {

        return users.length;

    }
  
    getIntroduction() {
    
      return this.name.map(user => user.getIntroductions()) 

    }
  }
  newbase = new UserBase(users);
  console.log(newbase.getName());
  console.log(newbase.getIntroduction());
  console.log(newbase.count());
  module.exports = UserBase;