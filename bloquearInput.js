//Adicionar o evento de teclado para impedir a ação padrão

function bloquearInput() {
    const display = document.querySelector(".display" );
    // Impede o usuário de digitar diretamente no campo de entrada
    display.addEventListener("keydown", function(event) {
        event.preventDefault();
    });
    // Impede o usuário de colar texto no campo de entrada
    display.addEventListener("paste", function(event) {
        event.preventDefault();
    });
}