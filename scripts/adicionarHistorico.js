/**
 * @file adicionarHistorico.js
 * @description Responsável por adicionar os cálculos realizados ao histórico visível na interface da calculadora.
 * @author Rinelly Vasconcelos 
 * @version 1.0.0
 * @date jul/2025
 */

 /**
 * Adiciona uma expressão e seu resultado à lista de histórico da calculadora.
 * @param {string} expressao - A expressão matemática digitada pelo usuário.
 * @param {string|number} resultado - O resultado calculado da expressão.
 */
export function adicionarHistorico(expressao, resultado) {
    const historico = document.getElementById('historico');

    if (historico) {
        const itemHistorico = document.createElement('li');
        itemHistorico.textContent = `${expressao} = ${resultado}`;
        historico.appendChild(itemHistorico);
    }
}