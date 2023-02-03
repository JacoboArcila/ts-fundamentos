(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((i) => {
      total += i;
    })
    return total;
  }

  const prinTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
  }

  const rta = prinTotal([1,5,7,45]);
})()
