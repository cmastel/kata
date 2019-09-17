const urlEncode = function(text) {
  let newString;
  
  // remove any initial spaces
  let x = 0;
  while (text[x] === " ") {
    text = text.substr(x + 1, text.length);
  };

  // remove any trailing spaces
  let y = text.length - 1;
  while (text[y] === " ") {
    text = text.substr(0, text.length - 1);
    y = text.length - 1;
  };

  // loop through the string, and replace any spaces
  for (let i = 0; i < text.length; i++) {
    if (text[i] === " ") {
      newString = text.substr(0, i) + "20%" + text.substr(i + 1, text.length);
      text = newString;
    };
  };
  return text;
};

// check function with sample strings
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("   Lighthouse Labs   "));
console.log(urlEncode("blue is greener than purple for sure"));
