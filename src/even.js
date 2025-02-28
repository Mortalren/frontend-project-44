import readlineSync from 'readline-sync';
import {name} from './cli.js'

const evenNumber = () => {
  const min = 1;
  const max = 20;
  let attemps = 3 
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(`Question: ${randomNum}`);
  While (attempts > 0) {
    const userAns = readlineSync.question(`Question: ${randomNum}`);
    if ((randomNum % 2 === 0 && userAns === 'yes') || (randomNum % 2 !== 0 && userAns === 'no')) {
      return 'Correct!';
    }
    if (randomNum % 2 === 0 && userAns === 'no') {
      return `'no' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}`;
    }
    return `'yes' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}`;
  }
  attemps -=1;
  return `Congradulation, ${name}!`;
};

export default evenNumber;
