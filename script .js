// --- Modo oscuro ---
const btnModoOscuro = document.getElementById("btn-modo-oscuro");

btnModoOscuro.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    btnModoOscuro.textContent = "☀️";
  } else {
    btnModoOscuro.textContent = "🌙";
  }
});

// --- Ver más: abre modal con info del programa ---
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitulo = document.getElementById("modalTitulo");
const modalContenido = document.getElementById("modalContenido");
const cerrarModalBtn = document.getElementById("cerrarModal");

botonesVerMas.forEach((boton) => {
  boton.addEventListener("click", () => {
    const articulo = boton.closest("article");
    const titulo = articulo.querySelector("h4").textContent;
    const contenidoOculto = articulo.querySelector(".oculto").innerHTML;

    modalTitulo.textContent = titulo;
    modalContenido.innerHTML = contenidoOculto;
    modalOverlay.classList.add("activo");
    document.body.classList.add("bloqueo-scroll");
  });
});

function cerrarModal() {
  modalOverlay.classList.remove("activo");
  document.body.classList.remove("bloqueo-scroll");
}

cerrarModalBtn.addEventListener("click", cerrarModal);

modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) cerrarModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") cerrarModal();
});