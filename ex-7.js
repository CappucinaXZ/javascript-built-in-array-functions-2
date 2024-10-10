function isPalindrome(string) {
  // Start coding here
  let a = string.toLowerCase().split("").reverse().join("")
  return a === string
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false