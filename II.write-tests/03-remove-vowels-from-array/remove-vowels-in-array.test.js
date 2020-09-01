const removeVowelsForWords = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function () {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];
  // Act
  const result = removeVowelsForWords(input);
  // Assert
  expect(result).toEqual(expected);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
