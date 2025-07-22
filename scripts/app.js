// Importando as funções necessárias
import { bloquearInput } from "./bloquearInput.js";
import { configurarBotoes } from "./evento.js";

/** Inicia a calculadora assim que o DOM estiver completamente carregado.
 * Chama as funções que bloquiam a digitação no display e associam os eventos aos botões */
document.addEventListener("DOMContentLoaded", () => {
    bloquearInput();
    configurarBotoes();
});
