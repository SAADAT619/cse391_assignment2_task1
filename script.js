var quotes = ["The best way to predict the future is to create it.", "The journey of a thousand miles begins with a single step.", "The only way to do great work is to love what you do.", "If you don't like something, change it. If you can't change it, change your attitude."];
var currentQuote = quotes[Math.floor(Math.random() * quotes.length)];

function changeQuote() {
  currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = currentQuote;
  document.getElementById("author").innerHTML = "- Unknown";
}

document.getElementById("blue").onclick = function() {
  changeColor("#0000ff");
};

document.getElementById("green").onclick = function() {
  changeColor("#00ff00");
};

document.getElementById("red").onclick = function() {
  changeColor("#ff0000");
};

document.getElementById("yellow").onclick = function() {
  changeColor("#ffff00");
};

function changeColor(color) {
  document.getElementById("quote-box").style.border = "1px solid " + color;
  document.getElementById("quote").style.color = color;
  document.getElementById("author").style.color = color;
}

window.onload = function() {
  changeQuote();
};
