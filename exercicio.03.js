function contarVogais(str) {
// Convertendo a string para minúsculas para facilitar a comparação //
str = str.toLowerCase();
  
// Definindo as vogais
const vogais = ['a', 'e', 'i', 'o', 'u'];
  
// Inicializando o contador //
let contador = 0;
  
// Loop pela string para contar as vogais //
for (let i = 0; i < str.length; i++) {
if (vogais.includes(str[i])) {
contador++;
}
}
  
return contador;
}
  
// Exemplo de uso: //
const resultado = contarVogais("Olá, mundo!");
console.log("Quantidade de vogais:", resultado);
  




