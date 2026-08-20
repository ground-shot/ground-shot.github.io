const copyButton = document.querySelector("[data-copy-bibtex]");

copyButton?.addEventListener("click", async () => {
  const bibtex = document.querySelector("#bibtex-code")?.textContent ?? "";

  try {
    await navigator.clipboard.writeText(bibtex.trim());
    copyButton.textContent = "Copied!";
    window.setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 1600);
  } catch {
    copyButton.textContent = "Select text to copy";
  }
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
