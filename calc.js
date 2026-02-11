import getRandomNumber from './utils.js/randomn.js';
import randomOperation from './utils.js/operator.js';

export const generateRandomExpression = (name) => {
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  const questionsCount = 3;
  for (let i = 0; i < questionsCount; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const operator = operators[getRandomNumber(0, operators.length - 1)];

  console.log(`Question: ${number1} ${operator} ${number2}`)
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = randomOperation(number1, number2, operator);

     if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  
  console.log(`Congratulations, ${name}!`);
}
