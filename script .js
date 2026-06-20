// --- Modo oscuro ---
const btnModoOscuro = document.getElementById("btn-modo-oscuro");

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Cambia el texto del botón según el estado
  if (document.body.classList.contains("dark-mode")) {
    btnModoOscuro.textContent = "☀️ Modo claro";
  } else {
    btnModoOscuro.textContent = "🌙 Modo oscuro";
  }
});
console.log("Prueba");
// --- Ver más / Ver menos en cada programa ---
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

botonesVerMas.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenido = boton.previousElementSibling; // el div justo antes del botón
    contenido.classList.toggle("oculto");

    if (contenido.classList.contains("oculto")) {
      boton.textContent = "Ver más";
    } else {
      boton.textContent = "Ver menos";
    }
  });
});