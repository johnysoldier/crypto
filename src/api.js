//const API_KEY =
//  "c96cd261f4388f74aa24c4df02e83a8e6c48bbff70fbf3146d5f3295ca6b8675";

export const loadTicker = (tickerName) =>
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=${tickerName}&tsyms=USD`
  ).then((r) => r.json());
