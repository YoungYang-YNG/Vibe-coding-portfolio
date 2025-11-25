const tabButtons = document.querySelectorAll(".tab");
const chipClose = document.querySelector(".chip--close");
const hero = document.querySelector(".hero");

tabButtons.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("is-active"));
    tab.classList.add("is-active");
  });
});

if (chipClose && hero) {
  chipClose.addEventListener("click", () => {
    hero.classList.toggle("is-collapsed");
    chipClose.textContent = hero.classList.contains("is-collapsed")
      ? "Open"
      : "Close";
  });
}

