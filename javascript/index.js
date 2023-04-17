const name = prompt("Please enter your name:");
document.getElementById("title-name").innerHTML = name;


function showResult() {
  var nameInput = document.getElementById("name");
  var name = nameInput.value;
  var capitalized = name.charAt(0).toUpperCase() + name.slice(1);

  var dobInput = document.getElementById("dob");
  var dob = "";
  if (dobInput.value !== "") {
    dob = moment(dobInput.value).format("MM/DD/YYYY");
  }

  var genderInput = document.querySelector('input[name="gender"]:checked');
  var gender = genderInput ? genderInput.value : "";

  var msgInput = document.getElementById("msg");
  var msg = msgInput.value;

  var resultName = document.getElementById("result-name");
  resultName.innerHTML = capitalized;

  var resultDob = document.getElementById("result-dob");
  resultDob.innerHTML = dob;

  var resultGender = document.getElementById("result-gender");
  resultGender.innerHTML = gender;

  var resultMsg = document.getElementById("result-msg");
  resultMsg.innerHTML = msg;

  var currentTime = document.getElementById("current-time");
  currentTime.innerHTML = moment().format("MM/DD/YYYY hh:mm:ss A");
}
