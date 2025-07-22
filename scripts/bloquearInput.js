/**
 * @file bloquearInput.js
 * @description Impede que o usuário digite ou cole valores diretamente no campo de exibição da calculadora, garantindo que apenas os botões sejam usados para entrada de dados. 
 * @author Rinelly Vasconcelos
 * @version 1.0.0
 * @date jul/2025
 */
 
/**
 * Adiciona eventos ao campo de display da calculadora para bloquear entradas via teclado e colagem de texto.
 */

export function bloquearInput() {
    // Impede a entrada de dados no campo de exibição
        const display = document.querySelector(".display");
        if (!display) return;
    // Impede o usuário de digitar diretamente no campo de entrada
        display.addEventListener("keydown", function(event) {
        event.preventDefault();
    });
    
    // Impede o usuário de colar texto no campo de entrada
        display.addEventListener("paste", function(event) {
        event.preventDefault();
    });
}

