import readlineSync from 'readline-sync'
import getRandomNumber from './utils.js/randomn.js'

function gcd(a, b) {
  if (a === 0) {
    return b
  }
  if (b === 0) {
    return a
  }

  return gcd(b, a % b)
}

const getResultGcd = (name) => {
  console.log('Find the greatest common divisor of given numbers.')
  const questionsCount = 3

  for (let i = 0; i < questionsCount; i += 1) {
    const random1 = getRandomNumber(1, 100)
    const random2 = getRandomNumber(1, 100)
    const correct = gcd(random1, random2)

    console.log(`Question: ${random1} ${random2}`)
    const answer = readlineSync.question('Your answer: ')

    if (Number(answer) === correct) {
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
export default getResultGcd
