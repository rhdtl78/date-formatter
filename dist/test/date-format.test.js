"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/index");
function logging(testCase, testValue, passingValue) {
    console.log("[" + testCase + "] \n\ttest with '" + testValue + "'. \n\tthis should be '" + passingValue + "'");
}
describe("Date format test", function () {
    var testDate = new Date("2020/01/02 00:01:02");
    var testCases = [
        {
            pattern: "yyyy",
            passingValue: "2020",
        },
        {
            pattern: "yy",
            passingValue: "20",
        },
        {
            pattern: "MM",
            passingValue: "01",
        },
        {
            pattern: "M",
            passingValue: "1",
        },
        {
            pattern: "dd",
            passingValue: "02",
        },
        {
            pattern: "d",
            passingValue: "2",
        },
        {
            pattern: "HH",
            passingValue: "00",
        },
        {
            pattern: "H",
            passingValue: "0",
        },
        {
            pattern: "mm",
            passingValue: "01",
        },
        {
            pattern: "m",
            passingValue: "1",
        },
        {
            pattern: "ss",
            passingValue: "02",
        },
        {
            pattern: "s",
            passingValue: "2",
        },
        {
            pattern: "a/c",
            passingValue: "오전",
        },
        {
            pattern: "E",
            passingValue: "목",
        },
        {
            pattern: "yyyy-MM-dd HH:mm:ss a/c E",
            passingValue: "2020-01-02 00:01:02 오전 목",
        },
    ];
    testCases.forEach(function (testCase) {
        var pattern = testCase.pattern, passingValue = testCase.passingValue;
        test("test pattern " + pattern, function () {
            var testingValue = testDate.format(pattern);
            expect(testingValue).toBe(passingValue);
        });
    });
});
