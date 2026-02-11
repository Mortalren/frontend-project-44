import readlineSync from 'readline-sync'

const evenNumber = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  const questionsCount = 3

  for (let i = 0; i < questionsCount; i += 1) {
    const min = 1
    const max = 100
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(`Question: ${randomNum}`)
    const userAns = readlineSync.question('Your answer: ')

    const isEven = randomNum % 2 === 0
    const correctAnswer = isEven ? 'yes' : 'no'

    if (userAns !== 'yes' && userAns !== 'no') {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    if ((isEven && userAns === 'yes') || (!isEven && userAns === 'no')) {
      console.log('Correct!')
    }
    else {
      console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }

  console.log(`Congratulations, ${name}!`)
}
export default evenNumber
