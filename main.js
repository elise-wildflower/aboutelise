// alert('Welcome to my about me site!')

function checkResult() {
  var value = document.getElementById("truths").elements["truths"].value;
  if (["bear","garage","ghost","nile","hospital","nazis"].includes(value)) document.getElementById("result").innerHTML = "Fact."
    else document.getElementById("result").innerHTML = "That's the lie";
}

function checkAge() {
  var age = document.getElementById("age").value;
  console.log(age);
  if (age == 33) document.getElementById("ageanswer").innerHTML = "Got it!";
    else document.getElementById("ageanswer").innerHTML = "Nope!"
}