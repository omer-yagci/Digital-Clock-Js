const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const text = document.querySelector("#text");

const myDateFunc = () => {
  let date = new Date();

  let hourFromDate = date.getHours();
  let minuteFromDate = date.getMinutes();
  let secondFromDate = date.getSeconds();

  hour.innerText = `${hourFromDate.toString().padStart(2, 0)}:`;
  minute.innerText = `${minuteFromDate.toString().padStart(2, 0)}:`;
  second.innerText = `${secondFromDate.toString().padStart(2, 0)} `;
  text.innerText = +hour.innerText / 12 < 1 ? "A.M" : "P.M.";
};
setInterval(() => {
  myDateFunc();
}, 1000);
