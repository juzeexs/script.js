function mostrarRelogio() {
// Cria um novo objeto Date para pegar a hora atual
const data = new Date();
  
// Obtém as horas, minutos e segundos
const horas = String(data.getHours()).padStart(2, '0');
const minutos = String(data.getMinutes()).padStart(2, '0');
const segundos = String(data.getSeconds()).padStart(2, '0');
  
// Exibe a hora no formato "hh:mm:ss"
console.clear();
console.log(`${horas}:${minutos}:${segundos}`);
}
  
setInterval(mostrarRelogio, 1000);
  



