// Simulando a resposta da API com uma lista de tarefas no formato JSON
const respostaAPI = `{
    "tarefas": [
      { "descricao": "Estudar JS", "concluida": true },
      { "descricao": "Ler livro", "concluida": false },
      { "descricao": "Praticar exercícios", "concluida": true }
    ]
  }`;
  

const dados = JSON.parse(respostaAPI);
  

function imprimirTarefasConcluidas(dados) {
const tarefasConcluidas = dados.tarefas.filter(tarefa => tarefa.concluida);
    

tarefasConcluidas.forEach(tarefa => {
console.log(`Tarefa concluída: ${tarefa.descricao}`);
});
}
  

imprimirTarefasConcluidas(dados);
  



