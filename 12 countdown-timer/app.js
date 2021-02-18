const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const givaway = document.querySelector('.givaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

// ======= set date 10 days from now ======
// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();
//
// const futurDate = new Date(tempYear,tempMonth, tempDay + 10, 11, 30, 0)
// ========== end of +10 days =============

const futurDate = new Date(2020,7,31,24,0,0);

format = (item) => {
  if(item < 10){
    return (item = `0${item}`);
  }
    return item;
}

const year = futurDate.getFullYear();
const hours = format(futurDate.getHours());
const mins = format(futurDate.getMinutes());
const month = months[futurDate.getMonth()];
const date = futurDate.getDate();
const weekday = weekdays[futurDate.getDay()];

givaway.textContent = `givaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${mins}am`;

//futur time in miliseconds (ms)
const futurTime = futurDate.getTime();

getRemainingTime = () => {
  const today = new Date().getTime();
  const t = futurTime - today;

  // 1sec = 1000ms
  // 1min = 60s
  // 1hr = 60min
  // 1d = 24h

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;

  //calculate all values
  let days = t/oneDay
  days = Math.floor(days);
  // let hours = t/oneHour;
  // hours = Math.floor(hours);
  // console.log(hours % 24);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];
  // show 0 when less than 10

  items.forEach((item,index) => {
    item.innerHTML = format(values[index]);
  });

  if(t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">It is Money Time!<h4>`;
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
console.log(futurDate);
