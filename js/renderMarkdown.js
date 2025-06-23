// js/renderMarkdown.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("markdown-content");
  fetch("posts/bitcoin.md")
    .then((res) => res.text())
    .then((md) => {
      container.innerHTML = marked.parse(md);
    });
});
