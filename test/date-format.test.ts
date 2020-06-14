import "../src/index";

function logging(testCase: any, testValue: any, passingValue: any): void {
  console.log(
    `[${testCase}] \n\ttest with '${testValue}'. \n\tthis should be '${passingValue}'`
  );
}

describe("Date format test", () => {
  const testDate = new Date("2020/01/02 13:01:02");

  const testCases = [
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
      passingValue: "13",
    },
    {
      pattern: "H",
      passingValue: "13",
    },
    {
      pattern: "hh",
      passingValue: "01",
    },
    {
      pattern: "h",
      passingValue: "1",
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
      passingValue: "오후",
    },
    {
      pattern: "E",
      passingValue: "목",
    },
    {
      pattern: "yyyy-MM-dd HH:mm:ss a/c E",
      passingValue: "2020-01-02 13:01:02 오후 목",
    },
  ];

  testCases.forEach((testCase) => {
    const { pattern, passingValue } = testCase;

    test(`test pattern ${pattern}`, () => {
      const testingValue = testDate.format(pattern);
      expect(testingValue).toBe(passingValue);
    });
  });
});
