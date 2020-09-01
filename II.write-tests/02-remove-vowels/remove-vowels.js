function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function (character) {
    const vowels = ["a", "A", "o", "O", "e", "E", "u", "U", "i", "I"];
    if (vowels.includes(character)) {
      result.push("");
    } else {
      result.push(character);
    }
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?

  The result for the original code was "_a_ue_" which was not removing vowels as described
  Modified to work as suggested and inlcluded Capital vowels
*/
