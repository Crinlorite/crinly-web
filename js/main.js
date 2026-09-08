/* Mismo comportamiento que aulixa.app: nav que se opaca al bajar, menú móvil y año del pie. */
function initNav() {
  const nav = document.getElementById("nav");
  if (!nav) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle("scrolled", window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  });
}

function initMobileMenu() {
  const hamburger = document.querySelector(".nav-hamburger");
  const navCenter = document.querySelector(".nav-center");
  if (!hamburger || !navCenter) return;
  hamburger.addEventListener("click", () => {
    const abierto = navCenter.classList.toggle("open");
    hamburger.textContent = abierto ? "✕" : "☰";
    hamburger.setAttribute("aria-expanded", String(abierto));
  });
  navCenter.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navCenter.classList.remove("open");
      hamburger.textContent = "☰";
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

function initYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

initNav();
initMobileMenu();
initYear();
