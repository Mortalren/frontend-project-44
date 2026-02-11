import readlineSync from 'readline-sync'

const greetingMessage = () => {
  const name = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${name}!`)
  return name
}
export default greetingMessage
