export default function initMenuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuLista = document.querySelector("[data-menu='lista']");
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    const isActive = menuLista.classList.contains("active");

    if (isActive) {
      // Fechar menu se já está aberto
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
      removeOutsideListener();
    } else {
      // Abrir menu
      menuLista.classList.add("active");
      menuButton.classList.add("active");

      eventos.forEach((userEvent) => {
        document.addEventListener(userEvent, handleOutsideClick);
      });
    }
  }

  function handleOutsideClick(event) {
    const isClickInsideMenu = menuLista.contains(event.target);
    const isClickOnButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
      removeOutsideListener();
    }
  }

  function removeOutsideListener() {
    eventos.forEach((userEvent) => {
      document.removeEventListener(userEvent, handleOutsideClick);
    });
  }
  if (menuButton && menuLista) {
    menuButton.addEventListener("click", openMenu);
  }
}
