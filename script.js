function isPalindrome(s) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the string
  let reversed = s.split('').reverse().join('');

  // Check if the reversed string is equal to the original string
  return s === reversed;
}

function checkPalindrome() {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  if (isPalindrome(input)) {
    output.innerHTML = "true";
  } else {
    output.innerHTML = "false";
  }
}
