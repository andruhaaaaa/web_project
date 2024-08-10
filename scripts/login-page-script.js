document.addEventListener("DOMContentLoaded", function() {
    const inputUname = document.getElementById("InputUname");
    const inputPassword = document.getElementById("InputPassword");
    const eyeIcon = document.getElementById("eye-padding");
    const cancelButton = document.querySelector(".btn-cancel");
    const forgotpswButton = document.querySelector(".btn-forgot");

    eyeIcon.addEventListener("click", togglePasswordVisibility);
    
    cancelButton.addEventListener("click", function() {
        window.location.href = '../index.html';
    });

    forgotpswButton.addEventListener("click", function() {
        window.location.href = '../enter-prompts/forgotpassword.html';
    });
});

function togglePasswordVisibility() {
    PasswordToggle();
    EyePaddingBurstAnimation();
}

function EyePaddingBurstAnimation() {
    var eyeiconpadding = document.getElementById("eye-padding")
};

var pass_visibility_state = 1;

function PasswordToggle() {
    pass_visibility_state++;
    var pswtoggle = document.getElementById("InputPassword");
    var eyeicon = document.getElementById("eye-icon-id");

    if(pass_visibility_state % 2 == 0) {
        pswtoggle.type = 'text';
        eyeicon.setAttribute("name", "hide");
        }else{
        pswtoggle.type = 'password';
        eyeicon.setAttribute("name", "show");
        }
};