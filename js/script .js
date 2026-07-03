// --- Modo oscuro ---
const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const temaGuardado = localStorage.getItem("tema");
const navLinks = document.querySelectorAll(".navbar .nav-link");

function aplicarTema(esOscuro) {
  document.documentElement.classList.toggle("dark-mode", esOscuro);

  if (btnModoOscuro) {
    btnModoOscuro.textContent = esOscuro ? "☀️" : "🌙";
  }
}

aplicarTema(temaGuardado === "oscuro");

function normalizarRuta(pathname) {
  if (pathname.endsWith("/")) {
    return pathname;
  }

  const ultimoSegmento = pathname.split("/").pop();
  if (ultimoSegmento === "index.html") {
    return pathname.replace(/index\.html$/, "");
  }

  return pathname;
}

const rutaActual = normalizarRuta(window.location.pathname);

navLinks.forEach((link) => {
  const urlLink = new URL(link.getAttribute("href"), window.location.href);
  const rutaLink = normalizarRuta(urlLink.pathname);

  if (rutaLink === rutaActual) {
    link.classList.add("nav-link--active");
    link.setAttribute("aria-current", "page");
  }
});

if (btnModoOscuro) {
  btnModoOscuro.addEventListener("click", () => {
    const activarOscuro = !document.documentElement.classList.contains("dark-mode");
    aplicarTema(activarOscuro);
    localStorage.setItem("tema", activarOscuro ? "oscuro" : "claro");
  });
}

// --- Ver más: abre modal con info del programa ---
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitulo = document.getElementById("modalTitulo");
const modalContenido = document.getElementById("modalContenido");
const cerrarModalBtn = document.getElementById("cerrarModal");

if (modalOverlay && modalTitulo && modalContenido && cerrarModalBtn) {
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
}

