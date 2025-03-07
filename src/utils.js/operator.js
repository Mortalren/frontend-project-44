const randomOperation = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2; break
    case '-':
      return number1 - number2; break
    case '*':
      return number1 * number2; break
    default:
      return false; break
  }
};

export default randomOperation;
