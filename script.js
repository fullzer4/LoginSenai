const login = () => {
    let email = document.getElementById('email').value
    let substrair = email.split("@");

    // Email não institucional:

    if (substrair[1] != "estudante.sesisenai.org.br") {
        document.getElementById('email_errado').innerHTML = "Email não institucional"
        email.classList.add(".borda_vermelha")
        // Informações corretas:

    } else {
        let hide = document.querySelector('.div-3');
        hide.style.display = "none"

        document.querySelector('.formulario').innerHTML = `
            <h2>Logado com sucesso</h2>
            <h3>Acesse a página inicial para começar</h3>
            <button class="btn_1" onclick="voltar()">Início</button>
            `
    }
}

const voltar = () => {
    window.location.reload()
}

const cadastrar = () => {
    let hide = document.querySelector('.div-3');
    hide.style.display = "none"

    document.querySelector('.formulario').innerHTML = `
        <h2>CADASTRO</h2>
        <div class="div_cadastro">
            <div class="div_parte">
                <p id="nome">Nome</p>
                <input id="email" type="text" placeholder="Nome">
            </div>
            <div class="div_parte">
                <p id="email_para">Email</p>
                <input id="email" type="email" placeholder="E-mail">
            </div>
            <div class="div_parte">
                <p id="email_para">Senha</p>
                <input id="email" type="password" placeholder="Senha">
            </div>
            <button onclick="cadastro()">Cadastro</button>
        </div>
        `
}