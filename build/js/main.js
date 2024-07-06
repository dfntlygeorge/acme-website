const initApp = () => {
  const hamBtn = document.querySelector("#hamburger-btn");
  const mobileMenu = document.querySelector("#mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamBtn.classList.toggle("toggle-btn");
  };

  hamBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
