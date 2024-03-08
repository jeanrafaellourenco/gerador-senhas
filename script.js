const anoAtual = new Date().getFullYear();
document.getElementById('ano-atual').textContent = anoAtual;

function gerarSenha() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';
    let senha = '';
    for (let i = 0; i < 12; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return senha;
}

function copiarSenha() {
    const senha = document.getElementById('senha');
    senha.select();
    document.execCommand('copy');
    M.toast({ html: 'Senha copiada!', classes: 'rounded' });
}

document.getElementById('gerar-senha').addEventListener('click', function () {
    const senha = gerarSenha();
    document.getElementById('senha').value = senha;
});

document.getElementById('copiar-senha').addEventListener('click', copiarSenha);

M.AutoInit();
