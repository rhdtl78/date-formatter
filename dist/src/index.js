"use strict";
String.prototype.zeroPad = function (length) {
    var buffer = this;
    var zeros = new Array(length - buffer.length).fill(0);
    return "" + zeros.join("") + buffer;
};
Number.prototype.zeroPad = function (length) {
    var buffer = this.toString();
    var zeros = new Array(length - buffer.length).fill(0);
    return "" + zeros.join("") + buffer;
};
Date.prototype.format = function (pattern) {
    var currentDate = this;
    var year = currentDate.getFullYear();
    var month = currentDate.getMonth() + 1;
    var date = currentDate.getDate();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDay();
    var weekNames = ["일", "월", "화", "수", "목", "금", "토"];
    return pattern.replace(/yyyy|yy|MM|M|dd|d|HH|H|hh|h|mm|m|ss|s|a\/c|E/g, function (match) {
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
            case "hh":
                return (hours % 12 ? hours % 12 : 12).zeroPad(2);
            case "h":
                return (hours % 12 ? parseInt(String(hours % 12)) : 12).toString();
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
