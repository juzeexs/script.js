function mostrarDataHoraAtual() {
// Cria um novo objeto Date com a data e hora atuais
const data = new Date();

const dia = String(data.getDate()).padStart(2, '0');
const mes = String(data.getMonth() + 1).padStart(2, '0');
const ano = data.getFullYear();
const horas = String(data.getHours()).padStart(2, '0');
const minutos = String(data.getMinutes()).padStart(2, '0');
const segundos = String(data.getSeconds()).padStart(2, '0');
  
// Exibe a data e hora no formato desejado
console.log(`Hoje é ${dia}/${mes}/${ano} e agora são ${horas}:${minutos}:${segundos}`);
}
  
// Chama a função para exibir a data e hora
mostrarDataHoraAtual();
  