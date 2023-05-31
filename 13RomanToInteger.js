const romanToInt = (s) => {
    if (typeof(s) !== 'string') {
        return 'Please use input string'
    } else {
        const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];
    if (currentValue >= prevValue) {
      sum += currentValue;
    } else {
      sum -= currentValue;
    }
    prevValue = currentValue;
  }

  return sum;
};
    }
