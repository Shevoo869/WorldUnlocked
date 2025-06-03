const API_KEY = "fca_live_It0Bw4zGfa0Srmf1IoR2PNMAYm05XeoxN8qRdcqW";

async function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (!amount || isNaN(amount)) {
    document.getElementById("conversionResult").innerText = "Please enter a valid amount.";
    return;
  }

  try {
    const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${from}`);
    const data = await res.json();

    if (data && data.data && data.data[to]) {
      const rate = data.data[to];
      const result = (rate * amount).toFixed(2);
      document.getElementById("conversionResult").innerText = `${amount} ${from} = ${result} ${to}`;
    } else {
      document.getElementById("conversionResult").innerText = "Conversion failed.";
    }
  } catch (err) {
    console.error(err);
    document.getElementById("conversionResult").innerText = "API request failed.";
  }
}
