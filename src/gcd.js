function gcd(a, b) {
  if (a === 0) { return b; }
  if (b === 0) { return a; }

  return gcd(b, a % b);
}

export const getResultGcd = (name) => {
  let correctCount = 0;
  while (correctCount < 3) {
    const random1 = randomNum(1, 100);
    const random2 = randomNum(1, 100);
    const correct = gcd(random1, random2);

    console.log(`Question:${random1} ${random2}`);
    const ans = parseFloat(readlineSync.question('Your answer:'));

    if (ans === correct) { console.log('Correct!'); correctCount += 1; } else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
Let's try again!, ${name})`); break;
    }
    if (correctCount === 3) {
      console.log(`Congratulations! ${name}`);
      break;
    }
  }
};
