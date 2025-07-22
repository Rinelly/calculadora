//Funcão para adicionar o evento de teclado para impedir a ação padrão
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

