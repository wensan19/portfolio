const faders = document.querySelectorAll(".fade-up");

function showOnScroll() {
  faders.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
