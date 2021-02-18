function validateForm() {
  var myInputs = document.getElementsByClassName("names_text");
  for (var n = 0; n < myInputs.length; n++) {
    var myText = myInputs[n].value;
    var notSymbol = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
    for (var i = 0; i < notSymbol.length; i++) {
      if (myText.indexOf(notSymbol.charAt(i)) != -1) {
        alert(`${myInputs[n].name} contains illegal characters: ~\`!#$%^&*+=-[]\\\';,/{}|\":<>?`);
        return false
      }
    }
    if (myText === "") {
      alert(`${myInputs[n].name} cannot be empty!`);
      return false
    } else if (myText.length >= 15) {
      alert(`${myInputs[n].name} ${myText} is too long!`);
      return false
    }
  }

  // birthday check - if minor 
  var today = new Date();
  var birthDate = document.forms["myForm"]["bday"].value;
  var birthDay = new Date(birthDate);
  var age = today.getFullYear() - birthDay.getFullYear();
  var month = today.getMonth() - birthDay.getMonth();
  var day = today.getDate() - birthDay.getDate();
  if (birthDate === "") {
    alert("We need to know how old are you, please tell us your date of birth.");
    return false
  }
  if (age < 18 ||
    (age == 18 && month > 0) ||
    (age == 18 && month == 0 && day > 0)) {
    alert("We are sorry, but you are a minor.");
    return false
  }

  // phone number check
  var phoneNumber = document.forms["myForm"]["phone"].value;
  var notDash = "/\\-";
  for (var i = 0; i < notDash.length; i++) {
    if (phoneNumber === "" || isNaN(phoneNumber) || phoneNumber.indexOf(notDash.charAt(i)) != -1) {
      alert("Please enter your phone number (without / or -).");
      return false
    }
  }

  // e-mail check
  var mailAddress = document.forms["myForm"]["mail"].value;
  if (mailAddress === "") {
    alert("Please enter your e-mail address.");
    return false
  } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mailAddress))) {
    alert("Email address you entered is invalid.");
    return false
  } else {
    return true
  }
}
