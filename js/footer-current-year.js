const CURRENT_YEAR = document.querySelector('#footer-current-year');

let getTimes = new Date;
let currentYear = getTimes.getFullYear();

CURRENT_YEAR.innerHTML = currentYear;