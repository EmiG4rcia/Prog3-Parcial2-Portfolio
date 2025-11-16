// === PORTAL (WELCOME PAGE) ===
document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const portal = document.querySelector(".portal-gif");

  if (enterBtn && portal) {
    enterBtn.addEventListener("click", () => {
      portal.classList.add("zoom-effect");

      const sound = new Audio("./assets/sounds/portal-sfx.mp3");
      sound.volume = 0.5;
      sound.play().catch(() => {});

      setTimeout(() => {
        window.location.href = "./pages/home/home.html";
      }, 1500);
    });
  }
});


// === RICK (SKILLS PAGE) ===
document.addEventListener("DOMContentLoaded", () => {
  const rick = document.querySelector(".rick-side-skills");

  if (rick) {
    rick.addEventListener("click", () => {
      rick.classList.toggle("active");
    });
  }
});


// === RESUME PAGE: Rick floating ===
document.addEventListener("DOMContentLoaded", () => {
  const rick = document.querySelector(".resume-rick");

  if (rick) {
    rick.addEventListener("click", () => {
      rick.classList.toggle("active");
    });
  }
});


// === DEVICES (PROJECTS LAB) — ESTE ES EL IMPORTANTE ===
document.addEventListener("DOMContentLoaded", () => {
  const devices = document.querySelectorAll(".device");

  if (devices.length > 0) {
    devices.forEach(device => {
      device.addEventListener("click", () => {
        device.classList.toggle("open");
      });
    });
  }
});

/**
 * // === UNIVERSAL PORTAL SOUNDS ===
document.addEventListener("DOMContentLoaded", () => {

  const portals = document.querySelectorAll(".portal-sound");

  portals.forEach(portal => {
    portal.addEventListener("click", (e) => {
      e.preventDefault();

      // detectar tipo de sonido
      const type = portal.dataset.sound;

      let soundPath = "";

      if (type === "verde") soundPath = "/assets/sounds/PORTAL-VERDE.mp3";
      if (type === "blanco") soundPath = "/assets/sounds/PORTAL-AZUL.mp3";

      const sound = new Audio(soundPath);
      sound.volume = 0.55;

      try { sound.play().catch(()=>{}); } catch {}

      // determinar destino
      const target =
        portal.getAttribute("href") ||
        portal.dataset.target;

      setTimeout(() => {
        window.location.href = target;
      }, 450); // tiempo perfecto para escuchar el inicio del sonido
    });
  });

});
 */

