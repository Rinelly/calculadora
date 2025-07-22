import { adicionarCaracter, limpaTela, calcular, inverterSinal } from './operacoes.js';

export function configurarBotoes() {
    const botoes = document.querySelectorAll("button");

    const acoes = {
        "limpar": limpaTela,
        "calcular": calcular,
        "inverter": inverterSinal
    }; 

    botoes.forEach(botao => {
        const valor = botao.dataset.valor;
        const acao = botao.dataset.acao;

        if (valor != null) {
            botao.addEventListener("click", () => {
                adicionarCaracter(valor);
            });
        }

        if (acoes[acao]) {
            botao.addEventListener("click", acoes[acao]);
        }
    });
}