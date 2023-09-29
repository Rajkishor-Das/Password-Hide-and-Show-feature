let pass = document.getElementById("Pass")
let logo = document.getElementById("logo")
function getValue() {
  if (pass.value == '') {
    logo.src = "images/eye-close.png";
  } else {
      if (pass.getAttribute("type") === "password") {
        pass.setAttribute("type", 'text');
        logo.src = "images/eye-open.png";
      } else {
        pass.setAttribute("type", "password");
        logo.src = "images/eye-close.png";
      }
    }
}