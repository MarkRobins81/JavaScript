const doubleCall=(callback) => {
    callback();
    callback();
}

// Example behaviour
const sayHello = () => {
    console.log("Hello!");
  };
  
  doubleCall(sayHello); // Should print 'Hello!' twice.