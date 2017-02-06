/**
 *
 */
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(num1, num2){
    "use strict";
  if(num1 > num2){
    return (num1);
  } else {
    return (num2);
  }
}
console.assert(max(5 , 82) == 82);
    //...


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    "use strict";
    // ...
    if(num1 > num2 && num1 > num3){
      return (num1);
    }
    if(num2 > num1 && num2 > num3){
      return (num2);
    }
    if(num3 > num1 && num3 > num2){
      return (num3);
    }
  }
console.assert(maxOfThree(12, 234, 912) == 912);

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowel = ["a", "e", "i", "o", "u"];

    for (var p = 0; p < vowel.length; p++) {

      if(char === vowel[p]){
        return true;
      }
    }
    return false;
  }

console.assert(isVowel("d") === false);


// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  "use strict";
  var newString = "";
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r','s','t', 'v', 'w', 'x', 'y', 'z'];

  for (var i = 0; i < phrase.length; i++) {
    var character = phrase.charAt(i);
    if(consonants.indexOf(character) == -1) {
      newString += character;
    } else {
      newString += character + 'o' + character;
    }
  }
  return newString;
}

console.assert(rovarspraket("this is fun") == "tothohisos isos fofunon");

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(numbers){
    "use strict";
    var amount = 0;
    for (var i = 0; i < numbers.length; i++) {
      amount = (amount + numbers[i]);
    }
    return amount;
}
console.assert(sum([1,2,3,4]) == 10);

function multiply(numbers){
    "use strict";
    var amount = 1;
    for (var i = 0; i < numbers.length; i++) {
      amount = (amount * numbers[i]);
    }
    return amount;
}
console.assert(multiply([1,2,3,4]) == 24);
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(wordy) {
    "use strict";
    var text = "";

    for (var i = wordy.length - 1; i >= 0; i--) {
      text = text + wordy[i];
    }
return text
}
console.assert(reverse('jag testar') == 'ratset gaj');

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
var arrayOfWords = ['hey', 'howdy', 'bonjour', 'hi'];

function findLongestWord(words){
  "use strict";
  var count = 0;
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > count) {
      count = words[i].length;
    }
  }
  return count;
};

console.assert(findLongestWord(arrayOfWords) === 7);
// console.assert(findLongestWord(arrayOfWords) === leoeoe);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
// if(num1 > num2 && num1 > num3){
//   return (num1);



function filterLongWords(array,  num){
  "use strict";
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    var word = array[i];

    if(word.length > num) {
      newArray.push(word);
    }
  }
  return newArray;
}

// filterLongWords(['cool', 'neat', 'noice'], 4)


// console.log(filterLongWords(arrayOfWords, 4));
// //
console.assert(filterLongWords(arrayOfWords, 4)[0] == "howdy");
console.assert(filterLongWords(arrayOfWords, 4)[1] == "bonjour");

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  "use strict";
  //create an empty object to add frequency of each character//
  var freqList = {};
  //this is to loop through entire length of string//
  for (var i = 0; i < string.length; i++) {
    var char = string.charAt(i)
    if (freqList[char]) {
      freqList[char]++
    } else {
      freqList[char] = 1;
    }
  }
  return freqList;
}

// console.log(charFreq("abbabcbdbabdbdbabababcbcbab"));

console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['a'] == 7);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['b'] == 14);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['c'] == 3);
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab")['d'] == 3);
