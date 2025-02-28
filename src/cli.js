import readlineSync from 'readline-sync';

const greetingMessage = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hi, ${name}`);
};

export default greetingMessage;
export const name = readlineSync.question('May I have your name? ');