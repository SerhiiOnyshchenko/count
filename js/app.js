const resultEl = document.getElementById("result");
const plusOrMinus = document.getElementById("activ");
const cline = (val) => (resultEl.value = val);
const back = () => (resultEl.value = resultEl.value.slice(0, -2));
let active = "+";
function total() {
  try {
    cline((resultEl.value = eval(resultEl.value)));
  } catch (e) {
    cline("undefined");
  }
}
function addValue(value) {
  resultEl.value === "undefined" || resultEl.value === ""
    ? (resultEl.value = value)
    : (resultEl.value = resultEl.value + active + value);
}
function addValue2(value) {
  plusOrMinus.innerHTML = value;
  active = value;
}
function changeColor(event) {
  document.querySelectorAll("span.active").forEach(function (item) {
    item.classList.remove("active");
  });
  event.target.classList.add("active");
}
// function clock() {
//   const hours = document.getElementById("hour");
//   const minutes = document.getElementById("minutes");
//   const seconds = document.getElementById("seconds");

//   const h = new Date().getHours();
//   const m = new Date().getMinutes();
//   const s = new Date().getSeconds();

//   hours.innerHTML = h;
//   minutes.innerHTML = m;
//   seconds.innerHTML = s;
// }
// const interval = setInterval(clock, 1000);
