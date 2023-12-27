

//會員密碼驗證
function validatePassword() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;
  if (password !== confirm_password) {
    alert("Passwords do not match!");
    return false; // prevent form submission
  }
  return true; // allow form submission
}

document.getElementById("registration_form").addEventListener("submit", validatePassword);
