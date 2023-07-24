// Obtener referencias a los elementos del formulario
const firstNameInput = document.getElementById('firts Name');
const lastNameInput = document.getElementById('last name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const form = document.querySelector('form');
const parrafo = document.getElementById('warnings');


// Escuchar el evento submit del formulario
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe
  const lista = JSON.parse(localStorage.getItem('userInfo')) || [];
  let entrar = false;
  let warnings = "";
  let regexEmail =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  parrafo.innerHTML = "";
  if (firstNameInput.value.length < 3) {
    warnings += `El nombre no es valido <br>`;
    entrar = true;
  }
  if (lastNameInput.value.length < 3) {
    warnings += `El apellido no es valido <br>`;
    entrar = true;
  }
  if (!regexEmail.test(emailInput.value)) {
    warnings += `El email no es valido <br>`;
    entrar = true;
  }
  if (passwordInput.value.length < 3) {
    warnings += `La contraseña no es valida <br>`;
    entrar = true;
  }
  if (entrar) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
    entrar=false;
  }


if (!entrar) {
  // Obtener los valores de los campos de entrada
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // Crear un objeto con la información
  const userInfo = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password
  };
  lista.push(userInfo);
  // Convertir el objeto en una cadena JSON
  const userInfoJSON = JSON.stringify(lista);
  
  // Almacenar la información en localStorage
  localStorage.setItem('userInfo', userInfoJSON);

  // Limpiar los campos de entrada
  /* firstNameInput.value = '';
  lastNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = ''; */

  // Mostrar un mensaje de éxito
  //alert('Information stored successfully!');
}

  
})

