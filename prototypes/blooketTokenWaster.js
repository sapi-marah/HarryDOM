if (window.location.href === "https://dashboard.blooket.com/market") {
  let fetchedTokens = document.getElementsByClassName('TokenCounter_tokenContainer__wE6XL')[0].textContent;
  let tokens = "";
  var par = fetchedTokens.split(',');
  for (let digit of par) {
    tokens = tokens + digit;
  }
} else {
  alert("Invaild Page");
}
