// ===== Tema claro/escuro =====
const html = document.documentElement;
const botaoTema = document.getElementById("tema");

function aplicarTema(tema) {
  html.setAttribute("data-bs-theme", tema);
  botaoTema.textContent = tema === "dark" ? "Claro" : "Escuro";
}

// Usa o tema salvo; se não houver, segue a preferência do aparelho
let temaInicial = "light";
try {
  temaInicial = localStorage.getItem("tema") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch (e) { /* sem acesso ao armazenamento: mantém o padrão */ }
aplicarTema(temaInicial);

botaoTema.addEventListener("click", () => {
  const novo = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
  aplicarTema(novo);
  try { localStorage.setItem("tema", novo); } catch (e) {}
});

// ===== Ano automático no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();

// ===== Fecha o menu no celular ao clicar em um link =====
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
