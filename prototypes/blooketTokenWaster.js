function dcrstokens() {
  document.getElementsByClassName('Packs_packOverlay__GsAVz')[0].click();
  setTimeout(function() {
    document.getElementsByClassName('_front_mlio2_65')[1].click();
    setTimeout(function() {
      document.getElementsClassName('OpeningAnim_openPack__378FJ')[0].click();
    }, 500);
  }, 500);
}
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
