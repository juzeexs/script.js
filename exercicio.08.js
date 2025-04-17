// Criando o objeto com dados de um usuário //
const usuario = {
nome: "José Vítor pinto",
email: "painpintojose@gmail.com",
idade: 19
};
  

console.log("Objeto original:", usuario);
  

const usuarioJSON = JSON.stringify(usuario);
console.log("Objeto convertido para JSON:", usuarioJSON);
  

const usuarioReconstruido = JSON.parse(usuarioJSON);
console.log("Objeto reconstruído a partir do JSON:", usuarioReconstruido);
  



