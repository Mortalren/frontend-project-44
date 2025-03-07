import IsSimple from './utils.js/Simple.js'
import getRandomNumber from './utils.js/randomn.js'
import readlineSync from 'readline-sync'


let attempts = 3

const Correct = (ans, correctAns) => {
    switch (ans) {
     case correctAns:
        console.log('Correct!') 
        break
     default:
         console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
 Let's try again!)`)
     break
    }
}

export const GetPrime = (name) => {
while (attempts > 0) {
    ques = getRandomNumber()
    UserAns = readlineSync.question(`Question: ${ques}`)
    CorrectAns = IsSimple(ques)
    if (Correct(UserAns, CorrectAns) ){
     attempts -= 1
    }

    if (attempts === 0) {
        console.log('Congratulation!')
        break
    }
} 
}  