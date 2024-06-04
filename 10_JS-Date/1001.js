// Get current date and time
const currentDate = new Date();

// Get day, year, month, and hours using Date object methods
const day = currentDate.getDate();
const year = currentDate.getFullYear();
const monthIndex = currentDate.getMonth();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month = monthNames[monthIndex];
const hours = currentDate.getHours();

// Print the results
console.log("Today's Date and Time:", currentDate);
console.log("Day:", day);
console.log("Year:", year);
console.log("Month:", month);
console.log("Hours:", hours);
