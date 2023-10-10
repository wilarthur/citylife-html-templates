const currentDate = document.getElementById("current_date");
const currentTime = document.getElementById("current_time");

let date = new Date();
let getCurrentDate = date.toLocaleDateString("en-UK", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
let getCurrentTime =
  "" + date.toLocaleTimeString("en-UK", { timeStyle: "short", hour12: "true" });

currentDate.innerText = getCurrentDate;
currentTime.innerText = getCurrentTime;
