function isPalindrome(string) {
  // Start coding here
  const reversedString = string.split('').reverse().join('');
  return string === reversedString;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false