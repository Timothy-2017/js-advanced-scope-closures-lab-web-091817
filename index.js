function produceDrivingRange(blockRange) {
  return function(num1, num2) {
      let number1;
      let number2;
    if (num1.length === 4) {
      number1 = parseInt(num1.slice(0, 2), 10);
    } else {
      number1 = parseInt(num1.slice(0, 1), 10);
    }
    if (num2.length === 4) {
      number2 = parseInt(num2.slice(0, 2));
    } else {
      number2 = parseInt(num2.slice(0, 1));
    }

    let total = number1 - number2;

    let numberDiff = Math.abs(total);
    console.log(numberDiff)
    if (blockRange >= numberDiff) {
      let diff = blockRange - numberDiff;
      return `within range by ${diff}`;
    } else {
      let diff = numberDiff - blockRange;
      return `${diff} blocks out of range`;
    }
  }
}

function produceTipCalculator(decimal) {
  return function(base) {
    return decimal * base;
  }
}
