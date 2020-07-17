export function calcPrice(data) {
  if (!data) {
    console.log('no data provided');
    return;
  } else {
    let prices = [];
    data.map(async (item) => {
      prices.push(parseFloat(item.lastSoldPrice.value));
    });
    const sum = prices.reduce((a, b) => a + b, 0);
    const averagePrice = sum / prices.length;
    return averagePrice.toFixed(2);
  }
}
