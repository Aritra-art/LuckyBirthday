var dob = document.querySelector(".dob");
  var number = document.querySelector(".number");
  var check = document.querySelector(".check");
  var clear = document.querySelector(".clear");
  var error = document.querySelector(".error");
  var output = document.querySelector(".output");

  check.addEventListener("click", checkEventHandler);
  clear.addEventListener("click", clearEventHandler);

  error.style.display = "none";

  function checkEventHandler(){
    var birthday = (dob.value);
    var remove = birthday.replaceAll("-","");
    var sum=0
    for(var i=0;i<remove.length;i++){
      sum += Number(remove.charAt(i))
    }
   luckyCheck(sum);
  }

  function luckyCheck(sum){
  if(number.value !=0 && dob.value != "" )
   {
    output.style.display = "block"
    error.style.display = "none";
    if (sum % Number(number.value) == 0){
      output.innerText = "Bingo, Your Birthday is Lucky 🎉🎉";
    }else{
      output.innerText = "Your Birthday is not that Lucky 😥😥";
    }

   }else {
      output.style.display = "none";
      error.style.display = "block";
      error.innerText = "please enter both Date of Birth and Lucky number";
   }
}

  function clearEventHandler(){
    window.location.reload();
    console.log("clear");
  }