interface String {
  zeroPad: (length: number) => string;
}

interface Number {
  zeroPad: (length: number) => string;
}

interface Date {
  format: (pattern: string) => string;
}

String.prototype.zeroPad = function (length: number): string {
  let buffer = this;
  const zeros = new Array(length - buffer.length).fill(0);
  return `${zeros.join("")}${buffer}`;
};

Number.prototype.zeroPad = function (length: number): string {
  let buffer = this.toString();
  const zeros = new Array(length - buffer.length).fill(0);
  return `${zeros.join("")}${buffer}`;
};

Date.prototype.format = function (pattern: string): string {
  const currentDate = this;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const day = currentDate.getDay();
  const weekNames = ["일", "월", "화", "수", "목", "금", "토"];

  return pattern.replace(/yyyy|yy|MM|M|dd|d|HH|H|mm|m|ss|s|a\/c|E/g, function (
    match: string
  ): string {
    switch (match) {
      case "yyyy":
        return year.toString();
      case "yy":
        return year.toString().slice(2);
      case "MM":
        return month.zeroPad(2);
      case "M":
        return month.toString();
      case "dd":
        return date.zeroPad(2);
      case "d":
        return date.toString();
      case "HH":
        return hours.zeroPad(2);
      case "H":
        return hours.toString();
      case "mm":
        return minutes.zeroPad(2);
      case "m":
        return minutes.toString();
      case "ss":
        return seconds.zeroPad(2);
      case "s":
        return seconds.toString();
      case "a/c":
        return hours / 12 > 1 ? "오후" : "오전";
      case "E":
        console.log(day);
        return weekNames[day];
      default:
        return match;
    }
  });
};
