export function adicionarHistorico(expressao, resultado) {
    const historico = document.getElementById('historico');

    if (historico) {
        const itemHistorico = document.createElement('li');
        itemHistorico.textContent = `${expressao} = ${resultado}`;
        historico.appendChild(itemHistorico);
    }
} 