const getRandomNumber = (
  min = 1,
  max = 100,
) => {
  const randomNumber = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNumber);
};

export default getRandomNumber;
