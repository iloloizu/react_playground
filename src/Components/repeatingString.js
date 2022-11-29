// let me know if the string has any repeating characters

function repeatingString(str) {
  let result = false;
  let char = str[0];
  for (let i = 1; i < str.length; i++) {
    if (char === str[i]) {
      result = true;
    }
  }
  return result;
}

repeatingString("abca");