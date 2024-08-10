document.addEventListener("DOMContentLoaded", function() {
  const inputUname = document.getElementById("InputUname");
  const inputPassword = document.getElementById("InputPassword");
  const eyeIcon = document.querySelector(".eye-icon-padding");
  const maleButton = document.getElementById("MaleButton");
  const femaleButton = document.getElementById("FemaleButton");
  const cancelButton = document.querySelector(".btn-cancel");
  const forgotpswButton = document.querySelector(".btn-forgot");

  // Username field event listeners
  inputUname.addEventListener("focusin", ShowUnameConditionsPopup);
  inputUname.addEventListener("focusout", HideUnameConditionsPopup);
  inputUname.addEventListener("input", CheckUnameConditions);

  // Password field event listeners
  inputPassword.addEventListener("input", CheckPswConditions);
  inputPassword.addEventListener("focusin", showPasswordFocusInActions);
  inputPassword.addEventListener("focusout", hidePasswordFocusOutActions);

  // Eye icon event listener
  eyeIcon.addEventListener("click", togglePasswordVisibility);

  // Gender selection buttons event listeners
  maleButton.addEventListener("click", function() { ChoseGender(1); });
  femaleButton.addEventListener("click", function() { ChoseGender(-1); });

  // Link buttons event listeners
  cancelButton.addEventListener("click", function() {
      window.location.href = '../index.html';
  });

  forgotpswButton.addEventListener("click", function() {
      window.location.href = '../enter-prompts/forgotpassword.html';
  });
});

function showPasswordFocusInActions() {
  ShowPswConditionsPopup();
}

function hidePasswordFocusOutActions() {
  HidePswConditionsPopup();
}

function togglePasswordVisibility() {
  PasswordToggle();
  EyePaddingBurstAnimation();
}

const AllUpperCaseLetters = /[A-Z]/g;
const AllLowerCaseLetters = /[a-z]/g;
const AllNumbers = /[0-9]/g;
const AllSpecialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const EmailDomain = /[@|.com]/;


function ConditionClassSwitch(conditionName, ActionProperty) {
  let elementId = conditionName + "Condition";
  let elementDisplayId = conditionName + "ConditionDisplay";
  let element = document.getElementById(elementId);
  let elementDisplay = document.getElementById(elementDisplayId);

  if (ActionProperty == 1) {
    element.classList.remove("condition-not-met");
    element.classList.add("condition-is-met");

    elementDisplay.classList.remove("condition-not-met");
    elementDisplay.classList.add("condition-is-met");

    elementDisplay.classList.remove("bx-x");
    elementDisplay.classList.add("bx-check");
  }

  if (ActionProperty == 0) {
    element.classList.remove("condition-is-met");
    element.classList.add("condition-not-met");

    elementDisplay.classList.remove("condition-is-met");
    elementDisplay.classList.add("condition-not-met");

    elementDisplay.classList.remove("bx-check");
    elementDisplay.classList.add("bx-x");
  }
};
 
function CheckEmailConditions () {
  var EmailContent = document.getElementById("InputEmail");

};

function CheckUnameConditions() {
  var UnameContent = document.getElementById("InputUname");

  var UnameLengthCondition = document.getElementById("UnameLengthCondition");
  var UnameLengthConditionDisplay = document.getElementById("UnameLengthConditionDisplay");

  var UnameUniquenessCondition = document.getElementById("UnameUniquenessCondition");
  var UnameUniquenessConditionDisplay = document.getElementById("UnameUniquenessConditionDisplay");
  var UnameUnique = true;

    if(UnameContent.value.length > 2 && UnameContent.value.length < 29) {
      ConditionClassSwitch('UnameLength', 1);
      CorrectUnameLength = true;
    }
    else {
      ConditionClassSwitch('UnameLength', 0);
      CorrectUnameLength = false;
    }

    if(UnameUnique == true) {
      ConditionClassSwitch('UnameUniqueness', 1);
      
    }
    else {
      ConditionClassSwitch('UnameUniqueness', 0);
      
    }

    if(CorrectUnameLength == true && UnameUnique == true) {
      UnameContent.classList.remove("input-condition-not-met");
      UnameContent.classList.add("input-condition-is-met");
    }
    if (CorrectUnameLength == false || UnameUnique == false) {
      UnameContent.classList.add("input-condition-not-met");
      UnameContent.classList.remove("input-condition-is-met");
    }
};

function ShowUnameConditionsPopup() {
  var UnamePopupOverlay = document.getElementById("username-popup-overlay-id");
  UnamePopupOverlay.classList.remove("visibility-off");
  UnamePopupOverlay.classList.add("visibility-on");
};

