export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuLista = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];

  function openMenu() {
    if (!menuButton || !menuLista) return;

    const isActive = menuLista.classList.contains("active");

    if (isActive) {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
      removeOutsideListener();
    } else {
      menuLista.classList.add("active");
      menuButton.classList.add("active");

      if (!menuLista.hasAttribute("data-outside")) {
        menuLista.setAttribute("data-outside", "");
        eventos.forEach((userEvent) => {
          document.addEventListener(userEvent, handleOutsideClick);
        });
      }
    }
  }

  function handleOutsideClick(event) {
    if (!menuButton || !menuLista) return;

    const isClickInsideMenu = menuLista.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
      removeOutsideListener();
    }
  }

  function removeOutsideListener() {
    if (!menuLista) return;

    menuLista.removeAttribute("data-outside");
    eventos.forEach((userEvent) => {
      document.removeEventListener(userEvent, handleOutsideClick);
    });
  }

  if (menuButton && menuLista) {
    menuButton.addEventListener("click", openMenu);
  }
}
