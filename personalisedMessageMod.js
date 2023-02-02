const namesAndDiscounts = [
    { name: 'Anna', discount: 50 },
    { name: 'Laura', discount: 40 },
    { name: 'Josh', discount: 30 },
    { name: 'Min', discount: 50 },
    { name: 'Karla', discount: 60 },
    { name: 'Fred', discount: 99 },
  ];
  
  

const generateMessage = namesAndDiscounts.map(obj => `Hi ${obj.name}! ${obj.discount}% off our best candies for you today!`) 
    console.log(generateMessage);

module.exports = generateMessage;
