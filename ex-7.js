function isPalindrome(string) {
  // Start coding here
  let reverseStr = string.split("").reverse().join("");
  if(string === reverseStr){
    return true
  }else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false