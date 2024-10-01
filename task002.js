const allCashboxs = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const sum = (getAverageValue) => {

  let n = 0;

  let quantity = allCashboxs.length;

  for(i = 0; i < getAverageValue.length; i += 1) {
    n += getAverageValue[i] / quantity;
  };

  return n;
};

const newArry = Math.floor(sum(allCashboxs));

console.log (newArry, 'сумма масива');