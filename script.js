// EDITE AQUI:
// Formato: código do país + DDD + número, sem espaços.
// Exemplo fictício: 5511999999999
const WHATSAPP_NUMBER = "5511973969770";

const MESSAGE = encodeURIComponent(
  "Olá, Dr. Jonathan. Gostaria de entender melhor meu caso trabalhista. Posso explicar o que aconteceu?"
);

// Google Ads: registrar a conversão apenas quando um link do WhatsApp for clicado.
// Esta conversão mede cliques, não mensagens enviadas nem contratos firmados.
// A tag geral do Google Ads já está instalada no <head> de index.html.
document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${MESSAGE}`;
  link.target = "_blank";
  link.addEventListener("click", () => {
    const source = link.dataset.whatsappSource || link.closest("section")?.id || "site";

    // Evento separado para identificar de qual ponto do site veio o clique.
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_click",
      whatsapp_source: source
    });

    if (typeof window.gtag === "function") {
      window.gtag("event", "whatsapp_click", {
        whatsapp_source: source,
        event_category: "engagement",
        event_label: "WhatsApp"
      });

      // Conversão do Google Ads: representa clique no WhatsApp, não mensagem enviada.
      window.gtag("event", "conversion", {
        send_to: "AW-18434877988/W7GyCMykhvAcEKTUt9ZE",
        value: 1.0,
        currency: "BRL"
      });
    }
  });
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

  

// Impede seleção, cópia, recorte, colagem, menu de contexto e arraste de imagens.
// Links, botões, navegação e WhatsApp continuam funcionando normalmente.
["copy", "cut", "paste", "contextmenu", "selectstart", "dragstart"].forEach((eventName) => {
  document.addEventListener(eventName, (event) => {
    event.preventDefault();
  }, { capture: true });
});

// Remove seleções que algum navegador consiga iniciar mesmo com CSS.
document.addEventListener("selectionchange", () => {
  const selection = window.getSelection?.();
  if (selection && !selection.isCollapsed) {
    selection.removeAllRanges();
  }
});
