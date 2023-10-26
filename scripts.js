const emailInput = document.querySelector(".input-e");
const passwordInput = document.querySelector(".input-p");
const loginButton = document.querySelector(".button-login");

const isRegisterPage = document.location.href.includes("register.html");

loginButton.addEventListener("click", function () {
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  if (!emailValue || !passwordValue) {
    alert("Por favor, preencha todos os campos.");
  } else if (!isValidEmail(emailValue)) {
    alert("Por favor, insira um endereço de e-mail válido.");
  } else if (passwordValue.length <= 3) {
    alert("A senha deve conter no mínimo 4 dígitos.");
  } else {
    if (isRegisterPage) {
      alert("Registro bem-sucedido!");
    } else {
      alert("Login bem-sucedido!");
    }
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}
