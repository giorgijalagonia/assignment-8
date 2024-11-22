function expo(firstNumber, secondNumber, callback) {

  if (secondNumber === 1) {
    return callback(firstNumber);
  }

  return expo(firstNumber, secondNumber - 1, (res) => callback(firstNumber * res));
}

expo(5, 3, (result) => {
  console.log(result);
});
