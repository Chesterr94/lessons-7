const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const cashbox = getAveragePriceGoods => {

  let price = 0;
  let quantity = 0;

  for(i = 0; i < getAveragePriceGoods.length; i++) {
    price += getAveragePriceGoods [i][1];
    quantity += getAveragePriceGoods [i][0];
  }

return price / quantity;
};

const averagePrice = cashbox(allCashbox);

console.log(averagePrice);