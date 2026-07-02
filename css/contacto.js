const btnModoOscuro = document.getElementById("btn-modo-oscuro");

btnModoOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const oscuro = document.body.classList.contains("dark-mode");
    btnModoOscuro.textContent = oscuro ? "☀️" : "🌙";
});