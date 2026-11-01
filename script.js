// Selecionar os elementos
const inputTelefone = document.getElementById('telefone');
const inputMensagem = document.getElementById('mensagem');
const previewTexto = document.getElementById('previewTexto');
const btnGerar = document.getElementById('btnGerar');
const btnSalvar = document.getElementById('btnSalvar');

const caixaResultado = document.getElementById('caixaResultado');
const linkGeradoInput = document.getElementById('linkGeradoInput');
const linkDireto = document.getElementById('linkDireto');

// Carregar dados guardados ao abrir a página
window.addEventListener('DOMContentLoaded', () => {
    const telefoneSalvo = localStorage.getItem('zap_telefone');
    const mensagemSalva = localStorage.getItem('zap_mensagem');

    if (telefoneSalvo) inputTelefone.value = telefoneSalvo;
    if (mensagemSalva) {
        inputMensagem.value = mensagemSalva;
        previewTexto.innerText = mensagemSalva;
    }
});

// Atualizar pré-visualização em tempo real
inputMensagem.addEventListener('input', () => {
    const texto = inputMensagem.value;
    if (texto.trim() === "") {
        previewTexto.innerText = "A sua mensagem vai aparecer aqui...";
    } else {
        previewTexto.innerText = texto;
    }
});

// Ação do Botão "Gerar e Abrir Link"
btnGerar.addEventListener('click', () => {
    const tel = inputTelefone.value.trim();
    const msg = inputMensagem.value.trim();

    // Validação estrita
    if (tel === "") {
        alert("Por favor, digite o número de telemóvel!");
        inputTelefone.focus();
        return;
    }

    // Formatar URL corretamente
    const msgFormatada = encodeURIComponent(msg);
    const urlWhatsApp = `https://wa.me/244${tel}?text=${msgFormatada}`;

    // Mostrar o resultado na interface (em vez de falhar silenciosamente)
    linkGeradoInput.value = urlWhatsApp;
    linkDireto.href = urlWhatsApp;
    caixaResultado.style.display = 'block'; // Mostra a caixa que estava escondida

    // Tentar abrir automaticamente numa nova aba
    window.open(urlWhatsApp, '_blank');
});

// Ação do Botão "Guardar Dados"
btnSalvar.addEventListener('click', () => {
    localStorage.setItem('zap_telefone', inputTelefone.value);
    localStorage.setItem('zap_mensagem', inputMensagem.value);
    alert("Dados guardados com sucesso no navegador!");
});



