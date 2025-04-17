// Função que executa uma operação matemática recebendo dois números e uma função de operação //
function executarOperacao(num1, num2, operacao) {
return operacao(num1, num2);
}
  
// Funções de operações matemáticas //
function soma(a, b) {
return a + b;
}
  
function subtracao(a, b) {
return a - b;
}
  
function multiplicacao(a, b) {
return a * b;
}
  
function divisao(a, b) {
if (b === 0) {
return "Erro: divisão por zero!";
}
return a / b;
}
  
// Exemplo de uso: //
console.log("Soma:", executarOperacao(10, 5, soma));
console.log("Subtração:", executarOperacao(10, 5, subtracao));
console.log("Multiplicação:", executarOperacao(10, 5, multiplicacao));
console.log("Divisão:", executarOperacao(10, 5, divisao));
console.log("Divisão por zero:", executarOperacao(10, 0, divisao));
  



