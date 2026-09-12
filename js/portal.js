"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const installButtons = document.querySelectorAll("[data-install-url]");

  installButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.installUrl;
      const operationName = button.dataset.operationName || "SKPO";

      if (!url) return;

      // Browser tidak membenarkan portal luar daripada scope PWA
      // membuka native install prompt bagi aplikasi lain.
      // Oleh itu pengguna dihantar ke halaman PWA sebenar dengan ?install=1.
      sessionStorage.setItem("skpoInstallSource", "portal");
      sessionStorage.setItem("skpoInstallOperation", operationName);

      window.location.href = url;
    });
  });
});