function HideUnameConditionsPopup() {
  var UnamePopupOverlay = document.getElementById("username-popup-overlay-id");
  UnamePopupOverlay.classList.remove("visibility-on");
  UnamePopupOverlay.classList.add("visibility-off");
};

function CheckPswConditions() {
  var PswContent = document.getElementById("InputPassword");

  // Password Length Check section

    if(PswContent.value.length > 7) {
      ConditionClassSwitch('Length', 1);
      CorrectLength = true;
    }

    if(PswContent.value.length < 7 || PswContent.value.length > 28) {
      ConditionClassSwitch('Length', 0);
      CorrectLength = false;
    }
  
  // Password Uppercase & Lowercase Letters Check section

    if(PswContent.value.match(AllLowerCaseLetters) && PswContent.value.match(AllUpperCaseLetters)) {
      ConditionClassSwitch('Cases', 1);
      VaryingCases = true;
    }
    else
    {
      ConditionClassSwitch('Cases', 0);
      VaryingCases = false;
    }

  // Password Numbers Check section

    if(PswContent.value.match(AllNumbers)) {
      ConditionClassSwitch('Numbers', 1);
      Numbers = true;
    }
    else
    {
      ConditionClassSwitch('Numbers', 0);
      Numbers = false;
    }

  // Password Special Characters Check section

    if(PswContent.value.match(AllSpecialChars)) {
      ConditionClassSwitch('SpecialChars', 1);
      SpecialChars = true;
    }
    else
    {
      ConditionClassSwitch('SpecialChars', 0);
      SpecialChars = false;
    };
  
  // Password Input Bar color display section

    if (CorrectLength == true && Numbers == true && VaryingCases == true && SpecialChars == true) {
      PswContent.classList.remove("input-condition-not-met");
      PswContent.classList.remove("input-condition-partially-met");
      PswContent.classList.add("input-condition-is-met")
    }
    else if (CorrectLength == true && Numbers == true && VaryingCases == true && SpecialChars == false) {
      PswContent.classList.remove("input-condition-not-met");
      PswContent.classList.remove("input-condition-is-met");
      PswContent.classList.add("input-condition-partially-met")
    }
    else {
      PswContent.classList.remove("input-condition-is-met");
      PswContent.classList.remove("input-condition-partially-met")
      PswContent.classList.add("input-condition-not-met");
    }
};

function ShowPswConditionsPopup() {
  var PswPopupOverlay = document.getElementById("password-popup-overlay-id");
  PswPopupOverlay.classList.remove("visibility-off");
  PswPopupOverlay.classList.add("visibility-on");
};

function HidePswConditionsPopup() {
  var PswPopupOverlay = document.getElementById("password-popup-overlay-id");
  PswPopupOverlay.classList.remove("visibility-on");
  PswPopupOverlay.classList.add("visibility-off");
};

function ChoseGender(str) {
  var Male = document.getElementById("MaleButton");
  var Female = document.getElementById("FemaleButton");
  var MaleGender = document.getElementById("MaleGender");
  var FemaleGender = document.getElementById("FemaleGender");
 
    if(str==1){
 
      Female.classList.remove("female-button-chosen");
      FemaleGender.classList.remove("gender-female-chosen");
      Male.classList.toggle("male-button-chosen");
      MaleGender.classList.toggle("gender-male-chosen");
 
     }else{
 
      Female.classList.toggle("female-button-chosen");
      FemaleGender.classList.toggle("gender-female-chosen");
      Male.classList.remove("male-button-chosen");
      MaleGender.classList.remove("gender-male-chosen");
 
     }
 
}

var pass_visibility_state = 1;

function PasswordToggle() {
pass_visibility_state++;
var pswtoggle = document.getElementById("InputPassword");
var eyeicon = document.getElementById("Eye-icon-id");

  if(pass_visibility_state % 2 == 0) {
      pswtoggle.type = 'text';
      eyeicon.setAttribute("name", "hide");
    }else{
      pswtoggle.type = 'password';
      eyeicon.setAttribute("name", "show");
    }
};

function EyePaddingBurstAnimation() {
  var eyeiconpadding = document.getElementById("eye-padding")
};

//function InputLabelAnimationIn() {
//  var InputLabel = document.querySelector('label.input-label');
//  InputLabel.classList.add("input-label-out");
//};
//
//function InputLabelAnimationOut() {
//  var InputLabel = document.getElementById("str");
//  InputLabel.classList.add("input-label-out");
//};

// todo: #1 CheckPswConditionsPopup - minimal width, special symbols, numbers, register check. Make lines green and show a green checkmark when true, red and red cross when false, 
//       #2 EyePaddingBurstAnimation - make a bx-burst animation play once upon click
//       #3 EmailValidityCheck - add a check function to determine whether the input email has @gmail.com, @yandex.com, etc.