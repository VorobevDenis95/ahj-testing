export default function validator(numCard) {
  let i;
  const numCardArr = numCard.split('').map((el) => Number(el));

  // eslint-disable-next-line no-unused-expressions
  (((numCardArr.length - 1) % 2) === 0) ? i = 1 : i = 0;
  for (i; i < numCardArr.length; i += 2) {
    numCardArr[i] *= 2;
    if (numCardArr[i] > 9) {
      numCardArr[i] -= 9;
    }
  }
  const result = numCardArr.reduce((acc, sum) => acc + sum, 0);

  if (result % 10 === 0) {
    return true;
  }
  return false;
}
