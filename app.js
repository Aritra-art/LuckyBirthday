var dob = document.querySelector(".dob");
var number = document.querySelector(".number");
var check = document.querySelector(".check");
var clear = document.querySelector(".clear");
var error = document.querySelector(".error");
var output = document.querySelector(".output");
const emotion = document.querySelector(".emotion");

check.addEventListener("click", checkEventHandler);
clear.addEventListener("click", clearEventHandler);

error.style.display = "none";

function checkEventHandler() {
  emotion.style.display = "none";
  var birthday = dob.value;
  var remove = birthday.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < remove.length; i++) {
    sum += Number(remove.charAt(i));
  }
  luckyCheck(sum);
}

function luckyCheck(sum) {
  output.innerText = "Loading . . .";
  if (number.value != 0 && dob.value != "") {
    output.style.display = "block";
    error.style.display = "none";
    if (sum % Number(number.value) == 0) {
      emotion.style.display = "none";
      setTimeout(() => {
        emotion.style.display = "block";
        output.innerText = "Bingo, Your Birthday is Lucky 🎉🎉";
        emotion.innerHTML = "<img src='./images/happy.gif'>";
      }, 2000);
    } else {
      emotion.style.display = "block";
      setTimeout(() => {
        output.innerText = "Your Birthday is not that Lucky 😥😥";
        emotion.innerHTML = "<img src='./images/sad.gif'>";
      }, 2000);
    }
  } else {
    output.style.display = "none";
    error.style.display = "block";
    error.innerText = "please enter both Date of Birth and Lucky number";
  }
}

function clearEventHandler() {
  dob.value = "";
  number.value = "";
  error.style.display = "none";
  output.style.display = "none";
  emotion.style.display = "none";
}
