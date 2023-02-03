

const obnoxiousFn = (callback) => {
    console.log("Executing Callback")
    return callback();
}
  // Example behaviour
const four = obnoxiousFn(() => {
    return 2 + 2;
  }); // Should print 'EXECUTING CALLBACK!!' and return 4
  console.log(four); // Should print 4