function talkingCalendar(data) {
  let date = data.split("/");
  let monthNames = ["January", "February", "March", "April", "May",
                    "June", "July", "August", "September", "October",
                    "November", "December"];

  let month = monthNames[date[1]-1];

  let day = date[2];
  let dayEnding = "";
  switch (day) {
    case "01": dayEnding = "st, "; break;
    case "02": dayEnding = "nd, "; break;
    case "03": dayEnding = "rd, "; break;
    case "21": dayEnding = "st, "; break;
    case "22": dayEnding = "nd, "; break;
    case "23": dayEnding = "rd, "; break;
    case "31": dayEnding = "st, "; break;
    default: dayEnding = "th, ";
  }
  if (day[0] === "0") {
    day = day[1];
  }

  let year = date[0];
  return month + " " + day + dayEnding + year;
}



console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
console.log(talkingCalendar("1987/08/01"));