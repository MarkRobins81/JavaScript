const fizzBuzz = require('./fizzBuzz')

const fizzBuzzUntil = (number) => {
    for (let i = 0 ; i <= number ; i++){
       console.log (fizzBuzz(i));
    }
}

fizzBuzzUntil(10);
module.exports = fizzBuzzUntil;