import readlineSync from 'readline-sync';

export const evenNumber = (name) => {
  const min = 1;
  const max = 20;
  let attempts = 3;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

  while (attempts > 0) {
    console.log(`Question: ${randomNum}`);
    const userAns = readlineSync.question('Is the number even?');

    if ((randomNum % 2 === 0 && userAns === 'yes') || (randomNum % 2 !== 0 && userAns === 'no')) {
      return 'Correct!';
    }
    if (randomNum % 2 === 0 && userAns === 'no') {
      return "'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again!";
    }
    if (randomNum % 2 !== 0 && userAns === 'yes') {
      return "'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again!";
    }

    attempts -= 1;
    if (attempts > 0) {
      console.log(`You have ${attempts} attempts left.`);
    }
  }

  return `Congradulation, ${name}!`;
};
