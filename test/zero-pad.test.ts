import "../src/index";

describe("Zeropad test", () => {
  test("String class zero padding", () => {
    const testString = "test";
    const expectString = testString.zeroPad(5);
    expect(expectString).toBe("0test");
  });

  test("Number class Zero padding", () => {
    const testNumber = 10;
    const expectNumber = testNumber.zeroPad(4);
    expect(expectNumber).toBe("0010");
  });
});
