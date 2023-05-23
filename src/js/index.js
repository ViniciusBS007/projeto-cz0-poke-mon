// toda a vez que for fazer a programação do JavaScipt, é preciso fazer passos para analisar e ordenar o que cada código vai fazer como descrito abaixo:
/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que alterar a cor do tema da página para as cores do tema claro ou do tema escuro

    - objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no body pra que os estilos do modo escuro sejam aplicados e mudar a imagem pra lua.
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema;
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body;
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema;
        - passo 4 - verificar se o body já tem a classe modo-escuro;
    
    - objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol.
        - passo 5 - remover a classe do modo-escuro do body;
        -passo 6 - trocar a imagem do botão de alterar tema pra sol.
        - passo 7 - adicionar a classe modo-escuro no body;
        - passo 8 - trocar a imagem do botão de alterar tema pra lua.
*/

// O correto NÃO É COLOCAR ESTAS "DESCRIÇÕES" quando for apresentar o seu projeto para alguém ou a uma empresa, JAMAIS!!!

//- passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema;

const botaoAlterarTema = document.getElementById("botao-alterar-tema");

//passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body;
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

// 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema;
botaoAlterarTema.addEventListener("click", () => {
    
    //passo 4 - verificar se o body já tem a classe modo-escuro;
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro");

    if(modoEscuroEstaAtivo) {
    //passo 5 - remover a classe do modo-escuro do body;

    //passo 6 - trocar a imagem do botão de alterar tema pra sol.
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});