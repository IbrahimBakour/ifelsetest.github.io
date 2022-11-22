let weightT = document.getElementById("weight");
let heightT = document.getElementById("height");
let calcualte = document.getElementById("submit-w");
let result = document.createElement("p");
let result2 = document.createElement("p");

// console.log(heightB);

calcualte.addEventListener("click", function (t, w, h) {
  w = weightT.value;
  h = heightT.value;
  t = w / (h * h);
  result2.innerHTML = String(t);
  if (t < 18) {
    result.innerHTML = "Thin";
  } else if (t >= 18 && t <= 24.9) {
    result.innerHTML = "Perfect Weight";
  } else if (t >= 25 && t <= 29.9) {
    result.innerHTML = "Extra Weight";
  } else if (t >= 30 && t <= 34.9) {
    result.innerHTML = "Ghee +1";
  } else if (t >= 35 && t <= 39.9) {
    result.innerHTML = "Ghee +2";
  } else if (t >= 40) {
    result.innerHTML = "Dangerous Ghee";
  }
  document.body.appendChild(result);
  document.body.appendChild(result2);
});
