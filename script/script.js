const UpperCaseLetters = /[A-Z]/g;
const LowerCaseLetters = /[a-z]/g;
const Numbers = /[0-9]/g;
const SpecialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;


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

function CheckPswConditions() {
  var PswContent = document.getElementById("InputPassword");

  var LengthCondition = document.getElementById("password-length-check");
  var LengthConditionDisplay = document.getElementById("password-length-check-display");

  var CasesCondition = document.getElementById("password-cases-check");
  var CasesConditionDisplay = document.getElementById("password-cases-check-display");

  var NumbersCondition = document.getElementById("password-has-numbers-check");
  var NumbersConditionDisplay = document.getElementById("password-has-numbers-check-display");

  var SpecialCharsCondition = document.getElementById("password-no-special-chars-check");
  var SpecialCharsConditionDisplay = document.getElementById("password-no-special-chars-check-display");

  // Password Length Check section

    if(PswContent.value.length > 7) {
      LengthCondition.classList.remove("condition-not-met");
      LengthCondition.classList.add("condition-is-met");

      LengthConditionDisplay.classList.remove("condition-not-met");
      LengthConditionDisplay.classList.add("condition-is-met");

      LengthConditionDisplay.classList.remove("bx-x");
      LengthConditionDisplay.classList.add("bx-check");
      HasCorrectLength = true;
    }

    if(PswContent.value.length < 7 || PswContent.value.length > 28) {
      LengthCondition.classList.add("condition-not-met");
      LengthCondition.classList.remove("condition-is-met");

      LengthConditionDisplay.classList.add("condition-not-met");
      LengthConditionDisplay.classList.remove("condition-is-met");

      LengthConditionDisplay.classList.add("bx-x");
      LengthConditionDisplay.classList.remove("bx-check");
      HasCorrectLength = false;
    }
  
  // Password Uppercase & Lowercase Letters Check section

    if(PswContent.value.match(LowerCaseLetters) && PswContent.value.match(UpperCaseLetters)) {
      CasesCondition.classList.remove("condition-not-met");
      CasesCondition.classList.add("condition-is-met");

      CasesConditionDisplay.classList.remove("condition-not-met");
      CasesConditionDisplay.classList.add("condition-is-met");

      CasesConditionDisplay.classList.remove("bx-x");
      CasesConditionDisplay.classList.add("bx-check");
      HasVaryingCases = true;
    }
    else
    {
      CasesCondition.classList.add("condition-not-met");
      CasesCondition.classList.remove("condition-is-met");

      CasesConditionDisplay.classList.add("condition-not-met");
      CasesConditionDisplay.classList.remove("condition-is-met");

      CasesConditionDisplay.classList.add("bx-x");
      CasesConditionDisplay.classList.remove("bx-check");
      HasVaryingCases = false;
    }

  // Password Numbers Check section

    if(PswContent.value.match(Numbers)) {
    NumbersCondition.classList.remove("condition-not-met");
    NumbersCondition.classList.add("condition-is-met");

    NumbersConditionDisplay.classList.remove("condition-not-met");
    NumbersConditionDisplay.classList.add("condition-is-met");

    NumbersConditionDisplay.classList.remove("bx-x");
    NumbersConditionDisplay.classList.add("bx-check");
    HasNumbers = true;
    }
    else
    {
    NumbersCondition.classList.add("condition-not-met");
    NumbersCondition.classList.remove("condition-is-met");

    NumbersConditionDisplay.classList.add("condition-not-met");
    NumbersConditionDisplay.classList.remove("condition-is-met");

    NumbersConditionDisplay.classList.add("bx-x");
    NumbersConditionDisplay.classList.remove("bx-check");
    HasNumbers = false;
    }

  // Password Special Characters Check section

    if(PswContent.value.match(SpecialChars)) {
      SpecialCharsCondition.classList.remove("condition-not-met");
      SpecialCharsCondition.classList.add("condition-is-met");
  
      SpecialCharsConditionDisplay.classList.remove("condition-not-met");
      SpecialCharsConditionDisplay.classList.add("condition-is-met");
  
      SpecialCharsConditionDisplay.classList.remove("bx-x");
      SpecialCharsConditionDisplay.classList.add("bx-check");
      HasSpecialChars = true;
      }
      else
      {
      SpecialCharsCondition.classList.add("condition-not-met");
      SpecialCharsCondition.classList.remove("condition-is-met");
  
      SpecialCharsConditionDisplay.classList.add("condition-not-met");
      SpecialCharsConditionDisplay.classList.remove("condition-is-met");
  
      SpecialCharsConditionDisplay.classList.add("bx-x");
      SpecialCharsConditionDisplay.classList.remove("bx-check");
      HasSpecialChars = false;
      }
};

function ShowCheckPswConditionsPopup() {
  var PopupOverlay = document.getElementById("popup-overlay-id");
  PopupOverlay.classList.remove("visibility-off");
  PopupOverlay.classList.add("visibility-on");
};

function HideCheckPswConditionsPopup() {
  var PopupOverlay = document.getElementById("popup-overlay-id");
  PopupOverlay.classList.remove("visibility-on");
  PopupOverlay.classList.add("visibility-off");
};

function EyePaddingBurstAnimation() {
  var eyeiconpadding = document.getElementById("eye-padding")
};

// todo: #1 CheckPswConditionsPopup - minimal width, special symbols, numbers, register check. Make lines green and show a green checkmark when true, red and red cross when false, 
//       #2 EyePaddingBurstAnimation - make a bx-burst animation play once upon click
//       #3 EmailValidityCheck - add a check function to determine whether the input email has @gmail.com, @yandex.com, etc.