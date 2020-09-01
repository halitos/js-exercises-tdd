const removeVowels = require("./remove-vowels");

test("remove vowels from word", function () {
  // Arrange
  var word = "samuel";
  var expected = "sml";
  // Act
  var outcome = removeVowels(word);
  // Assert
  expect(outcome).toEqual(expected);
});
