function solve() {
  let text = document.getElementById('text').value.toLowerCase().trim().split(' ');
  let finalText = '';
  let currentCase = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  if (currentCase != 'Camel Case' && currentCase != 'Pascal Case') {
    finalText = "Error!";
  } else {
    for (let word of text) {
      finalText += word[0].toUpperCase() + word.slice(1);
    }
    
    if (currentCase == 'Camel Case') {
      finalText = finalText[0].toLowerCase() + finalText.slice(1);
    }
  }

  result.textContent = finalText;


}