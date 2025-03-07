import readlineSync from 'readline-sync';
const Prog = (length, firstTerm, difference) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(firstTerm + i * difference);
  }
  return progression;
};

export const progressionGame = (name) => {
  let attemts = 0;
  while (attemts < 3) {
    const minLength = 5;
    const maxLength = 10;
    const length = randomNum(minLength, maxLength);

    const firstTerm = randomNum(1, 10);
    const difference = randomNum(1, 5);
    const progression = Prog(length, firstTerm, difference);
    const hiddenIndex = randomNum(0, length - 1);
    const hiddenValue = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const ans = readlineSync.question('Your answer: ');

    if (ans === hiddenValue.toString()) {
      console.log('Correct!');
      attemts += 1;
    } else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${hiddenValue}. Let's try again, ${name}!`);
      break;
    }

    if (attemts === 3) {
      console.log(`Congratulations! ${name}!`);
    }
  }
};
