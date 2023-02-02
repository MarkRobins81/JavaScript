
const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'erewrwerwerwerwer',
    '12345678901'
   
  ];
  

const checkLength = (number) => {
    if (number.length <= 10){
        return true;
    }
    else {
        return false;
    }
}

const filterLongNumbers = (numbers) => {
    return numbers.filter(checkLength);
}


console.log(filterLongNumbers(numbers));
module.exports = checkLength;
