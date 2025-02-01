const display = document.querySelector(".display"); // Seleciona a tela de saída
const botoes = document.querySelectorAll("button"); // Seleciona todos os botões
const simbolos = ["%", "/", "*", "-", "+", "="]; // Operadores declarados
let output = "";

// Função para calcular os valores
const calculate = (btnValue) => {
  if (btnValue === "=") {
    if (output === "") return; // evita erro
    try {
      output = output.replace(/(\d+)%/g, "($1/100)"); // transforma a porcentagem
      output = Function(`'use strict'; return (${output})`)();
    } catch (error) {
      output = "Erro";
    }
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && simbolos.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

botoes.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
