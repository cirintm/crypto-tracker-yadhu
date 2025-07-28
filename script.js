const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

async function fetchData() {
  try {
  const response = await fetch(API_URL);
    const data = await response.json();
    const tbody = document.querySelector("#cryptoTable tbody");
   data.forEach((coin, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${coin.name}</td>
                <td>${coin.symbol.toUpperCase()}</td>
        <td>$${coin.current_price.toLocaleString()}</td>
        <td>$${coin.market_cap.toLocaleString()}</td>
