let age = document.getElementById("age");
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let titleAge = document.querySelector(".title_age");
let titleHeight = document.querySelector(".title_height");
let titleWeight = document.querySelector(".title_weight");
let btnMale = document.querySelector(".btn_male");
let btnFemale = document.querySelector(".btn_female");
let btnClear = document.querySelector(".btn_clear");
let btnCal = document.querySelector(".btn_calculate");
let characWithoutChanges = document.getElementById("without_changes");
let characLose = document.getElementById("lose_weight");
let characGain = document.getElementById("gain_weight");

age.onclick = function () {
  setTitleStyles(titleAge);
  changeStyle(titleHeight, titleWeight);
};

height.onclick = function () {
  setTitleStyles(titleHeight);
  changeStyle(titleAge, titleWeight);
};

weight.onclick = function () {
  setTitleStyles(titleWeight);
  changeStyle(titleAge, titleHeight);
};

function setTitleStyles(title) {
  title.style.color = "orange";
  title.style.transition = "color linear 0.2s";
}

function changeStyle(firstTitle, secondTitle) {
  firstTitle.style.color = "black";
  secondTitle.style.color = "black";
}

weight.addEventListener("input", stylesForTitles);
age.addEventListener("input", stylesForTitles);
height.addEventListener("input", stylesForTitles);

function stylesForTitles() {
  if (weight.value !== "" && age.value !== "" && height.value !== "") {
    btnCal.style.backgroundColor = "orange";
    btnCal.style.border = "3px solid orange";
    btnCal.style.transition = "backgroundColor linear 1.5s";
    titleHeight.style.color = "black";
    titleAge.style.color = "black";
    titleWeight.style.color = "black";
    titleWeight.style.transition = "color linear 0.2s";
  }
}

btnCal.onclick = function () {
  document.getElementById("result").hidden = false;
  if (btnFemale.classList.contains("btn-active")) {
    FemaleResult();
  } else if (btnMale.classList.contains("btn-active")) {
    {
      MaleResult();
    }
  }
};

function MaleResult() {
  let age = document.getElementById("age");
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");
  age = +age.value;
  height = +height.value;
  weight = +weight.value;
  let withoutChangesMale = Math.round(
    10 * weight + 6.25 * height - 5 * age + 5
  );
  let loseWeightMale = Math.round(10 * weight + 6.25 * height - 5 * age - 500);
  let gainWeightMale = Math.round(10 * weight + 6.25 * height - 5 * age + 500);
  characWithoutChanges.innerHTML = withoutChangesMale;
  characLose.innerHTML = loseWeightMale;
  characGain.innerHTML = gainWeightMale;
}

function FemaleResult() {
  let age = document.getElementById("age");
  let weight = document.getElementById("weight");
  let height = document.getElementById("height");
  age = +age.value;
  height = +height.value;
  weight = +weight.value;
  let withoutChangesFemale = Math.round(
    10 * weight + 6.25 * height - 5 * age - 161
  );
  let gainWeightFemale = Math.round(
    10 * weight + 6.25 * height - 5 * age + 400
  );
  let loseWeightFemale = Math.round(
    10 * weight + 6.25 * height - 5 * age - 350
  );
  characWithoutChanges.innerHTML = withoutChangesFemale;
  characLose.innerHTML = loseWeightFemale;
  characGain.innerHTML = gainWeightFemale;
}

btnClear.onclick = function () {
  document.getElementById("result").hidden = true;
  document.getElementById("age").value = "";
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  let btnChooseMale = document.getElementById("btn_choose_male");
  let btnChooseFemale = document.getElementById("btn_choose_female");
  btnChooseMale.addEventListener("click", function () {
    btnChooseMale.classList.toggle("btn-active");
    btnChooseFemale.classList.remove("btn-active");
  });

  btnChooseFemale.addEventListener("click", function () {
    btnChooseFemale.classList.toggle("btn-active");
    btnChooseMale.classList.remove("btn-active");
  });
});
