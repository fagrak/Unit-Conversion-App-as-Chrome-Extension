let convertBtn = document.querySelector("#convert-btn");
let input = document.getElementById("input-el");
let lenght = document.getElementById("cal1");
let vol = document.getElementById("cal2");
let mass = document.getElementById("cal3");

const mtToFt = 3.281;
const ltToGal = 0.264;
const kgToPound = 2.204;

convertBtn.addEventListener("click", function () {
  lenght.textContent = (input.value * mtToFt).toFixed(3);
  vol.textContent = (input.value * ltToGal).toFixed(3);
  mass.textContent = (input.value * kgToPound).toFixed(3);
});
