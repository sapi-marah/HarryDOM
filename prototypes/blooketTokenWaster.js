if (window.location.href === "https://dashboard.blooket.com/market") {
  let fetchedTokens = document.getElementsByClassName('TokenCounter_tokenContainer__wE6XL')[0].textContent;
  let tokens = "";
  var par = fetchedTokens.split(',');
  for (let digit of par) {
    tokens = tokens + digit;
  }
  tokens = Number(tokens);
  if (tokens < 25) {
    //do that maybe in 3217387317 years.
  } else {
    
  }
} else {
  alert("Invaild Page");
}
