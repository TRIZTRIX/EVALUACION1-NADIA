// Footer 
document.querySelector("#anio").textContent = new Date().getFullYear();

// Formulario
const form = document.querySelector("#form-inscripcion");
const mensajeExito = document.querySelector("#mensaje-exito");

form.addEventListener("submit", function (ev) {
  ev.preventDefault(); 

  // Validación de ingreso de datos al formulario
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const modalidad = document.querySelector("#modalidad");

  let errores = [];

  if (!nombre.value.trim()) errores.push("Ingresa tu nombre.");
  if (!email.validity.valid) errores.push("Ingresa un email válido.");
  if (!modalidad.value) errores.push("Selecciona una modalidad.");

  // Si hay errores, marcamos inputs y salimos
  [nombre, email, modalidad].forEach((el) => el.classList.remove("error"));

  if (errores.length > 0) {
    if (!nombre.value.trim()) nombre.classList.add("error");
    if (!email.validity.valid) email.classList.add("error");
    if (!modalidad.value) modalidad.classList.add("error");
    alert("Revisa el formulario:\n- " + errores.join("\n- "));
    return;
  }

  // Si todo esta bien mostramos el mensaje de éxito y limpiamos el formulario
  mensajeExito.hidden = false;
  form.reset();

  mensajeExito.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Estilo visual para error 
const styleError = document.createElement("style");
styleError.textContent = `
  .error { border-color: var(--danger) !important; box-shadow:0 0 0 3px rgba(255,99,99,.18) !important; }
`;
document.head.appendChild(styleError);
