/*Const não muda
  Let é variavél*/

const nome = "marco";
let nome2 = "marco";
let pessoaDefault = {
    nome: "marco",
    idade: "16",
    profissao: "programador"
} 

let nomes = ["Neymar", "Rochet" , "Alan Patrick"]
let pessoas = [{
    nome: "Neymar",
    idade: "31",
    profissao: "programador"
    },
    {
        nome: "Alan Patrick",
        idade: "30",
        profissao: "Jogador de futebol"
    }   
];

let pessoasListaVazia = [];

    function alterarNome(){
    nome2 = "Marcola"
    console.log("Valor Alterado:");
    console.log(nome2);
}

    function recebeEalteranome(Novonome){
    nome2 = Novonome;
    console.log("Valor Alterado recebendo um novo nome:");
    console.log(nome2);
}

/*recebeEalteranome ("neymar");
recebeEalteranome ("rochet");*/


    function imprimirPessoa (pessoa){
    console.log ("Nome:");
    console.log (pessoa.nome);

    console.log ("Idade:");
    console.log (pessoa.idade);

    console.log ("Profissão:");
    console.log (pessoa.profissao);

}

imprimirPessoa (pessoaDefault);

console.log(nomes [2]);

function addPessoa (pessoa){
    pessoas.push (pessoa);
}

addPessoa({
    nome:"marcola",
    idade:"17",
    profissao: "web developer"
})

function imprimirPessoas (){
    console.log("-----IMPRIMIR PESSOAS-----")
    pessoas.forEach ((item) => {
        console.log ("NOME:")
        console.log (item.nome)

        console.log ("IDADE:")
        console.log (item.idade)

        console.log ("PROFISSÃO:")
        console.log (item.profissao)
    })
}

imprimirPessoas();


/*imprimirPessoa({
    nome:"joaozinho",
    idade : 30,
    profissao :"estudante de programação"
});*/