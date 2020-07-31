export function calcPrice(data) {
  if (!data) {
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

export function evalDates(data, option) {
  if (!data) {
    return;
  } else {
    let itemDates = [];
    data.map((item) => {
      itemDates.push(item.lastSoldDate);
    });
    const sortedByDate = itemDates.sort(function (date1, date2) {
      date1 = new Date(date1);
      date2 = new Date(date2);
      if (date1 > date2) return 1;
      if (date1 < date2) return -1;
    });

    if (option === 'all') {
      return sortedByDate;
    } else if (option === 'lastDate') {
      const lastSoldDate = new Date(sortedByDate.pop());
      return lastSoldDate.toLocaleDateString();
    } else if (option === 'firstDate') {
      const firstDate = new Date(sortedByDate.slice(0, 1));
      return firstDate.toLocaleDateString();
    }
  }
}

export function getImage(data, cb) {
  if (!data) {
    return;
  } else {
    let imgArray = [];
    data.forEach((item) => {
      if (item.image) {
        imgArray.push(item.image.imageUrl);
      } else {
        return;
      }
    });
    if (imgArray.length === 0) {
      cb();
    }
    return imgArray;
  }
}
