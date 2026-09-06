// EDITE AQUI:
// Formato: código do país + DDD + número, sem espaços.
// Exemplo fictício: 5511999999999
const WHATSAPP_NUMBER = "5511973969770";

const MESSAGE = encodeURIComponent(
  "Olá, Dr. Jonathan. Gostaria de solicitar uma análise sobre medicamento de alto custo ou tratamento negado."
);

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;
  link.target = "_blank";
});

document.getElementById("year").textContent = new Date().getFullYear();


// Navegação suave com easing e compensação do cabeçalho fixo
function smoothScrollTo(targetY, duration = 700) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();

    const header = document.querySelector(".topbar");
    const offset = (header?.offsetHeight || 0) + 18;
    const targetY =
      target.getBoundingClientRect().top +
      window.scrollY -
      offset;

    smoothScrollTo(targetY, 720);
  });
});
