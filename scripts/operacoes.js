import { adicionarHistorico } from './adicionarHistorico.js';

export function adicionarCaracter(caracter) {
    const display = document.querySelector(".display");
    if (display) {
        display.value += caracter;
    }
}

export function limpaTela() {
    const display = document.querySelector(".display");
    if (display) {
        display.value = "";
    }
}

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

export function inverterSinal() {
    const display = document.querySelector(".display");
    if (display) {
        display.value = eval(display.value) * -1;
    }
}