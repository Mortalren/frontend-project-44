import readlineSync from 'readline-sync';

const greetingMessage = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hi, ${name}`);
};

export const name = readlineSync.question('May I have your name? ');
export default greetingMessage;
