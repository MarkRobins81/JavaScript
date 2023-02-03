const makersBiggestFan = (callback) => {
    return callback("Makers");
  };

  const convertToCaps = (string) => {
    return string.toUpperCase();
  };

  const exclaim = (string) => {
    return string + "!";
  };


  
  const res1 = makersBiggestFan(convertToCaps);
  console.log("res1:", res1);
  
  const res2 = makersBiggestFan(exclaim);
  console.log("res2:", res2);

  const res3 = makersBiggestFan((string) => {
    return string + string;
  });
  console.log(res3)