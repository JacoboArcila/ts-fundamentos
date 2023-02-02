(() => {
  const calcTotal = (prices: number[]) => {
    let total = 0;
    prices.forEach((i) => {
      total += i;
    })
    return total;
  }

  const rta = calcTotal([1,5,7,45]);
  console.log(rta);
})()
