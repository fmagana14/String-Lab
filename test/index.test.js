const { capitalize, camelCase, capitalizeWords, allCaps, kebobCase,
    removeExtraSpaces,
    snake } = require("../src/index");
// capitalize
test("test capitalize", () => {
  expect(capitalize("abcd")).toBe("Abcd");
  expect(capitalize("foo bar")).toBe("Foo bar");
  expect(capitalize(" ")).toBe(" ");
});
// camelcase
test("test camelCase", () => {
    expect(camelCase("The game")).toBe("theGame");
    expect(camelCase("foo bar")).toBe("fooBar");
    expect(camelCase("My house")).toBe("myHouse");
});
// capitalizeWords
test("test capitalizeWords", () => {
    expect(capitalizeWords("as i was walking to work")).toBe("As I Was Walking To Work")
    expect(capitalizeWords("as i walk ")).toBe("As I Walk ")
})
// allcaps
test("test lowercase to uppercase", () => {
    expect(allCaps("the game")).toBe("THE GAME");
    expect(allCaps("foo bar")).toBe("FOO BAR");
    expect(allCaps("hello world")).toBe("HELLO WORLD");
});
// kebob test
test("testing kebobcase", () => {
    expect(kebobCase("the game")).toBe("the-game");
    expect(kebobCase("foo bar")).toBe("foo-bar");
    expect(kebobCase("hello world")).toBe("hello-world");
});
// removeExtraSpace Test
test("testing removeExtraSpaces", () => {
    expect(removeExtraSpaces(" the game")).toBe("the game");
    expect(removeExtraSpaces("  foo  bar  ")).toBe("foo bar");
    expect(removeExtraSpaces("     hello  world ")).toBe("hello world");
});
// snake test
test("testing snake", () => {
    expect(snake("the game was fun")).toBe("the_game_was_fun");
    expect(snake("foo bar sucked")).toBe("foo_bar_sucked");
    expect(snake("hello world")).toBe("hello_world");
});