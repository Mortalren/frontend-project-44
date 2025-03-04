import getRandomNumber from './utils.js/randomn.js';
import randomOperation from './utils.js/operator.js';

const operators = ['+', '-', '*'];
console.log('What is the result of the expression?');

const getRandomOperatorIndex = () => getRandomNumber(0, operators.length - 1);

const generateRandomExpression = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = operators[getRandomOperatorIndex()];

  const question = `Question: ${number1} ${operator} ${number2}`;
  const expectedAnswer = String(randomOperation(number1, number2, operator));

  return { question, expectedAnswer };
};

export default generateRandomExpression;
