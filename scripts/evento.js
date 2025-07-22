/**
 * @file evento.js
 * @description Responsável por associar os botões da calculadora às suas respectivas funções de ação e valor. Lida com cliques usando atributos data-valor e data-acao.
 * @author Rinelly Vasconcelos
 * @version 1.0.0
 * @date jul/2025
 */

import { adicionarCaracter, limpaTela, calcular, inverterSinal } from './operacoes.js';

/**
 * @function configurarBotoes
 * Adiciona os listeners de clique aos botões da calculadora.
 * Botões com data-valor adicionam caracteres ao display.
 * Botões com data-acao executam ações específicas como limpar, calcular e inverter sinal.
 */
export function configurarBotoes() {
    const botoes = document.querySelectorAll("button");

    const acoes = {
        "limpar": limpaTela, //Associa a ação "limpar" à função limpaTela
        "calcular": calcular, //Associa a ação "calcular" à função calcular
        "inverter": inverterSinal //Associa a ação "inverter" à função inverterSinal
    };
    // Itera sobre todos os botões e define o comportamento de clique
    botoes.forEach(botao => {
        const valor = botao.dataset.valor;
        const acao = botao.dataset.acao;
        
    // Se for um botão com valor (número ou operador), adiciona o caractere ao display
        if (valor != null) {
            botao.addEventListener("click", () => {
                adicionarCaracter(valor);
            });
        }
    // Se for um botão com ação específica, executa a função correspondente
        if (acoes[acao]) {
            botao.addEventListener("click", acoes[acao]);
        }
    });
}