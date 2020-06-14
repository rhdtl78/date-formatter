"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/index");
describe("Zeropad test", function () {
    test("String class zero padding", function () {
        var testString = "test";
        var expectString = testString.zeroPad(5);
        expect(expectString).toBe("0test");
    });
    test("Number class Zero padding", function () {
        var testNumber = 10;
        var expectNumber = testNumber.zeroPad(4);
        expect(expectNumber).toBe("0010");
    });
});
