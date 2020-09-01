const greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function () {
  // Arrange
  var mentors = ["Irina", "Ashleigh", "Etza"];
  var expected = "Hello Irina Ashleigh Etza";

  // Act
  var result = greetPeople(mentors);

  // Assert
  expect(result).toEqual(expected);
});
