const monthEl= document.querySelector('.month');
const weekEl= document.querySelector('.week');
const dateEl= document.querySelector('.date');
const yearEl= document.querySelector('.year');

const date= new Date(); // a new Date object with the current date and time.
const month= date.getMonth();// returns the month (0-11). January is 0, February is 1, and so on

monthEl.innerText= date.toLocaleString('en', {
    month : 'long' // this converts the month number to month name, like "January" or "February".
})
weekEl.innerText= date.toLocaleString('en', {
    weekday : "long" // Converts the weekday number to weekday name, like "Monday", "Tuesday", etc
})
dateEl.innerText= date.getDate() // returns the current day of the month (1-31)
yearEl.innerText= date.getFullYear() // returns the current year 