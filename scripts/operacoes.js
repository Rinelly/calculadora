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
        const expressao = display.value;
        try {
            display.value = eval(display.value);
            adicionarHistorico(expressao, display.value);
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