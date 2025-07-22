/**
 * @file app.js
 * @description Ponto de entrada principal da calculadora. Inicializa o bloqueio de input
 * e configura os eventos dos botões após o carregamento do DOM.
 * @author Rinelly Vasconcelos
 * @version 1.0.0
 * @date jul/2025
 */

/** Importando as funções que controlam o bloqueio do input e a configuração dos botões */
import { bloquearInput } from "./bloquearInput.js";
import { configurarBotoes } from "./evento.js";

/** Inicia a calculadora assim que o DOM estiver completamente carregado.
 * Chama as funções que bloquiam a digitação no display e associam os eventos aos botões */
document.addEventListener("DOMContentLoaded", () => {
    bloquearInput();
    configurarBotoes();
});
