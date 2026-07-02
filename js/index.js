//--ver mas y mostrar menos (index)--
document.addEventListener("DOMContentLoaded", () => {
    const textoCompleto = document.getElementById("texto-completo");
    const btnVerMas = document.getElementById("btn-ver-mas");
    const btnMostrarMenos = document.getElementById("btn-mostrar-menos");

    btnVerMas.addEventListener("click", () => {
        textoCompleto.classList.remove("oculto");
        btnVerMas.classList.add("oculto");
        btnMostrarMenos.classList.remove("oculto");
    });

    btnMostrarMenos.addEventListener("click", () => {
        textoCompleto.classList.add("oculto");
        btnVerMas.classList.remove("oculto");
        btnMostrarMenos.classList.add("oculto");

        window.scrollTo({ top: textoCompleto.offsetTop - 100, behavior: "smooth" });
    });
});