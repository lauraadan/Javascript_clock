const deg = 6;
const hr = document.querySelector('#hour');
const mn = document.querySelector('#min');
const sc = document.querySelector('#sec');

setInterval(() => {

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

})