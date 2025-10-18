const pad = (n) => String(n).padStart(2, "0");

console.log(34); //number

console.log(String(34)); // string

console.log(String(34).padStart(3, 0));

const date = new Date();
console.log(date);

console.log(date.getFullYear()); // this gives us the year
console.log(date.getHours()); // this gives us the time is hours
console.log(date.getMinutes()); // this gives us the time in minutes too
console.log(date.getMonth()); // returns the mineth minus 1, becuase js reads january as 0
