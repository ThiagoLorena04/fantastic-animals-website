export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();

    const element = this;
    const alreadyOpen = element.hasAttribute("data-outside");

    if (!alreadyOpen) {
      element.classList.add("active");

      outsideClick(element, () => {
        element.classList.remove("active");
      });
    }
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outsideAttr = "data-outside";

    function handleOutsideClick(event) {
      if (!element.contains(event.target)) {
        html.removeEventListener("click", handleOutsideClick);
        element.removeAttribute(outsideAttr);
        callback();
      }
    }

    html.addEventListener("click", handleOutsideClick);
    element.setAttribute(outsideAttr, "");
  }
}
