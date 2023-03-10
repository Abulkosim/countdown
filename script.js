const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('#countdown');
const year = document.querySelector('#year');


const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
year.textContent = `${currentYear + 1}`;

function updateCountdown() {
  const currentTime = new Date();
  const timeLeft = newYearTime - currentTime;
  const d = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const h = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((timeLeft % (1000 * 60)) / 1000);

  days.innerHTML = d;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}

setInterval(updateCountdown, 10)