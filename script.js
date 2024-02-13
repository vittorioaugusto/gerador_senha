let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePassword.innerHTML = this.value;
}

function generatePassword() {
  novaSenha = ''; 
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    novaSenha += charset.charAt(Math.floor(Math.random() * n));
  }

  console.log(novaSenha)
  containerPassword.classList.remove("hide");
  password.innerHTML = novaSenha;
}

function copyPassword() {
  var textarea = document.createElement("textarea");
  textarea.value = novaSenha;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);

  alert("Senha copiada com sucesso!");
}
