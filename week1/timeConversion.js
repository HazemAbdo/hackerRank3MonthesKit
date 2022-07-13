const { string, parse } = require("yargs");

function timeConversion(s) {
  // Write your code here
  let [hour, min, sec] = s.split(":");
  let postfix = Array.from(sec).splice(2, 2).join("");
  sec = Array.from(sec).splice(0, 2).join("");
  if (postfix == "AM" && hour == 12) return ["00", min, sec].join(":");
  else if (postfix == "PM" && hour != 12) {
    return [parseInt(hour) + 12, min, sec].join(":");
  } else return [hour, min, sec].join(":");
}
console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("11:59:59PM"));
console.log(timeConversion("11:59:59AM"));
