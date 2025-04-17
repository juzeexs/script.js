function contagemRegressiva() {
let tempoRestante = 5;
  
const intervalo = setInterval(() => {
console.log(tempoRestante + " segundos restantes");
tempoRestante--;
  
if (tempoRestante < 0) {
clearInterval(intervalo);
console.log("Tempo esgotado!");
}
}, 1000);
}
  
contagemRegressiva();
  



