document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".header__bars");
    const menuClose = document.querySelector(".header-menu__close");
    const menu = document.querySelector(".header-menu");
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
      menu.classList.add("open-menu");
    });
    menuClose.addEventListener("click", function () {
      menu.classList.remove("open-menu");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !e.target.matches(".header__bars")) {
        menu.classList.remove("open-menu");
      }
    });
  });