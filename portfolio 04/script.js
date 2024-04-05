document.addEventListener("DOMContentLoaded", function() {
    // Array de projetos (pode ser substituído por uma chamada à API)
    const projetos = [
        { 
            nome: "Projeto 1",
            descricao: "Descrição do Projeto 1",
            link: "https://www.projeto1.com"
        },
        { 
            nome: "Projeto 2",
            descricao: "Descrição do Projeto 2",
            link: "https://www.projeto2.com"
        }
    ];
    // Função para alternar o menu lateral


    const projetosContainer = document.getElementById("projetos-container");

    // Adiciona cada projeto ao HTML
    projetos.forEach(projeto => {
        const projetoDiv = document.createElement("div");
        projetoDiv.classList.add("projeto");

        const nome = document.createElement("h3");
        nome.textContent = projeto.nome;
        projetoDiv.appendChild(nome);

        const descricao = document.createElement("p");
        descricao.textContent = projeto.descricao;
        projetoDiv.appendChild(descricao);

        const link = document.createElement("a");
        link.textContent = "Ver mais";
        link.href = projeto.link;
        link.target = "_blank";
        projetoDiv.appendChild(link);

        projetosContainer.appendChild(projetoDiv);
    });

    // Adiciona comportamento ao formulário de contato
    const contatoForm = document.getElementById("contato-form");
    contatoForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Aqui você pode adicionar código para enviar o formulário
        alert("Formulário enviado!");
    });
});

function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}