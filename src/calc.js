import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Calcular = () => {
  const FirstN = getRandomInt(1, 200);
  const SecondN = getRandomInt(1, 200);
  const userAns = readlineSync.question('What is the result of the expression?');
  let attempts = 3;

  const ops = ['+', '-', '*'];
  const opIndex = Math.random() * 3;
  const operator = ops[opindex];
  let result;
  switch (operator) {
    case 0: result = FirstN + SecondN; break;
    case 1: result = FirstN - SecondN; break;
    case 2: result = FirstN * SecondN; break;
  }

  while (attempts > 0) {
    console.log(`Question: ${result}`);
    if (userAns === result) {
      console.log(`Your answer: ${userAns}`);
      return 'Correct!';
    }
    if (userAns !== result) {
      return `${userAns} is wrong answer ;(. Correct answer was )`;
    }

    attempts -= 1;
    if (attempts > 0) {
      console.log(`You have ${attempts} attempts left.`);
    }
  }
  return 'Congradulation!';
};
