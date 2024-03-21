// Variáveis para os elementos HTML
var fieldsets = document.querySelectorAll("fieldset");
var progressbar = document.getElementById("progressbar").querySelectorAll("li");

// Variáveis de controle
var current_fs = 0;
var animating = false;

// Função para avançar para o próximo campo
function nextFieldset() {
    if (animating || current_fs >= fieldsets.length - 1) return false;
    animating = true;

    var next_fs = fieldsets[current_fs + 1];

    // Ativar o próximo passo na barra de progresso
    progressbar[current_fs + 1].classList.add("active");

    // Ocultar o fieldset atual
    fieldsets[current_fs].style.display = "none";

    // Mostrar o próximo fieldset
    next_fs.style.display = "block";

    // Atualizar o índice do fieldset atual
    current_fs++;

    // Resetar a flag de animação
    animating = false;
}

// Função para voltar para o fieldset anterior
function previousFieldset() {
    if (animating || current_fs <= 0) return false;
    animating = true;

    var previous_fs = fieldsets[current_fs - 1];

    // Desativar o passo atual na barra de progresso
    progressbar[current_fs].classList.remove("active");

    // Ocultar o fieldset atual
    fieldsets[current_fs].style.display = "none";

    // Mostrar o fieldset anterior
    previous_fs.style.display = "block";

    // Atualizar o índice do fieldset atual
    current_fs--;

    // Resetar a flag de animação
    animating = false;
}

// Event listeners para os botões de próxima e anterior
document.querySelectorAll(".next").forEach(function(button) {
    button.addEventListener("click", nextFieldset);
});

document.querySelectorAll(".previous").forEach(function(button) {
    button.addEventListener("click", previousFieldset);
});
