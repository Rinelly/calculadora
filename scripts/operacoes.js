/**
 * @file operacoes.js
 * @description Funções principais da calculadora, incluindo manipulação do display, cálculo de expressões e histórico.
 * @author Rinelly Vasconcelos 
 * @version 1.0.0
 * @date jul/2025
 */

/** Importando a função para adicionar histórico de operações */
import { adicionarHistorico } from './adicionarHistorico.js';

/**
 * Adiciona um caractere ao display da calculadora.
 * @param {string} caracter - O caractere a ser adicionado ao display.
 */
export function adicionarCaracter(caracter) {
    const display = document.querySelector(".display");
    if (display) {
        display.value += caracter;
    }
}
/**
 * Limpa o conteúdo do display da calculadora.
 */
export function limpaTela() {
    const display = document.querySelector(".display");
    if (display) {
        display.value = "";
    }
}

/**
 *  Realiza o cálculo da expressão contida no display.
 *  Substitui vírgulas por pontos para compatibilidade com eval.
 *  Adiciona o resultado ao histórico de operações.
 */
export function calcular() {
    const display = document.querySelector(".display");
    if (display) {
        const expressaoOriginal = display.value;
        const expressao = expressaoOriginal.replace(/,/g, '.'); // Substitui vírgulas por pontos
        try {
            const resultado = eval(expressao);
            display.value = String(resultado).replace('.', ','); // Converte o resultado para string e substitui ponto por vírgula
            // Adiciona o histórico
            adicionarHistorico(expressaoOriginal, display.value);
        } catch (e) {
            display.value = "Erro";
        }
    }
}
/**
 * Inverte o sinal do número atual no display.
 * Multiplica o valor atual por -1
 */
export function inverterSinal() {
    const display = document.querySelector(".display");
    if (display) {
        try {
            const valor = eval(display.value.replace(/,/g, '.')); // Substitui vírgula por ponto para compatibilidade com eval
            display.value = String(valor * -1).replace('.', ','); // Converte o resultado para string e substitui ponto por vírgula
        } catch (e) {
            display.value = "Erro";
        }
    }
}