const phoneNumber = document.querySelector(".phoneNumber");
const randomBtn = document.querySelector(".randomBtn");

const numbers = [
  "+998 99 999 99 99",
  "+998 95 955 55 05",
  "+998 90 875 16 74",
  "+998 88 016 24 32",
  "+998 76 124 32 18",
  "+998 91 364 28 15",
  "+998 33 018 33 24",
  "+998 93 458 69 74",
  "+998 90 163 25 19",
  "+998 91 156 14 19",
  "+998 99 256 18 23",
  "+998 95 005 66 18",
];

function getNumber() {
    randomBtn.setAttribute("disabled", true);
  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * numbers.length);
    phoneNumber.innerHTML = numbers[randomNumber];
  }, 50);
  setTimeout(() => {
    clearInterval(interval);
    randomBtn.removeAttribute("disabled")
  }, 2500);
}
