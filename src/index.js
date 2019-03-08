module.exports = function makeExchange(currency) {
  if (currency < 1) return {};
  if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
  
  let n = currency;
  let obj = {};

  if (n - 50 >= 0) {
    obj.H = Math.floor(n / 50);
    n -= obj.H * 50;
  }

  if (n - 25 >= 0) {
    obj.Q = Math.floor(n / 25);
    n -= obj.Q * 25;
  }

  if (n - 10 >= 0) {
    obj.D = Math.floor(n / 10);
    n -= obj.D * 10;
  }  

  if (n - 5 >= 0) {
    obj.N = Math.floor(n / 5);
    n -= obj.N * 5;
  }

  if (n - 1 >= 0) {
    obj.P = n;
  }
  
  return obj;
}