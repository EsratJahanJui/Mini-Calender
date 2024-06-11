const date = document.getElementById("date");
const day = document.getElementById("day");

const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
 

// Array of days of the week
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Array of months of the year
const allMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();
 
