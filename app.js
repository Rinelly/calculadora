
function adicionarCaracter(caracter){

    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = valorDisplay + caracter;
}

function limpaTela() {
    document.querySelector(".display").value = "";
}

function calcular() {
    const valorDisplay = document.querySelector(".display").value;

    document.querySelector(".display").value = eval(valorDisplay);
}

function inverterSinal() {
    const valorDisplay = document.querySelector(".display").value;
    
    document.querySelector(".display").value = eval(valorDisplay) * -1;
}

//Adicionar o evento de teclado para impedir a ação padrão

window.onload = function() {
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