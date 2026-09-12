"use strict";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-install-url]").forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.dataset.installUrl;
      const operationName = button.dataset.operationName || "SKPO";

      if (!url) return;

      sessionStorage.setItem("skpoInstallSource", "portal");
      sessionStorage.setItem("skpoInstallOperation", operationName);

      window.location.href = url;
    });
  });
});
