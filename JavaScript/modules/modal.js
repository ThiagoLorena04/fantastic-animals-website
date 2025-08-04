export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  // ✅ Verifica se tudo existe antes de criar funções dependentes
  if (!botaoAbrir || !botaoFechar || !containerModal) return;

  function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueForaModal(event) {
    const clickedOutside = event.target === containerModal;
    if (clickedOutside) toggleModal(event);
  }

  botaoAbrir.addEventListener("click", toggleModal);
  botaoFechar.addEventListener("click", toggleModal);
  containerModal.addEventListener("click", cliqueForaModal);
}
