let numberOfVowels = function(data) {
// input: data (string)
// return: vowelCount (number)

let vowelCount = 0; // initialize vowelCount at 0
const vowels = ['a', 'e', 'i', 'o', 'u']; // create an array of vowels
for (let i = 0; i < data.length; i++) {
  // check each letter in data to see if it matches a value in the
  // vowels array
  if (vowels.includes(data[i])) {
    vowelCount++; // if data[i] is a vowel, increment vowelsCount
  };
};

return vowelCount;
};

// check function with sample strings
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));