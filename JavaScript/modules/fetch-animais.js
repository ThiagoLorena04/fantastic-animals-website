import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      const numerosGrid = document.querySelector(".numeros-grid");
      if (!numerosGrid || !data.length) return;

      data.forEach((animal) => {
        const div = createAnimal(animal);
        numerosGrid.appendChild(div);
      });

      initAnimaNumeros();
    } catch (erro) {
      console.error("Erro ao buscar ou processar os animais:", erro);
    }
  }

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numeros-animal");
    div.innerHTML = `
      <h3>${animal?.specie || "?"}</h3>
      <span data-numero>${animal?.total || 0}</span>
    `;
    return div;
  }

  fetchAnimais("./animaisapi.json");
}
