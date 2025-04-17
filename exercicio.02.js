// Array de produtos //
const produtos = [
{ nome: "Camisa", preco: 49.99, categoria: "Roupas" },
{ nome: "Calça Jeans", preco: 89.90, categoria: "Roupas" },
{ nome: "Smartphone", preco: 1200.00, categoria: "Eletrônicos" },
{ nome: "Fone de Ouvido", preco: 199.90, categoria: "Eletrônicos" },
{ nome: "Livro", preco: 39.90, categoria: "Livros" }
];
  
// Função que filtra produtos por categoria //
function filtrarPorCategoria(produtos, categoriaDesejada) {
return produtos.filter(produto => produto.categoria === categoriaDesejada);
}
  
// Exemplo de uso: //
const eletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
console.log("Produtos Eletrônicos:", eletronicos);
  
const roupas = filtrarPorCategoria(produtos, "Roupas");
console.log("Produtos Roupas:", roupas);
  
const livros = filtrarPorCategoria(produtos, "Livros");
console.log("Produtos Livros:", livros);
  



